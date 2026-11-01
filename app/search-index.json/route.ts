import { buildSearchIndex } from '../../lib/searchIndex';

// Built once at build time from the MDX sources; the search palette fetches it on first open.
export const dynamic = 'force-static';

export function GET() {
  return Response.json(buildSearchIndex());
}
