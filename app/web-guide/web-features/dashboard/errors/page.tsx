import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Errors widget (Web)',
    description: 'Spot the most frequent JavaScript errors on your website from the Vexo dashboard, grouped by message with affected devices and occurrence counts.',
}

export default function Home() {
    return <Docs />
}
