import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MCP server',
    description: 'Connect Claude Code, Claude Desktop, Cursor, or another MCP client to Vexo and ask read-only questions about the analytics of the apps that you own.',
}

export default function Home() {
    return <Docs />
}
