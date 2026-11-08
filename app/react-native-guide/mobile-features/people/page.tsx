import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'People (React Native)',
    description: 'Find React Native app users in Vexo People: sort, filter, and export to CSV, open profiles with events, sessions, and replays, and add IDs with identifyDevice.',
}

export default function Home() {
    return <Docs />
}
