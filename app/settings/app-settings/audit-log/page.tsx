import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Audit log',
    description: "See who changed an app's team, transferred it, created an API key, erased a person's data, or assigned an error, and filter the log by person, action, or date.",
}

export default function Home() {
    return <Docs />
}
