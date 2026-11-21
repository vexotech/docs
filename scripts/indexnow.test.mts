// Run with `yarn test` (node --test; Node 24 strips the types).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { urlsForChangedFiles, KEY } from './indexnow.mjs';

// The routes in this fake app/ tree.
const ROUTES = ['/', '/web-guide/integration', '/settings/billing'];
const urls = (files: string[]) => urlsForChangedFiles(files, ROUTES);

test('maps a page and the files beside it to the page URL, once', () => {
  assert.deepEqual(urls(['app/web-guide/integration/docs.mdx', 'app/web-guide/integration/page.tsx']),
    ['https://docs.vexo.co/web-guide/integration']);
});

test('maps a shared file in app/ to the nearest route above it', () => {
  assert.deepEqual(urls(['app/settings/billing/images/plan.png']), ['https://docs.vexo.co/settings/billing']);
  assert.deepEqual(urls(['app/layout.tsx', 'app/llms.txt/route.ts']), ['https://docs.vexo.co/']);
});

test('keeps the URL of a deleted page so engines see the 404 or redirect', () => {
  assert.deepEqual(urls(['app/settings/old-page/page.tsx']), ['https://docs.vexo.co/settings/old-page']);
});

test('skips files outside app/', () => {
  assert.deepEqual(urls(['components/layoutData.tsx', 'lib/site.ts', 'public/docs/usage.png', 'README.md']), []);
});

test('reads the routes from app/ by default', () => {
  assert.deepEqual(urlsForChangedFiles(['app/get-started/introduction/docs.mdx']),
    ['https://docs.vexo.co/get-started/introduction']);
});

test('serves the key file IndexNow verifies', () => {
  assert.equal(readFileSync(new URL(`../public/${KEY}.txt`, import.meta.url), 'utf8'), KEY);
});
