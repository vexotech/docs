import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Migrate from UXCam to Vexo',
    description: 'Replace the UXCam React Native SDK with vexo-analytics: swap the package, map each UXCam call to Vexo, and learn what changes for masking and crashes.',
}

export default function Home() {
    return <Docs />
}
