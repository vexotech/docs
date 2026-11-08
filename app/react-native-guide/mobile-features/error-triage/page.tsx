import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Error triage (React Native)',
    description: "Find and investigate your React Native app's error groups, mark them resolved or ignored, assign them, spot regressions, and watch the replay of a crash.",
}

export default function Home() {
    return <Docs />
}
