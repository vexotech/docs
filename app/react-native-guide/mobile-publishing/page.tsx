import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Publishing your app (React Native)',
    description: "Learn what to answer in Apple's App Privacy form and Google Play's data safety section when you publish a React Native app that uses Vexo Analytics.",
}

export default function Home() {
    return <Docs />
}
