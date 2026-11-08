import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'App usage by hour (React Native)',
    description: "See when your React Native app is busiest. Vexo groups events by hour and weekday in your local time zone and shows each hour's share of total activity.",
}

export default function Home() {
    return <Docs />
}
