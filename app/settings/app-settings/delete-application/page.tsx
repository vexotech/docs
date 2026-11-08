import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Delete an application',
    description: "Learn how an app's owner deletes a Vexo app from the Danger Zone, what happens to its API key and dashboard, and why its stored data isn't erased.",
}

export default function Home() {
    return <Docs />
}