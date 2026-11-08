import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Personal access tokens',
    description: 'Create personal access tokens to call the Vexo read API and connect MCP clients as yourself, and rotate or revoke them from your account settings.',
}

export default function Home() {
    return <Docs />
}
