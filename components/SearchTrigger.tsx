'use client';

import { SearchIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';
import { useSearch } from '../contexts/SearchContext';

export function SearchTrigger() {
  const { openSearch } = useSearch();
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  return (
    <button
      onClick={openSearch}
      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <SearchIcon className="h-4 w-4" />
      <span className="flex-1 text-left">Search docs...</span>
      <kbd className="hidden sm:inline-flex items-center gap-1 text-xs">
        {isMac ? '⌘' : 'Ctrl'}K
      </kbd>
    </button>
  );
}