import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'React Native integration',
    description: 'Set up Vexo in React Native after you install it: skip development builds, learn how batching works, and use identifyDevice, opt-in tracking, and trackError.',
}

export default function Home() {
    return <Docs />
}