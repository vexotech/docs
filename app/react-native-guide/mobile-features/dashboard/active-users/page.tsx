import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Active users (React Native)',
    description: 'Learn how Vexo counts active users of your React Native app: anyone with at least one event in the selected range, counted once in the total and per day.',
}

export default function Home() {
    return <Docs />
}
