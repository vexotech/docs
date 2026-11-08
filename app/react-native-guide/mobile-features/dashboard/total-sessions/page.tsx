import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Total sessions (React Native)',
    description: 'Learn how Vexo counts total sessions in your React Native app over a time range, and how to read them together with active users and session time.',
}

export default function Home() {
    return <Docs />
}
