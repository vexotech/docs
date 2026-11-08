import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Quickstart',
    description: "Install vexo-analytics in a React Native or Expo app, verify your first event, and fix missing data, or add the Vexo script to your website's head tag.",
}

export default function Home() {
    return <Docs />
}