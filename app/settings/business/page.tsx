import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Business plan',
    description: 'What the Vexo Business plan includes, what it costs monthly or annually, and how to upgrade, switch billing, or cancel.',
}

export default function Home() {
    return <Docs />
}
