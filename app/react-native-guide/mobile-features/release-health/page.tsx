import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Release health (React Native)',
    description: "See how each release of your React Native app is doing: adoption, crash-free sessions and users, and new or regressed errors, by app version or Expo update, compared with the release before it.",
}

export default function Home() {
    return <Docs />
}
