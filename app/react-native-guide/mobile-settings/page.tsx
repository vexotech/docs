import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mobile tracking settings (React Native)',
    description: 'Configure mobile tracking for an app: session replay, blur, Wi-Fi-only uploads, replay length, per-event Keep and sampling, and the frame health interval.',
}

export default function Home() {
    return <Docs />
}
