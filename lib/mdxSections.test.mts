// Run with `yarn test` (node --test; Node 24 strips the types).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mdxSections } from './mdxSections.ts';

const page = `import { DocLayout } from '../../components/DocLayout';

# Integration

Install the **SDK** with [npm](https://npmjs.com) and call \`vexo()\`.

## Development & staging

Wrap it in \`if (!__DEV__)\`.

\`\`\`bash
# not a heading
npm install vexo-analytics
\`\`\`

<Warning message="skipped" />

### Device Identity

- Call \`identifyDevice\` after login.

| Seats | Price |
| --- | --- |
| 3 | $4.90 |

### Device Identity

export default ({ children }) => <DocLayout current="x">{children}</DocLayout>
`;

test('splits a page into an intro and one section per H2/H3, with rehype-slug anchors', () => {
  const { title, sections } = mdxSections(page);
  assert.equal(title, 'Integration');
  assert.deepEqual(sections.map((s) => [s.heading, s.anchor]), [
    ['', ''],
    ['Development & staging', 'development--staging'],
    ['Device Identity', 'device-identity'],
    ['Device Identity', 'device-identity-1'],
  ]);
});

test('keeps prose as plain text and drops code, JSX, imports, and exports', () => {
  const [intro, dev, identity] = mdxSections(page).sections;
  assert.equal(intro.text, 'Install the SDK with npm and call vexo().');
  assert.equal(dev.text, 'Wrap it in if (!__DEV__).');
  assert.equal(identity.text, 'Call identifyDevice after login. Seats Price 3 $4.90');
});
