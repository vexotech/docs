import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Migrate from LogRocket to Vexo',
    description: 'Replace the LogRocket React Native SDK with vexo-analytics: swap the package and Expo plugin, map each LogRocket call to Vexo, and plan the cutover.',
}

export default function Home() {
    return <Docs />
}
