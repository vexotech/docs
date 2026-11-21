import fs from 'node:fs';
import path from 'node:path';
import { sidebarData, SidebarItem } from '../components/layoutData';
import { APP, appRoutes } from './appRoutes';

// Server-only: these read app/ at build time.

export interface DocPage {
  href: string;      // the page's route, e.g. /web-guide/integration
  title: string;     // as in the sidebar
  section: string[]; // the sidebar groups above the page, outermost first
}

// Every docs page, in sidebar order. A page with a docs.mdx that isn't in the sidebar fails the
// build, since the search index and llms.txt would leave it out.
export function docPages(): DocPage[] {
  const pages = sidebarPages(sidebarData, []);
  const listed = new Set(pages.map((page) => page.href));
  const unlisted = appRoutes().filter((route) => !listed.has(route) && fs.existsSync(path.join(APP, route, 'docs.mdx')));
  if (unlisted.length) throw new Error(`Add ${unlisted.join(', ')} to sidebarData in components/layoutData.tsx`);
  return pages;
}

function sidebarPages(items: SidebarItem[], section: string[]): DocPage[] {
  return items.flatMap((item) => [
    ...(item.href ? [{ href: item.href, title: item.title, section }] : []),
    ...(item.children ? sidebarPages(item.children, [...section, item.title]) : []),
  ]);
}

// A file in a page's directory, such as its docs.mdx.
export function readPageFile(href: string, file: string): string {
  return fs.readFileSync(path.join(APP, href, file), 'utf8');
}
