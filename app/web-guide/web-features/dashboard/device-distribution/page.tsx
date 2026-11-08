import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Device distribution (Web)',
    description: 'See whether your website visitors browse on desktop or mobile, counted once per device type, so you can prioritize layout, speed, and testing work.',
}

export default function Home() {
    return <Docs />
}
