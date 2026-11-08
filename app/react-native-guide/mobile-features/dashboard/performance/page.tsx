import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'App performance (React Native)',
    description: 'Measure cold and warm app start, slow and frozen frames, and per-screen render times in your React Native app, and learn how to sample or turn it off.',
}

export default function Home() {
    return <Docs />
}
