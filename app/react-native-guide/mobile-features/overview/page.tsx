import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Overview',
}

export default function Home() {
    return <Docs />
}