import fs from 'fs'
import path from 'path'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://docs.vexo.co'
const PAGE_FILES = ['page.tsx', 'page.ts', 'page.jsx', 'page.js']

// Walks app/ at build time, so the sitemap always matches the deployed routes.
// ponytail: skips route groups and dynamic segments — this repo has neither;
// revisit if app/(group)/ or app/[param]/ dirs ever appear.
function routesUnder(dir: string, route: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const routes: string[] = []
  if (entries.some((e) => e.isFile() && PAGE_FILES.includes(e.name))) {
    routes.push(route || '/')
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue
    if (/^[_([]/.test(e.name)) continue
    routes.push(...routesUnder(path.join(dir, e.name), `${route}/${e.name}`))
  }
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routesUnder(path.join(process.cwd(), 'app'), '')
    .sort()
    .map((route) => ({ url: `${BASE_URL}${route}` }))
}
