import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Vexo | Documentation | Next Generation Analytics',
  description: 'Out of the box insights for your React Native applications',
  openGraph: {
    title: 'Vexo | Documentation | Next Generation Analytics',
    description: 'Out of the box insights for your React Native applications',
    images: {
      url: 'https://www.vexo.co/vexo-04.png'
    } 
  },
  twitter: {
    title: 'Vexo | Documentation | Next Generation Analytics',
    description: 'Out of the box insights for your React Native applications',
    images: ['https://www.vexo.co/vexo-04.png']
  }
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
