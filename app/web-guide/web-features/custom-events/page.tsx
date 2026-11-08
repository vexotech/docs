import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Custom events (Web)',
    description: 'Track business actions on your website with globalThis.vexo.customEvent and properties, see total and unique counts, and link events to users and replays.',
}

export default function Home() {
    return <Docs />
}
