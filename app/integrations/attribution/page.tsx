import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Install attribution',
    description: 'Send install attribution from AppsFlyer, Adjust, or Branch to Vexo, and filter and break down people by media source and campaign.',
}

export default function Home() {
    return <Docs />
}
