import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'New users (Web)',
    description: 'Learn how Vexo counts first-time visitors to your website in a selected timeframe, once per browser and device, to measure growth from campaigns and SEO.',
}

export default function Home() {
    return <Docs />
}
