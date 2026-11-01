import { readFileSync } from 'node:fs';
import path from 'node:path';
import { sidebarData, SidebarItem } from '../components/layoutData';
import { mdxSections } from './mdxSections';

export interface SearchItem {
  title: string;   // page title, as in the sidebar
  heading: string; // '' for the page itself
  href: string;    // with #anchor for a heading
  section: string; // sidebar path, e.g. "React Native Guide > Mobile Features"
  text: string;
}

// Pages indexed by title only: the changelog's version sections would bury the current docs.
const TITLE_ONLY = new Set(['/changelog']);

// Server-only (reads the MDX files): one record per page and per H2/H3, for every page in the sidebar.
export function buildSearchIndex(): SearchItem[] {
  const index: SearchItem[] = [];

  function traverse(items: SidebarItem[], parentPath: string[] = []) {
    items.forEach(item => {
      if (item.href) {
        const { sections } = mdxSections(readFileSync(path.join(process.cwd(), 'app', item.href, 'docs.mdx'), 'utf8'));
        for (const { heading, anchor, text } of TITLE_ONLY.has(item.href) ? [{ ...sections[0], text: '' }] : sections) {
          index.push({
            title: item.title,
            heading,
            href: anchor ? `${item.href}#${anchor}` : item.href,
            section: parentPath.join(' > '),
            text,
          });
        }
      }

      if (item.children) {
        traverse(item.children, [...parentPath, item.title]);
      }
    });
  }

  traverse(sidebarData);
  return index;
}
