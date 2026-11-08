import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Version adoption (React Native)',
    description: "Track which versions of your React Native app your users run. Vexo maps each device to its current version and shows each version's share of devices.",
}

export default function Home() {
    return <Docs />
}
