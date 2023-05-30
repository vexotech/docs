import {DocFooter} from "./DocFooter";
import React from "react";

interface Props {
    children: React.ReactNode
}

export const DocBody: React.ReactNode = ({ children }) => {
    return <div className="w-screen min-h-[calc(100vh_-_4rem)] pl-0 sm:pl-56 md:pl-72 bg-white">
        <div className="w-full max-w-full mt-16 prose px-12 lg:pr-80 py-10 font-light text-slate-700 text-base leading-7 prose-a:font-light prose-h1:font-bold prose-h1:text-3xl prose-h1:text-slate-700 prose-h2:text-slate-700 prose-h2:font-normal prose-orange">
            { children }
        </div>
        <DocFooter />
    </div>
}
