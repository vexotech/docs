import React from "react";
import { SidebarTree } from "./SidebarTree";

interface Props {
    currentItemName: string,
}

export const DocNavBar = ({ currentItemName }: Props): React.JSX.Element => {
    return <div className={`fixed transition-all top-0 hidden md:block w-56 md:w-72 h-screen bg-white border-r-2 border-r-slate-50 z-30`}>
        <div className="flex flex-col">
            <div className="w-full h-16 flex items-center px-10 pr-5 sm:pr-10 justify-between">
                <div className="text-gray-600 font-bold text-xs sm:text-sm">
                    VEXO /
                    <span className="block font-normal text-xs uppercase tracking-wider bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">Documentation</span>
                </div>
            </div>
            <div className="p-4 py-3 h-[calc(100vh_-_4rem)] overflow-y-scroll">
                <SidebarTree currentItemName={currentItemName} />
            </div>
        </div>
    </div>
};
