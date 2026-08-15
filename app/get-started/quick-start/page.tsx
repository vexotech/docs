import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Quickstart | Vexo Documentation',
}

export default function Home() {
    return <Docs />
}