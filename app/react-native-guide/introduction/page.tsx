import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'React Native introduction',
    description: 'Get an overview of Vexo for React Native and Expo: automatic analytics, session replays, screen and tap heatmaps, funnels, People, and privacy controls.',
}

export default function Home() {
    return <Docs />
}