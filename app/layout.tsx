import Head from 'next/head'
import type { Metadata } from 'next'
import './globals.css'
import { CommandPalette, SearchProvider } from '../components'
import { BRAND_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site'

// Pages set their own title and description; Open Graph and Twitter tags inherit them.
// The relative canonical resolves against each page's path, so every page points at itself.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME}: React Native and web analytics`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: './' },
  openGraph: {
    siteName: BRAND_NAME,
    images: { url: 'https://www.vexo.co/vexo-04.png' },
  },
}

// Google reads the site name it shows in search results from WebSite structured data.
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  alternateName: 'Vexo',
  url: `${SITE_URL}/`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <script defer data-domain="vexo.co" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SearchProvider>
          {children}
          <CommandPalette />
        </SearchProvider>
      </body>
    </html>
  )
}
