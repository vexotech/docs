import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'OS distribution (Web)',
    description: 'See which operating systems your website visitors use, such as Windows, macOS, Android, iOS, and Linux, counted once per user, so you can focus testing.',
}

export default function Home() {
    return <Docs />
}
