import {sidebarData} from "./layoutData";
import React from "react";

interface Props {
    currentItemName: string,
}

const NavItem: React.ReactNode = ({ isActive, title, href }) => {
    return <li className="py-1">
        <a className={`${isActive ? 'text-gray-600 underline' : 'text-gray-500' } text-sm font-light hover:underline underline-offset-2`} href={href}>
            {title}
        </a>
    </li>
};

const NavTitle: React.ReactNode = ({ title }) => {
    return <li className="text-gray-600 font-bold pt-5 pb-2 uppercase text-xs">{title}</li>
};

export const DocNavBar: React.ReactNode = ({ currentItemName }) : Props => {
  return <div className={`fixed transition-all top-0 w-56 sm:left-0 md:w-72 h-screen bg-white border-r-2 border-r-slate-50 z-10`}>
      <div className="flex flex-col">
          <div className="w-full h-16 flex items-center px-10 pr-5 sm:pr-10 justify-between">
              <div className="text-gray-600 font-bold text-xs sm:text-sm">
                  VEXO /
                  <span className="block font-normal text-xs uppercase tracking-wider text-blue-400">Documentation</span>
              </div>
          </div>
          <div className="p-10 py-5 h-[calc(100vh_-_4rem)] overflow-y-scroll">
              <ul>
                  {sidebarData.map(item => {
                      if (item.isHeader) {
                          return <NavTitle key={item.name} title={item.title}/>
                      }
                      return <NavItem key={item.name} isActive={item.name === currentItemName} href={item.href} title={item.title} />
                  })}
              </ul>
          </div>
      </div>
  </div>
};
