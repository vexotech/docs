import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Server-side capture',
    description: 'Send events and identifies from your backend with the Vexo HTTP capture API or the server SDKs for Node.js, Python, PHP, Ruby, Go, Java and Kotlin, and .NET: authentication, batching, limits, retries, edge and serverless runtimes, and billing.',
}

export default function Home() {
    return <Docs />
}
