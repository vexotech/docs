type SidebarData = Data[];

type Data = {
    isHeader?: boolean,

    name: string,
    href?: string
    title: string,
}

export const sidebarData: SidebarData = [
    { isHeader: true, title: 'Getting Started', name: 'getting-started' },
    { title: 'Quickstart', name: 'integration', href: '/' },
    { title: 'Features', name: 'features', href: '/features' },
    { title: 'Publishing', name: 'publishing', href: '/publishing' },
    { title: 'Web Analytics', name: 'web-analytics', href: '/web-analytics' },

    { isHeader: true, title: 'Dashboard', name: 'dashboard' },
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

    { isHeader: true, title: 'Devices', name: 'devices' },
    { title: 'Sessions', name: 'sessions', href: '/sessions' },

    { isHeader: true, title: 'Session Replays', name: 'replays' },
    { title: 'Session Replays', name: 'session-replays', href: '/session-replays' },

    { isHeader: true, title: 'Heatmaps', name: 'heatmaps' },
    { title: 'Screen & Taps', name: 'screens', href: '/screens' },
    { title: 'Screenshots', name: 'screenshots', href: '/screenshots' },

    { isHeader: true, title: 'App Settings', name: 'app-settings' },
    { title: 'General Information', name: 'app-general-information', href: '/app-general-information' },
    { title: 'Webhooks', name: 'webhooks', href: '/webhooks' },
    { title: 'Tracking Information', name: 'app-tracking-information', href: '/app-tracking-information' },
    { title: 'People', name: 'people', href: '/people' },
    { title: 'Delete Application', name: 'delete-application', href: '/delete-application' },

    { isHeader: true, title: 'Account Settings', name: 'account-settings' },
    { title: 'General Information', name: 'account-general-information', href: '/account-general-information' },
    { title: 'Delete Account', name: 'delete-account', href: '/delete-account' },

    { isHeader: true, title: 'Releases', name: 'releases' },
    { title: 'Changelog', name: 'changelog', href: '/changelog' },
];
