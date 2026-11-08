import type { MetadataRoute } from 'next'
import { appRoutes } from '../lib/docPages'
import { SITE_URL } from '../lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return appRoutes()
    .sort()
    .map((route) => ({ url: `${SITE_URL}${route}` }))
}
