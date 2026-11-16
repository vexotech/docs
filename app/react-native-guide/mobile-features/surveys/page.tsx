import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'In-app surveys',
    description: "Ask your users NPS, rating, single-choice, and open-text questions inside your React Native app, target them by screen, event, trait, and cohort, and read each answer next to its session replay.",
}

export default function Home() {
    return <Docs />
}
