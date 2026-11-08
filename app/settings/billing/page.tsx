import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Billing FAQ',
    description: 'Find answers to common Vexo billing questions: how usage is billed, invoices and extra recipients, payment methods, overages, card updates, and cancelling.',
}

export default function Home() {
    return <Docs />
}
