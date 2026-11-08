import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Locations (Web)',
    description: "Compare your website's visitors, new visitors, sessions, and session length by country on a map or globe, and compare countries with each other.",
}

export default function Home() {
    return <Docs />
}
