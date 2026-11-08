// MDX to Markdown, for llms-full.txt. Keeps the Markdown and code blocks as written, drops what only
// the site renders (imports, exports, comments, and images), and turns the JSX these pages use into
// Markdown. Links become absolute, since the text is read away from its page.
// ponytail: line-based, like mdxSections; each JSX element must sit on one line, except HTML tables.
// JSX it can't convert throws, so a new component fails the build instead of leaking into the file.

const SITE_ONLY = /^(import|export)\s|^\{\/\*.*\*\/\}$|^<DocImage\s/;
const WARNING = /^<Warning message=\{\((.*)\)\}\s*\/>$/;

export function mdxToMarkdown(source: string, pageUrl: string): string {
  const out: string[] = [];
  let inFence = false;
  let table: string[] | null = null;

  for (const raw of source.split(/\r?\n/)) {
    const line = raw.trim();
    const fence = line.startsWith('```');
    if (fence) inFence = !inFence;
    if (fence || inFence) { out.push(raw); continue; }

    if (table) {
      table.push(line);
      if (line === '</table>') { out.push(htmlTable(table.join(''), pageUrl)); table = null; }
      continue;
    }
    if (line === '<table>') { table = [line]; continue; }
    if (SITE_ONLY.test(line)) continue;
    if (!line) { if (out.length && out[out.length - 1] !== '') out.push(''); continue; } // one blank line between blocks

    const warning = WARNING.exec(line);
    const indent = raw.slice(0, raw.length - raw.trimStart().length);
    out.push(warning ? `${indent}> ${inline(warning[1], pageUrl)}` : inline(raw, pageUrl));
  }

  return out.join('\n').trim() + '\n';
}

// Inline JSX and HTML as Markdown, with absolute links. Code spans stay as written.
function inline(text: string, pageUrl: string): string {
  return text
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .split(/(`[^`]*`)/)
    .map((part, i) => (i % 2 ? part : prose(part, pageUrl)))
    .join('');
}

function prose(text: string, pageUrl: string): string {
  const md = text
    .replace(/<Link href="([^"]*)">(.*?)<\/Link>/g, '[$2]($1)')
    .replace(/<b>(.*?)<\/b>/g, '**$1**')
    .replace(/<\/?(div|u)>/g, '')
    .replace(/\]\(([/#][^)\s]*)/g, (_, href: string) => `](${new URL(href, pageUrl).href}`);
  const jsx = /<\/?[A-Za-z][^>]*>|\{/.exec(md);
  if (jsx) throw new Error(`${pageUrl}: no Markdown for ${jsx[0]} in "${text.trim()}"; add it to lib/mdxMarkdown.ts`);
  return md;
}

// An HTML table, with one <th> or <td> cell per line, as a Markdown table whose first row is the header.
function htmlTable(html: string, pageUrl: string): string {
  const rows = Array.from(html.matchAll(/<tr>(.*?)<\/tr>/g), ([, row]) =>
    Array.from(row.matchAll(/<t[hd]>(.*?)<\/t[hd]>/g), ([, cell]) => inline(cell, pageUrl).replace(/\|/g, '\\|')));
  const tableRow = (cells: string[]) => `| ${cells.join(' | ')} |`;
  return [tableRow(rows[0]), tableRow(rows[0].map(() => '---')), ...rows.slice(1).map(tableRow)].join('\n');
}
