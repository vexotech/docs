import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Session replays (Web)',
    description: 'Watch real website sessions in Vexo to see clicks, scrolls, and navigation in context. Web replays run up to about 5 minutes at roughly 200 KB per minute.',
}

export default function Home() {
    return <Docs />
}
