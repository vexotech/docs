import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Active users (Web)',
    description: 'Learn how Vexo counts active users on your website: any visitor with at least one page view, click, or tracked event in the selected range, counted per day.',
}

export default function Home() {
    return <Docs />
}
