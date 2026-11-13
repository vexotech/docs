import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SSO and team security',
    description: 'Learn how to set up single sign-on (SAML or OIDC) through your identity provider, and how to require SSO or two-factor authentication of everyone you share apps with.',
}

export default function Home() {
    return <Docs />
}
