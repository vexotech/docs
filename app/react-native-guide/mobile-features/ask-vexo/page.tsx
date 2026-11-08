import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ask Vexo and AI summaries',
    description: "Ask plain-language questions about your React Native app's metrics on the dashboard, and read an AI summary of what happened in each user session.",
}

export default function Home() {
    return <Docs />
}
