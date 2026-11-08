import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Users by country (React Native)',
    description: "See where your React Native app users are. Vexo resolves each device's country from its IP address with MaxMind GeoLite and maps unique devices.",
}

export default function Home() {
    return <Docs />
}
