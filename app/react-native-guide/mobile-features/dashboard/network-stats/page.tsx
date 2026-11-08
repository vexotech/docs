import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Network stats (React Native)',
    description: 'Track HTTP requests from your React Native app by route, status code, count, and p99 latency, and learn which requests Vexo excludes or samples out.',
}

export default function Home() {
    return <Docs />
}
