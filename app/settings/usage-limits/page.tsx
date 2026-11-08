import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Usage and limits',
    description: 'Review Vexo account and app limits: the 500,000-event free allowance, what counts as usage, event sampling, per-app caps, replay limits, and dropped events.',
}

export default function Home() {
    return <Docs />
}
