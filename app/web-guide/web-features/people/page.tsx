import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'People (Web)',
    description: 'Find any website visitor in Vexo People: sort, filter by browser, OS, or country, export to CSV, open profiles, and link visitors to users with identifyDevice.',
}

export default function Home() {
    return <Docs />
}
