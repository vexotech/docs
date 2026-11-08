import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard introduction (React Native)',
    description: 'Tour the Vexo dashboard for React Native apps: the top graph of users, sessions, and downloads, and click-to-filter segments by version, country, and OS.',
}

export default function Home() {
    return <Docs />
}