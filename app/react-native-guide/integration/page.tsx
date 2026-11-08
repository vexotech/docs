import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'React Native Integration',
}

export default function Home() {
    return <Docs />
}