import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Integrations',
    description: 'Connect Vexo to Slack, Microsoft Teams, Jira, Segment, Firebase Crashlytics, and GitHub to share alerts, file issues, forward events, and import crashes.',
}

export default function Home() {
    return <Docs />
}
