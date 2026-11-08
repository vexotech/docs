import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Funnels (Web)',
    description: 'Build website funnels from custom events and routes to see where visitors drop off in flows like onboarding or checkout. Each funnel has 2 to 8 steps.',
}

export default function Home() {
    return <Docs />
}
