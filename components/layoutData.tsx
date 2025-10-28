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
        name: 'getting-started',
        title: 'Getting Started',
        isCollapsible: true,
        defaultOpen: true,
        children: [
            { title: 'Mobile Analytics', name: 'integration', href: '/' },
            { title: 'Mobile Features', name: 'features', href: '/features' },
            { title: 'Mobile Publishing', name: 'publishing', href: '/publishing' },
            { title: 'Web Analytics', name: 'web-analytics', href: '/web-analytics' },
        ]
    },
    {
        name: 'dashboard',
        title: 'Dashboard',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'Active Users', name: 'active-users', href: '/active-users' },
            { title: 'Average Session', name: 'average-session', href: '/average-session' },
            { title: 'Unique Downloads', name: 'unique-downloads', href: '/unique-downloads' },
            { title: 'Total Sessions', name: 'total-sessions', href: '/total-sessions' },
            { title: 'Users By Country', name: 'users-by-country', href: '/users-by-country' },
            { title: 'Users Devices', name: 'users-devices', href: '/users-devices' },
            { title: 'Version Adoption', name: 'version-adoption', href: '/version-adoption' },
            { title: 'App Intensity', name: 'app-intensity', href: '/app-intensity' },
            { title: 'Custom Events', name: 'custom-events', href: '/custom-events' },
            { title: 'Customize your dashboard', name: 'custom-dashboards', href: '/custom-dashboards' },
            { title: 'Funnels', name: 'funnels', href: '/funnels' },
        ]
    },
    {
        name: 'devices',
        title: 'Devices',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'Sessions', name: 'sessions', href: '/sessions' },
        ]
    },
    {
        name: 'replays',
        title: 'Session Replays',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'Session Replays', name: 'session-replays', href: '/session-replays' },
        ]
    },
    {
        name: 'heatmaps',
        title: 'Heatmaps',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'Screen & Taps', name: 'screens', href: '/screens' },
            { title: 'Screenshots', name: 'screenshots', href: '/screenshots' },
        ]
    },
    {
        name: 'app-settings',
        title: 'App Settings',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'General Information', name: 'app-general-information', href: '/app-general-information' },
            { title: 'Webhooks', name: 'webhooks', href: '/webhooks' },
            { title: 'Export API', name: 'export-api', href: '/export-api' },
            { title: 'Tracking Information', name: 'app-tracking-information', href: '/app-tracking-information' },
            { title: 'People', name: 'people', href: '/people' },
            { title: 'Delete Application', name: 'delete-application', href: '/delete-application' },
        ]
    },
    {
        name: 'account-settings',
        title: 'Account Settings',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'General Information', name: 'account-general-information', href: '/account-general-information' },
            { title: 'Delete Account', name: 'delete-account', href: '/delete-account' },
        ]
    },
    {
        name: 'releases',
        title: 'Releases',
        isCollapsible: true,
        defaultOpen: false,
        children: [
            { title: 'Changelog', name: 'changelog', href: '/changelog' },
        ]
    },
];
