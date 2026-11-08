import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Total sessions (Web)',
    description: 'Learn how Vexo counts browsing sessions on your website in a period, and how to read them with active users and session time to gauge returning traffic.',
}

export default function Home() {
    return <Docs />
}
