import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

type BannerStyleType = 'sm' | 'base' | 'lg' | 'full';

export interface IBannerComponentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    variant: BannerStyleType;
    children?: ReactNode;
    image: StaticImageData;
}

const variantClasses: Record<BannerStyleType, string> = {
    sm: '',
    base: '',
    lg: '',
    full: '',
};
