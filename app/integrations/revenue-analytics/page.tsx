import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Revenue analytics',
    description: 'Connect RevenueCat or Stripe to see MRR, lifetime value by cohort, and your paywall funnel in Vexo, next to how people use your app. Available on paid plans.',
}

export default function Home() {
    return <Docs />
}
