import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Routes (Web)',
    description: 'See which pages on your website get the most traffic, where visitors enter, and which paths lead to drop-offs or conversions, based on real page views.',
}

export default function Home() {
    return <Docs />
}
