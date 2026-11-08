import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Browser distribution (Web)',
    description: 'See which browsers your website visitors use, such as Chrome, Safari, Firefox, and Edge, so you can catch compatibility issues and focus browser testing.',
}

export default function Home() {
    return <Docs />
}
