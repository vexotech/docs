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
      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
    >
      <SearchIcon className="h-4 w-4 text-gray-400" />
      <span className="flex-1 text-left text-gray-600">Search docs...</span>
      <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded">
        {isMac ? '⌘' : 'Ctrl'}
        <span className="text-xs">K</span>
      </kbd>
    </button>
  );
}