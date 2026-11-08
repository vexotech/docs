import Head from 'next/head'
import type { Metadata } from 'next'
import './globals.css'
import { CommandPalette, SearchProvider } from '../components'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site'

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
    images: { url: 'https://www.vexo.co/vexo-04.png' },
  },
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
        <SearchProvider>
          {children}
          <CommandPalette />
        </SearchProvider>
      </body>
    </html>
  )
}
