import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SDK changelog',
    description: 'Read the release notes for every version of the vexo-analytics React Native SDK, with the new features, behavior changes, and bug fixes in each release.',
}

export default function Home() {
    return <Docs />
}
