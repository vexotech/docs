import Head from 'next/head'
import type { Metadata } from 'next'
import './globals.css'
import { CommandPalette, SearchProvider } from '../components'

// Pages set their own title and description; Open Graph and Twitter tags inherit them.
// The relative canonical resolves against each page's path, so every page points at itself.
export const metadata: Metadata = {
  metadataBase: new URL('https://docs.vexo.co'),
  title: {
    template: '%s | Vexo Docs',
    default: 'Vexo Docs: React Native and web analytics',
  },
  description: 'Learn how to add Vexo analytics to React Native, Expo, and web apps, with guides to dashboards, session replays, heatmaps, settings, billing, and the API.',
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
