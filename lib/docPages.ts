import fs from 'node:fs';
import path from 'node:path';
import { sidebarData, SidebarItem } from '../components/layoutData';

// Server-only: these read app/ at build time.

const APP = path.join(process.cwd(), 'app');
const PAGE_FILES = ['page.tsx', 'page.ts', 'page.jsx', 'page.js'];

export interface DocPage {
  href: string;      // the page's route, e.g. /web-guide/integration
  title: string;     // as in the sidebar
  section: string[]; // the sidebar groups above the page, outermost first
}

// Every docs page, in sidebar order.
export function docPages(items: SidebarItem[] = sidebarData, section: string[] = []): DocPage[] {
  return items.flatMap((item) => [
    ...(item.href ? [{ href: item.href, title: item.title, section }] : []),
    ...(item.children ? docPages(item.children, [...section, item.title]) : []),
  ]);
}

// A file in a page's directory, such as its docs.mdx.
export function readPageFile(href: string, file: string): string {
  return fs.readFileSync(path.join(APP, href, file), 'utf8');
}

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
