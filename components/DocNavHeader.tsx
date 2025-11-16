'use client';

import Link from "next/link";
import React from "react";
import { SearchTrigger } from "./SearchTrigger";
import { SearchIcon } from '@heroicons/react/outline';
import { useSearch } from '../contexts/SearchContext';

export const DocNavHeader = (): React.JSX.Element => {
    const { openSearch } = useSearch();

    return <div className="w-full h-16 fixed top-0 bg-white bg-opacity-95 pl-0 sm:pl-56 md:pl-72">
        <div className="w-full h-full px-12 flex items-center justify-between">
            <div className="text-sm text-slate-600 cursor-pointer flex items-center sm:hidden">
                <div className="text-gray-600 font-bold text-xs">
                    VEXO /
                    <span className="block font-normal text-xs tracking-wider text-blue-400">Documentation</span>
                </div>
            </div>
            <div className="flex items-center gap-3 justify-end w-full">
                <div className="hidden sm:block w-64">
                    <SearchTrigger />
                </div>
                <div className="sm:hidden">
                    <button
                        onClick={openSearch}
                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Search"
                    >
                        <SearchIcon className="h-5 w-5" />
                    </button>
                </div>
                <Link
                    className="text-sm font-medium cursor-pointer bg-gradient-to-br from-violet-500 to-indigo-500 text-white hover:text-slate-100 hover:bg-indigo-500 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600 px-4 py-2 rounded-lg transition-all"
                    href="https://vexo.co/login"
                >
                    Get Started
                </Link>
            </div>
        </div>
    </div>
}
