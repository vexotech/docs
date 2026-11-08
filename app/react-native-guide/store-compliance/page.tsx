import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'App Store and Google Play compliance',
    description: 'See what the Vexo React Native SDK collects, how to declare it in App Store privacy labels and Google Play data safety, and how to get session replay consent.',
}

export default function Home() {
    return <Docs />
}
