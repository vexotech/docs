import { sidebarData, SidebarItem } from '../components/layoutData';

export interface SearchItem {
  title: string;
  href: string;
  section: string;
  keywords: string;
  name: string;
}

export function buildSearchIndex(): SearchItem[] {
  const index: SearchItem[] = [];

  function traverse(items: SidebarItem[], parentPath: string[] = []) {
    items.forEach(item => {
      if (item.href) {
        index.push({
          title: item.title,
          href: item.href,
          section: parentPath.join(' > '),
          keywords: [item.name, item.title, ...parentPath].join(' ').toLowerCase(),
          name: item.name
        });
      }

      if (item.children) {
        traverse(item.children, [...parentPath, item.title]);
      }
    });
  }

  traverse(sidebarData);
  return index;
}