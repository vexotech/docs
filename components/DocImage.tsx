import Image from 'next/image';
import React from "react";

interface Props {
    alt: string | null,
    src: string,
    smallImage: boolean | null,
    width: number,
    height: number,
}

export const DocImage = ({ alt, src, smallImage, width, height }: Props): React.JSX.Element => {
    return (
        <div
            style={smallImage ? {width: `${width}px`, height: `${height}px`} : {}}
            className="mt-12 z-0 m-auto shadow-lg shadow-slate-400 rounded border-[1px] border-blue-100"
        >
            <Image alt={alt || 'Doc image'} className="mt-0 mb-0 rounded border-0" src={src} width={width} height={height} />
        </div>
    );
};
