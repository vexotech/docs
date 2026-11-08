import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Session time (React Native)',
    description: 'Learn how Vexo defines a session in your React Native app and calculates average session time, and how to read short or long sessions in a user journey.',
}

export default function Home() {
    return <Docs />
}
