import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Locations (React Native)',
    description: 'Compare users, new users, sessions, and session length by country on a map or globe, and compare one country with another or with the rest of the world.',
}

export default function Home() {
    return <Docs />
}
