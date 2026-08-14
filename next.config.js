const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

module.exports = withMDX({
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
            {
                source: '/features',
                destination: '/react-native-guide/mobile-features/overview',
                permanent: true,
            },
            {
                source: '/docs',
                destination: '/get-started/introduction',
                permanent: true,
            },
            {
                source: '/guide',
                destination: '/get-started/introduction',
                permanent: true,
            },
            {
                source: '/getting-started',
                destination: '/get-started/introduction',
                permanent: true,
            },
            {
                source: '/introduction',
                destination: '/get-started/introduction',
                permanent: true,
            },
            {
                source: '/quickstart',
                destination: '/get-started/quick-start',
                permanent: true,
            },
            {
                source: '/mobile',
                destination: '/react-native-guide/introduction',
                permanent: true,
            },
            {
                source: '/web',
                destination: '/web-guide/introduction',
                permanent: true,
            },
            {
                source: '/sdk',
                destination: '/get-started/quick-start',
                permanent: true,
            },
            {
                source: '/integration',
                destination: '/react-native-guide/integration',
                permanent: true,
            },
            {
                source: '/install',
                destination: '/get-started/quick-start',
                permanent: true,
            },
        ];
    },
})
