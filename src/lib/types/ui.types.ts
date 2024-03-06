import { Options } from '@splidejs/react-splide';
import { StaticImageData } from 'next/image';
import { IProduct } from '../interfaces';
import { SplideProps } from '@splidejs/react-splide';

type sliderVariant = 'products' | 'banner' | 'full';

export interface ISliderProps {
    variant: sliderVariant;
    products?: IProduct[];
    images?: StaticImageData[];
    options?: Options;
    progress?: boolean;
    imageClasses?: string;
}

export interface IFullSliderProps extends Partial<ISliderProps> {
    images: StaticImageData[];
    progress?: boolean;
    options?: Options;
    imageClasses?: string;
}

export interface IProductSliderProps extends Partial<ISliderProps> {
    options?: Options;
    products: IProduct[];
}
