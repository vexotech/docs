import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Console logs (React Native)',
    description: 'Capture console log, info, warn, and error output from your React Native app in session replays, with level filters, search, billing, and privacy notes.',
}

export default function Home() {
    return <Docs />
}
