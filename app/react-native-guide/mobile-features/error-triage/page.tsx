import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Error triage (React Native)',
    description: "Find and investigate your React Native app's error groups, resolve or assign them, spot regressions, and upload source maps to read original stack traces.",
}

export default function Home() {
    return <Docs />
}
