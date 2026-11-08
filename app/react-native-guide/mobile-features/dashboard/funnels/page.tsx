import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Funnels (React Native)',
    description: 'Build funnels from custom events and screen views to see where React Native app users drop off in flows like onboarding or checkout, with 2 to 8 steps.',
}

export default function Home() {
    return <Docs />
}
