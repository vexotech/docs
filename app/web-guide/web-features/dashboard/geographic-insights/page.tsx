import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Geographic insights (Web)',
    description: "See where your website visitors come from. Vexo resolves each session's location from its IP address with MaxMind GeoLite, and you can compare it with UTMs.",
}

export default function Home() {
    return <Docs />
}
