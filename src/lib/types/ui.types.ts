import { Options } from '@splidejs/react-splide';
import { StaticImageData } from 'next/image';
import { IProduct } from '../interfaces';

// SLIDER TYPES
export type sliderVariant = 'products' | 'banner' | 'full';

export interface ISliderProps {
    variant: sliderVariant;
    products?: IProduct[];
    images?: StaticImageData[] | string[];
    options?: Options;
    progress?: boolean;
    imageClasses?: string;
}

export interface IFullSliderProps extends Partial<ISliderProps> {
    images: StaticImageData[] | string[];
    progress?: boolean;
    options?: Options;
    imageClasses?: string;
}

export interface IProductSliderProps extends Partial<ISliderProps> {
    options?: Options;
    products: IProduct[];
}

export type PositionOptions = 'left' | 'right' | 'top' | 'bottom' | 'full';
export type OrderOptions = 'priority' | 'normal' | 'base';

export type BannerSections = 'semana_consumidor' | 'hero' | 'categorias';

export interface IBanner {
    _id: string;
    companyId: string;
    pos: PositionOptions;
    order: OrderOptions;
    image_url: string;
    image_alt: string;
    status: boolean;
    pageSection: BannerSections;
}

export type IGroupedBanners = Record<PositionOptions, IBanner[]> &
    Record<string, any>;
