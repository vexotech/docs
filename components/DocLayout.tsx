'use client';

import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, MenuIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

type DocLink = {
    href: string,
    label: string,
}

interface Props {
    current: string,
    previous: DocLink,
    next: DocLink,

    links: string[],

    children: React.ReactNode,
}

export const DocLayout = ({ current, children, links = [], previous, next }: Props) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const navigate = (href: string) => (): void => {
        router.push(href)
    };

    return (
        <div>
            <div className={`fixed transition-all top-0 ${open ? 'left-0' : '-left-56'} w-56 sm:left-0 md:w-72 h-screen bg-white border-r-2 border-r-slate-50 z-10`}>
                <div className="flex flex-col">
                    <div className="w-full h-16 flex items-center px-10 pr-5 sm:pr-10 justify-between">
                        <div className="text-gray-600 font-bold text-xs sm:text-sm">
                            VEXO /
                            <span className="block font-normal text-xs uppercase tracking-wider text-blue-400">Documentation</span>
                        </div>
                        <ChevronLeftIcon className="inline w-4 h-4 sm:hidden cursor-pointer" onClick={() => setOpen(false)}/>
                    </div>
                    <div className="p-10 py-5 h-[calc(100vh_-_4rem)] overflow-y-scroll">
                        <ul>
                            <li className="text-gray-600 font-bold pt-5 pb-2 uppercase text-xs">Getting Started</li>
                            <li className="py-1"><a className={`${current === 'integration' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/">React Native</a></li>
                            <li className="py-1"><a className={`${current === 'expo' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/expo">Expo</a></li>
                            <li className="py-1"><a className={`${current === 'features' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/features">Features</a></li>

                            <li className="text-gray-600 font-bold pt-5 pb-2 uppercase text-xs mt-2">Dashboard</li>
                            <li className="py-1"><a className={`${current === 'active-users' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/active-users">Active Users</a></li>
                            <li className="py-1"><a className={`${current === 'average-session' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/average-session">Average session</a></li>
                            <li className="py-1"><a className={`${current === 'new-downloads' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/new-downloads">New Downloads</a></li>
                            <li className="py-1"><a className={`${current === 'drop-off-rate' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/drop-off-rate">Drop off rate</a></li>
                            <li className="py-1"><a className={`${current === 'users-by-country' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/users-by-country">Users By Country</a></li>
                            <li className="py-1"><a className={`${current === 'version-adoption' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/version-adoption">Version Adoption</a></li>
                            <li className="py-1"><a className={`${current === 'popular-screens' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/popular-screens">Popular Screens</a></li>
                            <li className="py-1"><a className={`${current === 'app-intensity' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/app-intensity">App Intensity</a></li>
                            <li className="py-1"><a className={`${current === 'custom-events' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/custom-events">Custom Events</a></li>

                            <li className="text-gray-600 font-bold pt-5 pb-2 uppercase text-xs mt-2">Devices</li>
                            <li className="py-1"><a className={`${current === 'sessions' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/sessions">Sessions</a></li>
                            <li className="py-1"><a className={`${current === 'real-time' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href="/real-time">Real Time Inspector</a></li>

                            <li className="text-gray-600 font-bold pt-5 pb-2 uppercase text-xs mt-2">Heatmap</li>
                            <li className="py-1"><a className={`${current === 'screens' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`}  href="/screens">Screen & Taps</a></li>
                            <li className="py-1"><a className={`${current === 'screenshots' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`}  href="/screenshots">Screenshots</a></li>

                            <li className="text-gray-600 font-bold pt-5 pb-2 uppercase text-xs mt-2">App Settings</li>
                            <li className="py-1"><a className={`${current === 'app-general-information' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`}  href="/app-general-information">General Information</a></li>
                            <li className="py-1"><a className={`${current === 'people' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`}  href="/people">People</a></li>
                            <li className="py-1"><a className={`${current === 'delete-application' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`}  href="/delete-application">Delete Application</a></li>

                            <li className="text-gray-600 font-bold pt-5 pb-2 uppercase text-xs mt-2">Account Settings</li>
                            <li className="py-1"><a className={`${current === 'account-general-information' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`}  href="/account-general-information">General Information</a></li>
                            <li className="py-1"><a className={`${current === 'delete-account' ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`}  href="/delete-account">Delete Account</a></li>

                            {/*<li className="py-1"><a className="text-gray-500 text-sm font-light hover:underline underline-offset-2" href="#">Privacy</a></li>*/}
                            {/*<li className="py-1"><a className="text-gray-500 text-sm font-light hover:underline underline-offset-2" href="#">Support</a></li>*/}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full h-16 fixed top-0 bg-white bg-opacity-95 pl-0 sm:pl-56 md:pl-72">
                <div className="w-full h-full px-12 flex items-center justify-between">
                    <Link className="text-sm text-slate-600 cursor-pointer hidden sm:block" href="/apps">
                        <ArrowLeftIcon className="inline w-4 h-4 mr-2"/> Go to Dashboard
                    </Link>
                    <div className="text-sm text-slate-600 cursor-pointer flex items-center sm:hidden">
                        <MenuIcon className="inline w-4 h-4 mr-4" onClick={() => setOpen(true)}/>
                        <div className="text-gray-600 font-bold text-xs">
                            VEXO /
                            <span className="block font-normal text-xs uppercase tracking-wider text-blue-400">Documentation</span>
                        </div>
                    </div>
                    <div>
                        <Link className="text-xs cursor-pointer bg-gradient-to-tr from-blue-400 to-indigo-500 text-white px-5 py-3 pr-6 rounded-md" href="https://vexo.co/login">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-screen min-h-[calc(100vh_-_4rem)] pl-0 sm:pl-56 md:pl-72 bg-white">
                <div className="w-full max-w-full mt-16 prose px-12 lg:pr-80 py-10 font-light text-slate-700 text-base leading-7 prose-a:font-light prose-h1:font-bold prose-h1:text-3xl prose-h1:text-slate-700 prose-h2:text-slate-700 prose-h2:font-normal prose-orange">
                    { children }
                </div>
                <div className={`w-full mt-10 pb-16 gap-9 px-12 lg:pr-80 flex justify-between`}>
                    {previous && <div onClick={navigate(previous.href)} className="h-24 hover:opacity-80 transition-all col-start-1 p-4 cursor-pointer border-2 border-slate-100 rounded-md flex justify-center flex-col w-[280px]">
                        <div className="text-slate-400 text-xs uppercase mb-1">Previous</div>
                        <div className="text-blue-400 text-sm">
                            <ArrowLeftIcon className="inline w-4 h-4 mr-2" />
                            {previous.label}
                        </div>
                    </div>}
                    {next && <div onClick={navigate(next.href)} className="h-24 hover:opacity-80 transition-all col-start-2 p-4 cursor-pointer border-2 border-slate-100 rounded-md flex justify-center flex-col items-end w-[280px]">
                        <div className="text-slate-400 text-xs uppercase mb-1">Next</div>
                        <div className="text-blue-400 text-sm">
                            {next.label}
                            <ArrowRightIcon className="inline w-4 h-4 ml-2" />
                        </div>
                    </div>}
                </div>
                {links.length > 0 && <div className='w-72 h-72 fixed top-28 right-8 pl-8 pr-2 hidden lg:block'>
                    <div className="text-xs mb-4 uppercase font-light text-slate-300">On this Page</div>
                    {links.map((link, idx) => <div key={idx} className="text-sm mb-3 cursor-pointer font-light text-slate-300 hover:text-slate-500 hover:underline underline-offset-2"><a href="#create-an-account">{link}</a></div>)}
                </div>}
            </div>
        </div>
    );
};
