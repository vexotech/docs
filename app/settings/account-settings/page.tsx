import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Account settings',
    description: 'Change your Vexo account name and email, check monthly event usage against the free allowance, add or manage billing, and delete your account and apps.',
}

export default function Home() {
    return <Docs />
}
