import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Data retention and deletion',
    description: "Learn how long Vexo keeps your data, how to erase a person's device data through the API for GDPR or CCPA requests, and what deleting an app does.",
}

export default function Home() {
    return <Docs />
}
