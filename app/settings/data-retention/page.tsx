import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Data Retention',
}

export default function Home() {
    return <Docs />
}
