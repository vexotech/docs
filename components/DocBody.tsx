import { DocFooter, DocLink } from "./DocFooter";
import React from "react";

interface Props {
    children: React.ReactNode,

    next: DocLink,
    previous: DocLink,
}

export const DocBody = ({ children, next, previous }: Props): React.JSX.Element => {
    return <div className="w-full min-h-[calc(100vh_-_4rem)] md:pl-72 bg-white">
        <div className="w-full max-w-full mt-16 prose px-4 sm:px-6 md:px-12 lg:pr-80 py-10 font-light text-slate-700 text-base leading-7 prose-a:font-light prose-h1:font-bold prose-h1:text-3xl prose-h1:text-slate-700 prose-h2:text-slate-700 prose-h2:font-bold prose-headings:scroll-mt-20 prose-code:before:content-none prose-code:after:content-none prose-code:break-words prose-code:bg-slate-100 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-indigo">
            { children }
        </div>
        <DocFooter next={next} previous={previous} />
    </div>
};
