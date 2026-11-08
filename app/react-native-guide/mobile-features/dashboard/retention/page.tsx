import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Retention (React Native)',
    description: 'Learn how Vexo measures Day 1, 7, 14, and 30 retention for React Native apps with the classic N-day model, cohort size, eligible users, and filters.',
}

export default function Home() {
    return <Docs />
}
