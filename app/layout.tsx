import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Vexo Documentation',
  description: 'Vexo Documentation',
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
      <body>{children}</body>
    </html>
  )
}
