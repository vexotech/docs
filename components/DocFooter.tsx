import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/outline";
import React from "react";
import {useRouter} from "next/navigation";

export type DocLink = {
    href: string,
    label: string,
}

interface Props {
    previous: DocLink,
    next: DocLink,
}

export const DocFooter = ({ previous, next }: Props): React.JSX.Element => {
    const router = useRouter();

    const navigate = (href: string) => (): void => {
        router.push(href)
    };
    return <div className={`w-full mt-10 pb-16 gap-9 px-12 lg:pr-80 flex justify-between`}>
        {previous && <div onClick={navigate(previous.href)} className="h-24 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 col-start-1 p-4 cursor-pointer border-2 border-gray-200 rounded-md flex justify-center flex-col w-[280px] group">
            <div className="text-slate-500 text-xs uppercase mb-1">Previous</div>
            <div className="text-indigo-600 group-hover:text-indigo-700 text-sm transition-colors duration-200">
                <ArrowLeftIcon className="inline w-4 h-4 mr-2" />
                {previous.label}
            </div>
        </div>}
        {next && <div onClick={navigate(next.href)} className="h-24 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 col-start-2 p-4 cursor-pointer border-2 border-gray-200 rounded-md flex justify-center flex-col items-end w-[280px] group">
            <div className="text-slate-500 text-xs uppercase mb-1">Next</div>
            <div className="text-indigo-600 group-hover:text-indigo-700 text-sm transition-colors duration-200">
                {next.label}
                <ArrowRightIcon className="inline w-4 h-4 ml-2" />
            </div>
        </div>}
    </div>
}
