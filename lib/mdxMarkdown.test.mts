// Run with `yarn test` (node --test; Node 24 strips the types).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mdxToMarkdown } from './mdxMarkdown.ts';

const URL = 'https://docs.vexo.co/settings/usage-limits';

test('keeps Markdown and code blocks as written, and drops imports, exports, comments, and images', () => {
  const page = `import { DocLayout, DocImage } from '../../components';

# Usage and limits

{/* Restates FREE_EVENTS in vexo-web. */}
Put \`vexo()\` in your \`<head>\`, then see the table.


<DocImage src="/docs/usage.png" size="large" />

| Limit | Value |
| --- | --- |
| Seats | 2 |

\`\`\`tsx
import { vexo } from 'vexo-analytics';

export default () => <Button title="Go" />
\`\`\`

export default ({ children }) => <DocLayout current="usage-limits">{children}</DocLayout>
`;
  assert.equal(mdxToMarkdown(page, URL), `# Usage and limits

Put \`vexo()\` in your \`<head>\`, then see the table.

| Limit | Value |
| --- | --- |
| Seats | 2 |

\`\`\`tsx
import { vexo } from 'vexo-analytics';

export default () => <Button title="Go" />
\`\`\`
`);
});

test('makes links absolute and turns inline HTML into Markdown', () => {
  const md = mdxToMarkdown(
    '<u>**Start here.**</u> Click <b>Add</b>, then see [caps](#per-app-usage-caps), [Billing](/settings/billing), and [npm](https://www.npmjs.com).',
    URL,
  );
  assert.equal(md, '**Start here.** Click **Add**, then see [caps](https://docs.vexo.co/settings/usage-limits#per-app-usage-caps), '
    + '[Billing](https://docs.vexo.co/settings/billing), and [npm](https://www.npmjs.com).\n');
});

test('turns a Warning into a blockquote at its list indentation', () => {
  const md = mdxToMarkdown(
    '1. Install.\n\n   <Warning message={(<div>Call <code>vexo()</code> first. See <Link href="/get-started/quick-start">Quickstart</Link>.</div>)} />',
    URL,
  );
  assert.equal(md, '1. Install.\n\n   > Call `vexo()` first. See [Quickstart](https://docs.vexo.co/get-started/quick-start).\n');
});

test('turns an HTML table into a Markdown table', () => {
  const md = mdxToMarkdown(`<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td>Unique | identifier</td>
    </tr>
  </tbody>
</table>`, URL);
  assert.equal(md, '| Field | Description |\n| --- | --- |\n| `id` | Unique \\| identifier |\n');
});

test('fails on JSX it has no Markdown for, so a new component cannot leak into llms-full.txt', () => {
  assert.throws(() => mdxToMarkdown('<Deprecation message="Old" />', URL), /no Markdown for <Deprecation/);
});
