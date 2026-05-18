import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web Introduction | Vexo Documentation',
}

export default function Home() {
    return <Docs />
}
