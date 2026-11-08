import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Custom dashboard widgets (React Native)',
    description: 'Add widgets to your React Native dashboard that chart daily counts of a custom event, filtered by its properties. The free plan includes up to 3 widgets.',
}

export default function Home() {
    return <Docs />
}
