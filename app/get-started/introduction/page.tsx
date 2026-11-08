import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Introduction to Vexo',
    description: 'Meet Vexo, product analytics built for React Native apps and extended to the web, and find your way around the docs, from the Quickstart to the guides.',
}

export default function Home() {
    return <Docs />
}