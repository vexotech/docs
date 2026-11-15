import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'User flow (React Native)',
    description: "See how users move between your React Native app's screens in a Sankey chart, where they drop off, and which screens lead into and out of any screen.",
}

export default function Home() {
    return <Docs />
}
