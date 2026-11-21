import fs from 'node:fs';
import path from 'node:path';

// Server-only: these read app/ at build time. This file imports nothing from the app, so plain Node
// scripts can import it too.

export const APP = path.join(process.cwd(), 'app');
export const PAGE_FILES = ['page.tsx', 'page.ts', 'page.jsx', 'page.js'];

// Every route that has a page file, walked from app/ so it always matches the deployed routes.
// ponytail: skips route groups and dynamic segments — this repo has neither;
// revisit if app/(group)/ or app/[param]/ dirs ever appear.
// Every path stays under APP, so the build traces app/ only, not the whole project.
export function appRoutes(route = ''): string[] {
  const entries = fs.readdirSync(path.join(APP, route), { withFileTypes: true });
  const routes: string[] = [];
  if (entries.some((e) => e.isFile() && PAGE_FILES.includes(e.name))) {
    routes.push(route || '/');
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (/^[_([]/.test(e.name)) continue;
    routes.push(...appRoutes(`${route}/${e.name}`));
  }
  return routes;
}
