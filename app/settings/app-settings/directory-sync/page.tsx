import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Directory sync (SCIM)',
    description: 'Connect your identity provider directory to Vexo so that people join your team, and lose access, when IT adds, suspends, or removes them.',
}

export default function Home() {
    return <Docs />
}
