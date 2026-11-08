import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'User devices by OS (React Native)',
    description: 'See how your React Native app users split across operating systems such as iOS and Android, counted once per device whatever the device model.',
}

export default function Home() {
    return <Docs />
}
