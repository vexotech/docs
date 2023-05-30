'use client';

import React from 'react';
import {DocNavBar} from "./DocNavBar";
import {DocNavHeader} from "./DocNavHeader";
import {DocLink} from "./DocFooter";
import {DocBody} from "./DocBody";

interface Props {
    current: string,
    previous: DocLink,
    next: DocLink,

    links: string[],

    children: React.ReactNode,
}

export const DocLayout = ({ current, children, links = [], previous, next }: Props) => {
    return (
        <div>
            <DocNavBar currentItemName={current} />
            <DocNavHeader />
            <DocBody next={next} previous={previous}>{children}</DocBody>
        </div>
    );
};
