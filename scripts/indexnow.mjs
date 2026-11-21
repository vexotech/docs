// Tells IndexNow search engines (Bing, Yandex, Naver, Seznam, and Yep) which docs pages changed, so they recrawl
// them now instead of on their next pass. Google doesn't use IndexNow; it reads the sitemap.
//
// Usage: git diff --name-only --no-renames HEAD^1 HEAD | node scripts/indexnow.mjs [--dry-run]
// The IndexNow workflow runs this after each successful production deploy. --dry-run prints the URLs instead of
// submitting them.
import { readFileSync } from 'node:fs'
import { basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { appRoutes, PAGE_FILES } from '../lib/appRoutes.ts'
import { SITE_URL } from '../lib/site.ts'

// Not a secret: IndexNow proves ownership by fetching the same key from public/<key>.txt.
export const KEY = '39279b64ea8ca97b3b6e510854ccafae'

// Maps changed files to the docs URLs they render, using the routes the sitemap lists. A file belongs to the nearest
// route at or above its folder, so a page's docs.mdx maps to that page and a shared file in app/ (such as
// layout.tsx) maps to /. Files outside app/, such as the sidebar and shared components, map to nothing.
// ponytail: that undercounts a shared file's pages; submit the whole sitemap if that ever matters.
// A deleted page file still maps to its own URL, so engines recrawl it and see the 404 or redirect.
export function urlsForChangedFiles(files, routes = appRoutes()) {
  const urls = new Set()
  for (const file of files) {
    if (!file.startsWith('app/')) continue

    let route = dirname(file).slice('app'.length) || '/'
    if (!PAGE_FILES.includes(basename(file))) {
      while (route !== '/' && !routes.includes(route)) route = dirname(route)
    }
    urls.add(`${SITE_URL}${route}`)
  }
  return [...urls]
}

async function submit(urlList) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(SITE_URL).host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList }),
  })
  // 200 = accepted, 202 = accepted while the key is still being verified. Anything else (403 bad key, 422 URL not on
  // this host, 429 too many requests) fails the job so it shows up in Actions.
  if (res.status !== 200 && res.status !== 202) throw new Error(`IndexNow returned ${res.status}: ${await res.text()}`)
  console.log(`IndexNow accepted ${urlList.length} URL(s) (${res.status}):\n${urlList.join('\n')}`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const files = readFileSync(0, 'utf8').split('\n').map((f) => f.trim()).filter(Boolean)
  const urls = urlsForChangedFiles(files)
  if (urls.length === 0) console.log('No docs pages changed; nothing to submit.')
  else if (process.argv.includes('--dry-run')) console.log(`Would submit ${urls.length} URL(s):\n${urls.join('\n')}`)
  else await submit(urls)
}
