import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Session time (Web)',
    description: 'Learn how Vexo defines a website session, from landing to closing the tab or going inactive, and calculates average session time to measure engagement.',
}

export default function Home() {
    return <Docs />
}
