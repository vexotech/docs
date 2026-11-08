import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Server-side capture',
    description: 'Send events and identifies from your backend with the Vexo HTTP capture API or the Node.js and Python SDKs: authentication, batching, limits, retries, and billing.',
}

export default function Home() {
    return <Docs />
}
