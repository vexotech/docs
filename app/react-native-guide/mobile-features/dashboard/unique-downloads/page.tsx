import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Unique downloads (React Native)',
    description: 'Learn how Vexo counts unique downloads of your React Native app: once per device, recorded on the first launch, even when a user installs it again.',
}

export default function Home() {
    return <Docs />
}
