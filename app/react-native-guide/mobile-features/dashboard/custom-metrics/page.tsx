import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Custom metrics (React Native)',
    description: 'Combine Vexo metrics, such as errors and sessions, with arithmetic into your own formula metrics, like errors per 100 sessions, on the dashboard.',
}

export default function Home() {
    return <Docs />
}
