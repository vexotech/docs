import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Team and roles',
    description: "Give each member of your Vexo team a role per app, learn what the Admin, Analyst, Replay viewer, and Billing roles and each permission allow, and create custom roles.",
}

export default function Home() {
    return <Docs />
}
