type SidebarData = SidebarItem[];

export type SidebarItem = {
    name: string;
    title: string;
    href?: string;
    isCollapsible?: boolean;
    defaultOpen?: boolean;
    children?: SidebarItem[];
}

export const sidebarData: SidebarData = [
    {
        name: 'get-started',
        title: 'Get started',
        isCollapsible: true,
        defaultOpen: true,
        children: [
            { title: 'Introduction', name: 'introduction', href: '/get-started/introduction' },
            { title: 'Quick Start', name: 'quick-start', href: '/get-started/quick-start' },
        ]
    },
    {
        name: 'react-native-guide',
        title: 'React Native Guide',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'Introduction', name: 'rn-introduction', href: '/react-native-guide/introduction' },
            {
                name: 'integration',
                title: 'Integration',
                isCollapsible: true,
                defaultOpen: false,
                children: [
                    { title: 'Quickstart', name: 'quickstart', href: '/react-native-guide/integration/quickstart' },
                    { title: 'How it Works', name: 'how-it-works', href: '/react-native-guide/integration/how-it-works' },
                ]
            },
            {
                name: 'mobile-features',
                title: 'Mobile Features',
                isCollapsible: true,
                defaultOpen: false,
                children: [
                    { title: 'Overview', name: 'overview', href: '/react-native-guide/mobile-features/overview' },
                    {
                        name: 'dashboard',
                        title: 'Dashboard',
                        isCollapsible: true,
                        defaultOpen: false,
                        children: [
                            { title: 'Active Users', name: 'active-users', href: '/react-native-guide/mobile-features/dashboard/active-users' },
                            { title: 'Session Time', name: 'average-session', href: '/react-native-guide/mobile-features/dashboard/average-session' },
                            { title: 'Unique Downloads', name: 'unique-downloads', href: '/react-native-guide/mobile-features/dashboard/unique-downloads' },
                            { title: 'Total Sessions', name: 'total-sessions', href: '/react-native-guide/mobile-features/dashboard/total-sessions' },
                            { title: 'Users by Country', name: 'users-by-country', href: '/react-native-guide/mobile-features/dashboard/users-by-country' },
                            { title: 'Users Devices', name: 'users-devices', href: '/react-native-guide/mobile-features/dashboard/users-devices' },
                            { title: 'Version Adoption', name: 'version-adoption', href: '/react-native-guide/mobile-features/dashboard/version-adoption' },
                            { title: 'App Usage', name: 'app-intensity', href: '/react-native-guide/mobile-features/dashboard/app-intensity' },
                            { title: 'Customize your Dashboard', name: 'customize-dashboard', href: '/react-native-guide/mobile-features/dashboard/customize-dashboard' },
                            { title: 'Funnels', name: 'funnels', href: '/react-native-guide/mobile-features/dashboard/funnels' },
                        ]
                    },
                    { title: 'People', name: 'people', href: '/react-native-guide/mobile-features/people' },
                    { title: 'Session Replays & Heatmaps', name: 'session-replays-heatmaps', href: '/react-native-guide/mobile-features/session-replays-heatmaps' },
                    { title: 'Custom Events', name: 'custom-events', href: '/react-native-guide/mobile-features/custom-events' },
                ]
            },
            { title: 'Mobile Publishing', name: 'mobile-publishing', href: '/react-native-guide/mobile-publishing' },
            { title: 'Mobile Settings', name: 'mobile-settings', href: '/react-native-guide/mobile-settings' },
            { title: 'Best Practices', name: 'best-practices', href: '/react-native-guide/best-practices' },
            { title: 'FAQs', name: 'faqs', href: '/react-native-guide/faqs' },
        ]
    },
    {
        name: 'web-guide',
        title: 'Web Guide',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            {
                name: 'get-started',
                title: 'Get Started',
                isCollapsible: true,
                defaultOpen: false,
                children: [
                    { title: 'Introduction', name: 'web-introduction', href: '/web-guide/get-started/introduction' },
                    { title: 'Integration', name: 'web-integration', href: '/web-guide/get-started/integration' },
                ]
            },
            {
                name: 'web-features',
                title: 'Web Features',
                isCollapsible: true,
                defaultOpen: false,
                children: [
                    { title: 'Overview', name: 'web-overview', href: '/web-guide/web-features/overview' },
                    {
                        name: 'web-dashboard',
                        title: 'Dashboard',
                        isCollapsible: true,
                        defaultOpen: false,
                        children: [
                            { title: 'Introduction', name: 'web-dashboard-intro', href: '/web-guide/web-features/dashboard/introduction' },
                            { title: 'Active Users', name: 'web-active-users', href: '/web-guide/web-features/dashboard/active-users' },
                            { title: 'Session Time', name: 'web-session-time', href: '/web-guide/web-features/dashboard/session-time' },
                            { title: 'New Users', name: 'web-new-users', href: '/web-guide/web-features/dashboard/new-users' },
                            { title: 'Total Sessions', name: 'web-total-sessions', href: '/web-guide/web-features/dashboard/total-sessions' },
                            { title: 'Web Usage', name: 'web-usage', href: '/web-guide/web-features/dashboard/web-usage' },
                            { title: 'Device Distribution', name: 'web-device-distribution', href: '/web-guide/web-features/dashboard/device-distribution' },
                            { title: 'OS Distribution', name: 'web-os-distribution', href: '/web-guide/web-features/dashboard/os-distribution' },
                            { title: 'Browser Distribution', name: 'web-browser-distribution', href: '/web-guide/web-features/dashboard/browser-distribution' },
                            { title: 'Geographics Insights', name: 'web-geographic-insights', href: '/web-guide/web-features/dashboard/geographic-insights' },
                            { title: 'Referrers', name: 'web-referrers', href: '/web-guide/web-features/dashboard/referrers' },
                            { title: 'UTMs', name: 'web-utms', href: '/web-guide/web-features/dashboard/utms' },
                            { title: 'Routes', name: 'web-routes', href: '/web-guide/web-features/dashboard/routes' },
                            { title: 'Customize your Dashboard', name: 'web-customize-dashboard', href: '/web-guide/web-features/dashboard/customize-dashboard' },
                            { title: 'Funnels', name: 'web-funnels', href: '/web-guide/web-features/dashboard/funnels' },
                        ]
                    },
                    { title: 'People', name: 'web-people', href: '/web-guide/web-features/people' },
                    { title: 'Session Replays', name: 'web-session-replays', href: '/web-guide/web-features/session-replays' },
                    { title: 'Custom Events', name: 'web-custom-events', href: '/web-guide/web-features/custom-events' },
                ]
            },
        ]
    },
    {
        name: 'settings',
        title: 'Settings',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'Account Settings', name: 'account-settings', href: '/settings/account-settings' },
            { title: 'Billing', name: 'billing', href: '/settings/billing' },
            { title: 'Subscription', name: 'subscription', href: '/settings/subscription' },
            {
                name: 'app-settings',
                title: 'App Settings',
                isCollapsible: true,
                defaultOpen: false,
                children: [
                    { title: 'General Information', name: 'app-general-information', href: '/settings/app-settings/app-general-information' },
                    { title: 'Webhooks', name: 'webhooks', href: '/settings/app-settings/webhooks' },
                    { title: 'Export API', name: 'export-api', href: '/settings/app-settings/export-api' },
                    { title: 'Team', name: 'team', href: '/settings/app-settings/team' },
                    { title: 'Delete Application', name: 'delete-application', href: '/settings/app-settings/delete-application' },
                ]
            },
        ]
    },
    { title: 'Contact Vexo', name: 'contact-vexo', href: '/contact-vexo' },
    { title: 'Changelog', name: 'changelog', href: '/changelog' }
];
