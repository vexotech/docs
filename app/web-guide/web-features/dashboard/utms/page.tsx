import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'UTM campaign tracking (Web)',
    description: 'Measure campaigns with the UTM source, medium, campaign, content, and term parameters that Vexo captures, plus anonymized gclid and msclkid ad click IDs.',
}

export default function Home() {
    return <Docs />
}
