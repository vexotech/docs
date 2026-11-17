import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SSO and team security',
    description: 'Connect Vexo to Okta, Microsoft Entra ID, Google Workspace, or another identity provider with OIDC or SAML 2.0, verify your email domain, and require SSO or two-factor authentication of your team.',
}

export default function Home() {
    return <Docs />
}
