import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Export API',
    description: "Export your app's raw events with the Vexo Export API: log in for a token, page through events by date range, and read the event fields and error codes.",
}

export default function Home() {
    return <Docs />
}