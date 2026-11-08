import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Referrers (Web)',
    description: 'See which websites, platforms, and apps send visitors to your site. Vexo ignores payment and login redirects, groups variant sources, and records domains.',
}

export default function Home() {
    return <Docs />
}
