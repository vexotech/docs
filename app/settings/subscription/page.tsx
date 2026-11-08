import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing and subscription',
    description: 'See how Vexo usage-based pricing works: 500,000 free events a month, graduated per-million rates, seats, session replay pricing, events caps, and cancelling.',
}

export default function Home() {
    return <Docs />
}
