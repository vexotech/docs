import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Revenue analytics',
    description: 'Connect RevenueCat or Stripe to see MRR, LTV by cohort, and your paywall funnel next to how people use your app.',
}

export default function Home() {
    return <Docs />
}
