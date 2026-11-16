import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Audit log',
    description: "See who signed in, changed access, viewed replays, or exported data in your Vexo apps, filter the app and team audit logs, and send the team log to your SIEM.",
}

export default function Home() {
    return <Docs />
}
