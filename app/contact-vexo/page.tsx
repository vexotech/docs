import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Vexo',
    description: 'Get help from the Vexo team: join the Discord community for real-time support and product updates, email hello@vexo.co, or follow @Vexo_Tech on X.',
}

export default function Home() {
    return <Docs />
}