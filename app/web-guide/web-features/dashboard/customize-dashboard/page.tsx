import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Custom dashboard widgets (Web)',
    description: 'Add widgets to your website dashboard that chart the daily usage of a custom event, filtered by its properties. The free plan includes up to 3 widgets.',
}

export default function Home() {
    return <Docs />
}
