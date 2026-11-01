import React from "react";
import { SidebarTree } from "./SidebarTree";
import { Wordmark } from "./Wordmark";

interface Props {
    currentItemName: string,
}

export const DocNavBar = ({ currentItemName }: Props): React.JSX.Element => {
    return <div className="fixed top-0 hidden md:block w-72 h-screen bg-white border-r-2 border-r-slate-50 z-30">
        <div className="flex flex-col">
            <div className="w-full h-16 flex items-center px-10">
                <Wordmark />
            </div>
            <nav aria-label="Documentation" className="p-4 py-3 h-[calc(100vh_-_4rem)] overflow-y-scroll">
                <SidebarTree currentItemName={currentItemName} />
            </nav>
        </div>
    </div>
};
