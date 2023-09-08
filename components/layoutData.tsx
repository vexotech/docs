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

    { isHeader: true, title: 'Dashboard', name: 'dashboard' },
    { title: 'Active Users', name: 'active-users', href: '/active-users' },
    { title: 'Average Session', name: 'average-session', href: '/average-session' },
    { title: 'Unique Downloads', name: 'unique-downloads', href: '/unique-downloads' },
    { title: 'Drop Off Rate', name: 'drop-off-rate', href: '/drop-off-rate' },
    { title: 'Users By Country', name: 'users-by-country', href: '/users-by-country' },
    { title: 'Version Adoption', name: 'version-adoption', href: '/version-adoption' },
    { title: 'Popular Screens', name: 'popular-screens', href: '/popular-screens' },
    { title: 'App Intensity', name: 'app-intensity', href: '/app-intensity' },
    { title: 'Custom Events', name: 'custom-events', href: '/custom-events' },
    { title: 'New Downloads [deprecated]', name: 'new-downloads', href: '/new-downloads' },

    { isHeader: true, title: 'Devices', name: 'devices' },
    { title: 'Sessions', name: 'sessions', href: '/sessions' },
    { title: 'Real Time Inspector', name: 'real-time', href: '/real-time' },

    { isHeader: true, title: 'Heatmaps', name: 'heatmaps' },
    { title: 'Screen & Taps', name: 'active-users', href: '/active-users' },
    { title: 'Screenshots', name: 'screenshots', href: '/screenshots' },

    { isHeader: true, title: 'App Settings', name: 'app-settings' },
    { title: 'General Information', name: 'active-users', href: '/active-users' },
    { title: 'People', name: 'people', href: '/people' },
    { title: 'Delete Application', name: 'delete-application', href: '/delete-application' },

    { isHeader: true, title: 'Account Settings', name: 'account-settings' },
    { title: 'General Information', name: 'account-general-information', href: '/account-general-information' },
    { title: 'Delete Account', name: 'delete-account', href: '/delete-account' },
];
