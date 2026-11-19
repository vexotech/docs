import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Migrate from Smartlook to Vexo',
    description: 'Replace the Smartlook React Native SDK with vexo-analytics before Smartlook shuts down: swap the package, map each Smartlook call to Vexo, and plan the cutover.',
}

export default function Home() {
    return <Docs />
}
