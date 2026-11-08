import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Feature overview (Web)',
    description: 'Browse what Vexo tracks on websites with no setup, including the stats dashboard, referrers, UTMs, routes, People, session replays, and custom events.',
}

export default function Home() {
    return <Docs />
}
