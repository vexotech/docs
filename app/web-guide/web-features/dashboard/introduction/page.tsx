import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard introduction (Web)',
    description: 'Tour the Vexo dashboard for websites: it fills in as soon as you add the script, and you can click any value to filter by country, browser, referrer, or UTM.',
}

export default function Home() {
    return <Docs />
}
