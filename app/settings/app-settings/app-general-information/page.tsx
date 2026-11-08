import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'App general information',
    description: "Manage an app's general settings in Vexo: change its name and icon, see billing info and current usage, and copy, revoke, or regenerate its API key.",
}

export default function Home() {
    return <Docs />
}