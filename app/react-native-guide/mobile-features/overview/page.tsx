import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Feature overview (React Native)',
    description: 'Browse what Vexo tracks in React Native apps with no setup, including the stats dashboard, People, session replays, heatmaps, and custom events.',
}

export default function Home() {
    return <Docs />
}