import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Network stats (Web)',
    description: "Track HTTP requests from your website visitors' browsers by route, status code, request count, and p99 latency, and sort or filter to find slow APIs.",
}

export default function Home() {
    return <Docs />
}
