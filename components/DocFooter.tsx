import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/outline";
import React from "react";
import {useRouter} from "next/navigation";

export type DocLink = {
    href: string,
    label: string,
}

export const DocFooter: React.ReactNode = ({ previous, next }: DocLink) => {
    const router = useRouter();

    const navigate = (href: string) => (): void => {
        router.push(href)
    };
    return <div className={`w-full mt-10 pb-16 gap-9 px-12 lg:pr-80 flex justify-between`}>
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
}
