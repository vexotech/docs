import Image from 'next/image';
import React from "react";

type ImageSize = 'small' | 'medium' | 'large';

interface Props {
    alt: string | null,
    src: string,
    size?: ImageSize,
    width?: number,
    height?: number,
}

export const DocImage = ({ alt, src, size = 'medium', width = 800, height = 600 }: Props): React.JSX.Element => {
    const getSizeClasses = (size: ImageSize) => {
        switch (size) {
            case 'small':
                return 'max-w-sm mx-auto';
            case 'medium':
                return 'max-w-2xl mx-auto';
            case 'large':
                return 'max-w-5xl mx-auto';
            default:
                return 'max-w-2xl mx-auto';
        }
    };

    return (
        <div className={`mt-12 mb-12 z-0 shadow-lg shadow-slate-400 rounded border-[1px] border-blue-100 ${getSizeClasses(size)}`}>
            <Image
                alt={alt || 'Doc image'}
                className="mt-0 mb-0 rounded border-0 w-full h-auto"
                src={src}
                width={width}
                height={height}
            />
        </div>
    );
};
