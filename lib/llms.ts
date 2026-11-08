import { docPages, readPageFile } from './docPages';
import { mdxToMarkdown } from './mdxMarkdown';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './site';

// Server-only: llms.txt and llms-full.txt (https://llmstxt.org), built from the sidebar, each page's
// metadata, and its docs.mdx, so they always match the pages the site serves.

// Sidebar links outside any group (Contact Vexo, Changelog) go under "Optional", the llms.txt
// section for links an assistant can skip when it needs a shorter context.
const UNGROUPED = 'Optional';

const HEADER = [`# ${SITE_NAME}`, `> ${SITE_DESCRIPTION}`];

function pages() {
  return docPages().map(({ href, section }) => {
    const source = readPageFile(href, 'page.tsx');
    return {
      href,
      url: `${SITE_URL}${href}`,
      section: section[0] ?? UNGROUPED,
      title: metadataField(source, 'title', href),
      description: metadataField(source, 'description', href),
    };
  });
}

// A field of the page's `export const metadata`, which every page writes as a one-line string literal.
function metadataField(source: string, field: string, href: string): string {
  const match = new RegExp(`^\\s*${field}:\\s*(['"])(.*)\\1,?\\s*$`, 'm').exec(source);
  if (!match) throw new Error(`app${href}/page.tsx: write metadata.${field} as a one-line string literal`);
  return match[2].replace(/\\(.)/g, '$1');
}

export function llmsTxt(): string {
  const sections = new Map<string, string[]>();
  pages().forEach(({ section, title, url, description }) => {
    sections.set(section, (sections.get(section) ?? []).concat(`- [${title}](${url}): ${description}`));
  });
  return [
    ...HEADER,
    `Each link is one docs page, with a summary of what it covers. To read every page in one file, use [llms-full.txt](${SITE_URL}/llms-full.txt).`,
    ...Array.from(sections, ([name, links]) => `## ${name}\n\n${links.join('\n')}`),
  ].join('\n\n') + '\n';
}

export function llmsFullTxt(): string {
  return [
    ...HEADER,
    ...pages().map(({ href, url, title }) => {
      // The metadata title, unique across the docs, stands in for the page's own H1.
      const body = mdxToMarkdown(readPageFile(href, 'docs.mdx'), url).replace(/^# .*\n+/, '');
      return `# ${title}\n\nSource: ${url}\n\n${body.trimEnd()}`;
    }),
  ].join('\n\n') + '\n';
}
