import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Upgrading to Expo SDK 58',
    description: 'Upgrade to vexo-analytics 1.14.0 or later for Expo SDK 58, choose zero-config or the explicit VexoProvider setup, and rebuild to get native tap capture.',
}

export default function Home() {
    return <Docs />
}
