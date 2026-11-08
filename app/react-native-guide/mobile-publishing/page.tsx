import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Publishing your app',
}

export default function Home() {
    return <Docs />
}
