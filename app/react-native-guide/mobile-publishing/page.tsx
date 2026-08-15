import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Publishing your app | Vexo Documentation',
}

export default function Home() {
    return <Docs />
}
