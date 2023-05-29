import Image from 'next/image';

interface Props {
    alt: string | null,
    src: string,
    smallImage: boolean | null,
    width: number,
    height: number,
}

export const DocImage = ({ alt, src, smallImage, width, height }: Props) => {
    return (
        <div
            style={smallImage ? {width: `${width}px`, height: `${height}px`} : {}}
            className="mt-12 z-0 m-auto shadow-lg shadow-slate-400 rounded border-[1px] border-blue-100"
        >
            <Image alt={alt || 'Doc image'} className="rounded border-0" src={src} width={width} height={height} />
        </div>
    );
};
