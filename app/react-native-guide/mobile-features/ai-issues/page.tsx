import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI issues',
    description: "Get a weekly AI report of your React Native app's top errors, ANRs, and rage taps across sessions, with example replays, and send an issue to GitHub for a coding agent to fix.",
}

export default function Home() {
    return <Docs />
}
