import { docPages, readPageFile } from './docPages';
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
  return docPages().flatMap(({ href, title, section }) => {
    const { sections } = mdxSections(readPageFile(href, 'docs.mdx'));
    return (TITLE_ONLY.has(href) ? [{ ...sections[0], text: '' }] : sections).map(({ heading, anchor, text }) => ({
      title,
      heading,
      href: anchor ? `${href}#${anchor}` : href,
      section: section.join(' > '),
      text,
    }));
  });
}
