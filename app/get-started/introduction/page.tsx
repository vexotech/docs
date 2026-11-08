import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Introduction',
}

export default function Home() {
    return <Docs />
}