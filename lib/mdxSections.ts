import GithubSlugger from 'github-slugger';

export interface MdxSection {
    heading: string; // '' for the text above the first H2/H3
    anchor: string;  // the id rehype-slug gives the heading, '' for the intro
    text: string;
}

// Inline markdown to plain text: links and images, emphasis, inline code, HTML tags.
const plain = (md: string): string => md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\*\*|`/g, '')
    .trim();

// Splits an MDX page into its H1 title and one section per H2/H3, for the search index.
// ponytail: line-based, not a real MDX parse; fine for these hand-written pages.
// Multi-line JSX or HTML blocks would need the remark AST instead.
export function mdxSections(source: string): { title: string; sections: MdxSection[] } {
    const slugger = new GithubSlugger();
    let title = '';
    let inFence = false;
    let current = { heading: '', anchor: '', lines: [] as string[] };
    const all = [current];

    for (const raw of source.split('\n')) {
        const line = raw.trim();
        if (line.startsWith('```')) { inFence = !inFence; continue; }
        if (inFence || /^(import|export)\s/.test(line) || line.startsWith('<')) continue;

        const heading = /^(#{1,6})\s+(.*)$/.exec(line);
        if (heading) {
            const text = plain(heading[2]);
            const anchor = slugger.slug(text); // every level, in order, like rehype-slug
            if (heading[1].length === 1) title = text;
            if (heading[1].length === 2 || heading[1].length === 3) {
                current = { heading: text, anchor, lines: [] };
                all.push(current);
            }
            continue;
        }

        if (/^\|[\s|:-]+\|$/.test(line)) continue; // table separator row
        current.lines.push(plain(line.replace(/^([-*]|\d+\.)\s+/, '').replace(/\|/g, ' ')));
    }

    return {
        title,
        sections: all.map(({ heading, anchor, lines }) => ({
            heading,
            anchor,
            text: lines.join(' ').replace(/\s+/g, ' ').trim(),
        })),
    };
}
