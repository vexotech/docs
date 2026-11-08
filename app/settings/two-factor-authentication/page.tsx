import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Two-factor authentication',
    description: 'Protect your Vexo account with a 6-digit code from an authenticator app, save one-time recovery codes, and turn two-factor authentication on or off.',
}

export default function Home() {
    return <Docs />
}
