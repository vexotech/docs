import {sidebarData, SidebarItem} from "./layoutData";
import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

interface Props {
    currentItemName: string,
}

interface NavItemProps {
    isActive?: boolean,
    title: string,
    href?: string,
    depth?: number,
}

interface CollapsibleSectionProps {
    item: SidebarItem,
    currentItemName: string,
    isOpen: boolean,
    onToggle: () => void,
    depth?: number,
    openSections: Record<string, boolean>,
    toggleSection: (sectionName: string) => void,
}

const NavItem = ({ isActive, title, href, depth = 0 }: NavItemProps): React.JSX.Element => {
    const marginStyle = { marginLeft: `${depth * 16}px` };
    return <li className="py-0.5" style={marginStyle}>
        <a
            href={href}
            className={`
                flex p-2.5 px-3 cursor-pointer rounded-sm border group transition-all duration-200
                ${isActive
                    ? 'text-indigo-700 bg-indigo-50 border-indigo-300'
                    : 'border-transparent hover:bg-white hover:border-gray-200'
                }
            `}
        >
            <span className={`font-light text-sm transition-colors duration-200 ${isActive ? 'text-indigo-700' : 'text-slate-600 group-hover:text-indigo-600'}`}>
                {title}
            </span>
        </a>
    </li>
};

const CollapsibleSection = ({ item, currentItemName, isOpen, onToggle, depth = 0, openSections, toggleSection }: CollapsibleSectionProps): React.JSX.Element => {
    const marginStyle = { marginLeft: `${depth * 16}px` };
    const isActive = item.name === currentItemName;

    return (
        <>
            <li className="py-0.5" style={marginStyle}>
                <button
                    onClick={onToggle}
                    className={`
                        flex justify-between items-center w-full p-2.5 px-3 cursor-pointer rounded-sm border group transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50
                        ${isActive
                            ? 'text-indigo-700 bg-indigo-50 border-indigo-300'
                            : 'border-transparent hover:bg-white hover:border-gray-200'
                        }
                    `}
                    aria-expanded={isOpen}
                    aria-controls={`section-${item.name}`}
                >
                    <span className={`font-light text-sm transition-colors duration-200 ${isActive ? 'text-indigo-700' : 'text-slate-600 group-hover:text-indigo-600'}`}>
                        {item.title}
                    </span>
                    {isOpen ? (
                        <ChevronUpIcon className={`h-4 w-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'} group-hover:text-indigo-400`} aria-hidden="true" />
                    ) : (
                        <ChevronDownIcon className={`h-4 w-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'} group-hover:text-indigo-400`} aria-hidden="true" />
                    )}
                </button>
            </li>
            {isOpen && (
                <div id={`section-${item.name}`}>
                    {item.children?.map(child => {
                        if (child.isCollapsible) {
                            return <CollapsibleSection
                                key={child.name}
                                item={child}
                                currentItemName={currentItemName}
                                isOpen={openSections[child.name] || false}
                                onToggle={() => toggleSection(child.name)}
                                depth={depth + 1}
                                openSections={openSections}
                                toggleSection={toggleSection}
                            />;
                        }
                        return <NavItem
                            key={child.name}
                            isActive={child.name === currentItemName}
                            href={child.href}
                            title={child.title}
                            depth={depth + 1}
                        />;
                    })}
                </div>
            )}
        </>
    );
};

export const DocNavBar = ({ currentItemName }: Props): React.JSX.Element => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};

        const hasActiveChild = (items: SidebarItem[]): boolean => {
            return items.some(item => {
                if (item.name === currentItemName) return true;
                if (item.children) return hasActiveChild(item.children);
                return false;
            });
        };

        const initializeDefaults = (items: SidebarItem[]) => {
            items.forEach(item => {
                if (item.isCollapsible) {
                    const shouldOpen = item.defaultOpen || (item.children && hasActiveChild(item.children));
                    initial[item.name] = shouldOpen || false;
                    if (item.children) {
                        initializeDefaults(item.children);
                    }
                }
            });
        };

        initializeDefaults(sidebarData);
        return initial;
    });

    const toggleSection = (sectionName: string) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };

    useEffect(() => {
        const hasActiveChild = (items: SidebarItem[]): boolean => {
            return items.some(item => {
                if (item.name === currentItemName) return true;
                if (item.children) return hasActiveChild(item.children);
                return false;
            });
        };

        const updateOpenSections = (items: SidebarItem[]) => {
            items.forEach(item => {
                if (item.isCollapsible && item.children && hasActiveChild(item.children)) {
                    setOpenSections(prev => ({
                        ...prev,
                        [item.name]: true
                    }));
                }
                if (item.children) {
                    updateOpenSections(item.children);
                }
            });
        };

        updateOpenSections(sidebarData);
    }, [currentItemName]);

    return <div className={`fixed transition-all top-0 hidden md:block w-56 md:w-72 h-screen bg-white border-r-2 border-r-slate-50 z-10`}>
        <div className="flex flex-col">
            <div className="w-full h-16 flex items-center px-10 pr-5 sm:pr-10 justify-between">
                <div className="text-gray-600 font-bold text-xs sm:text-sm">
                    VEXO /
                    <span className="block font-normal text-xs uppercase tracking-wider bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">Documentation</span>
                </div>
            </div>
            <div className="p-4 py-3 h-[calc(100vh_-_4rem)] overflow-y-scroll">
                <ul>
                    {sidebarData.map(item => {
                        if (item.isCollapsible) {
                            return <CollapsibleSection
                                key={item.name}
                                item={item}
                                currentItemName={currentItemName}
                                isOpen={openSections[item.name] || false}
                                onToggle={() => toggleSection(item.name)}
                                openSections={openSections}
                                toggleSection={toggleSection}
                            />;
                        }
                        return <NavItem
                            key={item.name}
                            isActive={item.name === currentItemName}
                            href={item.href}
                            title={item.title}
                        />;
                    })}
                </ul>
            </div>
        </div>
    </div>
};
