import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Upgrading to Expo SDK 58',
}

export default function Home() {
    return <Docs />
}
