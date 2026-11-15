import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cohorts and saved segments',
    description: "Build behavioral cohorts from the custom events that users did or didn't send, and save sets of dashboard filters as segments that your whole team can reuse.",
}

export default function Home() {
    return <Docs />
}
