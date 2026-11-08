import Docs from './docs.mdx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web usage by hour',
    description: 'See when your website is busiest. Vexo maps page views, clicks, and scrolls to hours and weekdays in your local time zone as a heatmap of peak activity.',
}

export default function Home() {
    return <Docs />
}
