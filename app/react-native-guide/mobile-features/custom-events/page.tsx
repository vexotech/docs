import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Custom events (React Native)',
    description: 'Track business actions in your React Native app with customEvent, a name, and a properties object, then trace each event to its users and session replays.',
}

export default function Home() {
    return <Docs />
}
