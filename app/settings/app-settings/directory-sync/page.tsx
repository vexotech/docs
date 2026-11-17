import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Directory sync (SCIM)',
    description: 'Provision Vexo users from Okta or Microsoft Entra ID with SCIM 2.0, so that people join your team, and lose access, when IT adds, deactivates, or removes them.',
}

export default function Home() {
    return <Docs />
}
