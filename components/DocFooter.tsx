import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

export type DocLink = {
    href: string,
    label: string,
}

interface Props {
    previous: DocLink,
    next: DocLink,
}

const card = "group flex flex-col justify-center gap-1 min-h-[6rem] w-full sm:w-[280px] p-4 border-2 border-gray-200 rounded-md hover:bg-indigo-50 hover:border-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 transition-colors duration-200";
const label = "text-indigo-600 group-hover:text-indigo-700 text-sm transition-colors duration-200";

export const DocFooter = ({ previous, next }: Props): React.JSX.Element => {
    return <nav aria-label="Previous and next pages" className="w-full mt-10 pb-16 px-4 sm:px-6 md:px-12 lg:pr-80 flex flex-col sm:flex-row gap-4 sm:gap-9">
        {previous && <Link href={previous.href} className={card}>
            <span className="text-slate-500 text-xs uppercase">Previous</span>
            <span className={label}>
                <ArrowLeftIcon className="inline w-4 h-4 mr-2" aria-hidden="true" />
                {previous.label}
            </span>
        </Link>}
        {next && <Link href={next.href} className={`${card} items-end text-right sm:ml-auto`}>
            <span className="text-slate-500 text-xs uppercase">Next</span>
            <span className={label}>
                {next.label}
                <ArrowRightIcon className="inline w-4 h-4 ml-2" aria-hidden="true" />
            </span>
        </Link>}
    </nav>
}
