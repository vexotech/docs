import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Feature flags',
    description: 'Turn features on for some of your users, roll them out gradually, split users between variants, and change remote config without shipping a new build.',
}

export default function Home() {
    return <Docs />
}
