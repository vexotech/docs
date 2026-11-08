import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Custom event webhooks',
    description: 'Send every custom event from your app to your own endpoint with Vexo webhooks, and learn the validation token header and the JSON payload fields.',
}

export default function Home() {
    return <Docs />
}
