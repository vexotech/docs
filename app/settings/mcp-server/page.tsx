import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MCP server',
    description: 'Connect Claude Code, Claude Desktop, Cursor, or another MCP client to Vexo to ask about your analytics, session replays, and errors, and to triage errors with the mcp:write scope. Includes the reference for all 15 tools.',
}

export default function Home() {
    return <Docs />
}
