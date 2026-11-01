'use client';

import { useState, useEffect, useMemo, Fragment } from 'react';
import { Dialog, Transition, DialogPanel, TransitionChild, ComboboxOption, ComboboxOptions, Combobox, ComboboxInput } from '@headlessui/react';
import { SearchIcon, DocumentTextIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import type { SearchItem } from '../lib/searchIndex';
import { useSearch } from '../lib/SearchContext';

const searchOptions = {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'heading', weight: 2 },
    { name: 'text', weight: 1 },
  ],
  threshold: 0.25,
  ignoreLocation: true, // match anywhere in the body text, not only near the start
  ignoreFieldNorm: true, // a match in a long section counts as much as in a short one; ties keep sidebar order
};

const QUICKSTART = '/get-started/quick-start';
const INTEGRATION = '/react-native-guide/integration';
const SUBSCRIPTION = '/settings/subscription';

// Words people search for that the pages don't use as titles. These results come first.
const synonyms: Record<string, string[]> = {
  install: [QUICKSTART, INTEGRATION],
  installation: [QUICKSTART, INTEGRATION],
  setup: [QUICKSTART, INTEGRATION],
  'set up': [QUICKSTART, INTEGRATION],
  expo: [QUICKSTART, INTEGRATION],
  identify: [`${INTEGRATION}#device-identity`],
  identifydevice: [`${INTEGRATION}#device-identity`],
  'identify user': [`${INTEGRATION}#device-identity`],
  pricing: [SUBSCRIPTION],
  price: [SUBSCRIPTION],
  cost: [SUBSCRIPTION],
  plans: [SUBSCRIPTION],
  billing: ['/settings/billing', SUBSCRIPTION],
  seats: [`${SUBSCRIPTION}#seats`],
};

const MAX_RESULTS = 8;

export function CommandPalette() {
  const { isOpen, closeSearch, openSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [searchIndex, setSearchIndex] = useState<SearchItem[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const router = useRouter();

  // Fetched on first open; after a failure, "Try again" clears loadFailed and this runs again.
  useEffect(() => {
    if (!isOpen || searchIndex || loadFailed) return;
    fetch('/search-index.json')
      .then(response => {
        if (!response.ok) throw new Error(`search index: HTTP ${response.status}`);
        return response.json();
      })
      .then(setSearchIndex)
      .catch(() => setLoadFailed(true));
  }, [isOpen, searchIndex, loadFailed]);

  const fuse = useMemo(() => new Fuse(searchIndex ?? [], searchOptions), [searchIndex]);

  const searchResults = useMemo(() => {
    const pages = searchIndex ?? [];
    const term = query.trim().toLowerCase();
    if (!term) {
      return pages.filter(item => !item.heading).slice(0, MAX_RESULTS);
    }
    const pinned = (synonyms[term] ?? [])
      .map(href => pages.find(item => item.href === href))
      .filter((item): item is SearchItem => !!item);
    const matches = fuse.search(term).map(result => result.item).filter(item => !pinned.includes(item));
    return [...pinned, ...matches].slice(0, MAX_RESULTS);
  }, [query, fuse, searchIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openSearch]);

  const handleSelect = (item: SearchItem | null) => {
    if (!item) return;
    closeSearch();
    setQuery('');
    router.push(item.href);
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeSearch}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={handleSelect}>
                <div className="relative">
                  <SearchIcon className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <ComboboxInput
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search documentation..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>

                {searchResults.length > 0 && (
                  <ComboboxOptions
                    static
                    className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
                  >
                    {searchResults.map((item) => (
                      <ComboboxOption
                        key={item.href}
                        value={item}
                        className={({ active }) =>
                          `cursor-pointer select-none px-4 py-3 ${
                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                          }`
                        }
                      >
                        {({ active }) => (
                          <div className="flex items-center">
                            <DocumentTextIcon
                              className={`h-5 w-5 flex-shrink-0 ${
                                active ? 'text-white' : 'text-gray-400'
                              }`}
                            />
                            <div className="ml-3 flex-auto">
                              <div className={`text-sm font-medium ${active ? 'text-white' : 'text-gray-900'}`}>
                                {item.heading || item.title}
                              </div>
                              {(item.heading || item.section) && (
                                <div className={`text-sm ${active ? 'text-indigo-100' : 'text-gray-600'}`}>
                                  {item.heading ? [item.section, item.title].filter(Boolean).join(' > ') : item.section}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                )}

                {!searchIndex && !loadFailed && (
                  <p className="px-4 py-6 text-sm text-gray-600">Loading search…</p>
                )}

                {loadFailed && (
                  <div role="alert" className="px-4 py-14 text-center sm:px-14">
                    <p className="text-sm text-gray-900">Search couldn&rsquo;t load. Check your connection and try again.</p>
                    <button
                      type="button"
                      onClick={() => setLoadFailed(false)}
                      className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Try again
                    </button>
                  </div>
                )}

                {query && searchIndex && searchResults.length === 0 && (
                  <div className="px-4 py-14 text-center sm:px-14">
                    <DocumentTextIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 text-sm text-gray-900">
                      No results for &ldquo;{query}&rdquo;. Try a shorter term, or a function name such as customEvent.
                    </p>
                  </div>
                )}
              </Combobox>

              <div className="hidden [@media(hover:hover)_and_(pointer:fine)]:flex flex-wrap items-center gap-4 bg-gray-50 px-4 py-2.5 text-xs text-gray-700">
                <span className="flex items-center gap-1">
                  <kbd className="flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold">
                    ↑
                  </kbd>
                  <kbd className="flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold">
                    ↓
                  </kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="flex h-6 w-8 items-center justify-center rounded border bg-white font-semibold text-xs">
                    ↵
                  </kbd>
                  to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="flex h-5 w-8 items-center justify-center rounded border bg-white font-semibold text-xs">
                    esc
                  </kbd>
                  to close
                </span>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}