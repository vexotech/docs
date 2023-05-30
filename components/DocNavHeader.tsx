import Link from "next/link";
import React from "react";

export const DocNavHeader = (): React.JSX.Element => {
    return <div className="w-full h-16 fixed top-0 bg-white bg-opacity-95 pl-0 sm:pl-56 md:pl-72">
        <div className="w-full h-full px-12 flex items-center justify-between">
            <div className="text-sm text-slate-600 cursor-pointer flex items-center sm:hidden">
                <div className="text-gray-600 font-bold text-xs">
                    VEXO /
                    <span className="block font-normal text-xs uppercase tracking-wider text-blue-400">Documentation</span>
                </div>
            </div>
            <div className="flex justify-end w-full">
                <Link className="text-xs cursor-pointer bg-gradient-to-tr from-blue-400 to-indigo-500 text-white px-5 py-3 pr-6 rounded-md" href="https://vexo.co/login">
                    Log In
                </Link>
            </div>
        </div>
    </div>
}
