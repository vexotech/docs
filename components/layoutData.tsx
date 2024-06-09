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

    { isHeader: true, title: 'Devices', name: 'devices' },
    { title: 'Sessions', name: 'sessions', href: '/sessions' },

    { isHeader: true, title: 'Heatmaps', name: 'heatmaps' },
    { title: 'Screen & Taps', name: 'screens', href: '/screens' },
    { title: 'Screenshots', name: 'screenshots', href: '/screenshots' },

    { isHeader: true, title: 'Most Popular Paths', name: 'most-popular-paths' },
    { title: 'Overview', name: 'overview', href: '/most-popular-paths' },

    { isHeader: true, title: 'App Settings', name: 'app-settings' },
    { title: 'General Information', name: 'app-general-information', href: '/app-general-information' },
    { title: 'People', name: 'people', href: '/people' },
    { title: 'Delete Application', name: 'delete-application', href: '/delete-application' },

    { isHeader: true, title: 'Account Settings', name: 'account-settings' },
    { title: 'General Information', name: 'account-general-information', href: '/account-general-information' },
    { title: 'Delete Account', name: 'delete-account', href: '/delete-account' },
];
