'use client';

import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { SearchTrigger } from "./SearchTrigger";
import { SidebarTree } from "./SidebarTree";
import { Wordmark } from "./Wordmark";
import { useSearch } from '../lib/SearchContext';

interface Props {
    currentItemName: string,
}

export const DocNavHeader = ({ currentItemName }: Props): React.JSX.Element => {
    const { openSearch } = useSearch();
    const [menuOpen, setMenuOpen] = useState(false);

    return <div className="w-full h-16 fixed top-0 bg-white bg-opacity-95 md:pl-72 z-20">
        <div className="w-full h-full px-4 sm:px-6 md:px-12 flex items-center gap-3">
            <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="md:hidden p-2.5 -ml-2.5 rounded-md text-slate-600 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                aria-label="Open menu"
                aria-expanded={menuOpen}
            >
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="md:hidden">
                <Wordmark />
            </div>
            <div className="flex items-center gap-3 justify-end flex-1">
                <div className="hidden sm:block sm:w-48 md:w-64">
                    <SearchTrigger />
                </div>
                <button
                    type="button"
                    onClick={openSearch}
                    className="sm:hidden p-2.5 rounded-md text-slate-600 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                    aria-label="Search"
                >
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <a
                    className="shrink-0 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-3 sm:px-4 py-2 rounded-lg transition-colors"
                    href="https://www.vexo.co/sign-up"
                >
                    Get started
                </a>
            </div>
        </div>

        <Dialog open={menuOpen} onClose={setMenuOpen} className="relative z-50 md:hidden" aria-label="Documentation menu">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-slate-900/30 transition-opacity duration-200 ease-out data-[closed]:opacity-0 motion-reduce:transition-none"
            />
            <div className="fixed inset-0 flex">
                <DialogPanel
                    transition
                    className="flex flex-col w-72 max-w-[85vw] h-full bg-white shadow-xl transition duration-200 ease-out data-[closed]:-translate-x-full motion-reduce:transition-none"
                >
                    <div className="h-16 shrink-0 flex items-center justify-between px-6">
                        <Wordmark />
                        <button
                            type="button"
                            onClick={() => setMenuOpen(false)}
                            className="p-2.5 -mr-2.5 rounded-md text-slate-600 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                            aria-label="Close menu"
                        >
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <nav aria-label="Documentation" className="flex-1 overflow-y-auto p-4 pt-0">
                        <SidebarTree currentItemName={currentItemName} />
                    </nav>
                </DialogPanel>
            </div>
        </Dialog>
    </div>
}
