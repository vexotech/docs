import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web integration',
    description: 'Add the Vexo analytics script to a Next.js app with the Script component and the afterInteractive strategy, so tracking loads after the page is interactive.',
}

export default function Home() {
    return <Docs />
}
