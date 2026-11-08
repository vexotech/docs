import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Email digests',
    description: 'Get a daily or weekly email summary of an app\'s events, active users, crash-free sessions, and top errors, sent to the app owner or a list of recipients.',
}

export default function Home() {
    return <Docs />
}
