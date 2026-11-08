import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web introduction',
    description: 'Get an overview of Vexo Web Analytics: add one script tag to any site, from Next.js and Vue to static HTML, and get analytics, replays, and custom events.',
}

export default function Home() {
    return <Docs />
}
