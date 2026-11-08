import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Alerts and anomaly detection',
    description: "Get an email, Slack, or Teams message when errors spike, crash-free sessions or retention drop, a custom event fires, or a metric leaves its normal range.",
}

export default function Home() {
    return <Docs />
}
