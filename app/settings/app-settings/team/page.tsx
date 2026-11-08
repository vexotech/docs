import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'App team and access levels',
    description: "See who can access your app's data in Vexo and change each team member's access level, and learn what the Owner and Guest access levels allow.",
}

export default function Home() {
    return <Docs />
}
