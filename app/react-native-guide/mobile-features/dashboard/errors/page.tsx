import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Errors widget (React Native)',
    description: 'Spot the most frequent errors in your React Native app on the dashboard. Vexo groups errors by message and shows affected devices and occurrence counts.',
}

export default function Home() {
    return <Docs />
}
