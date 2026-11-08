import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Session replays and heatmaps (React Native)',
    description: 'Watch React Native session replays and see screen and tap heatmaps by app version and device model, and split heatmaps by segment with setHeatmapSegment.',
}

export default function Home() {
    return <Docs />
}
