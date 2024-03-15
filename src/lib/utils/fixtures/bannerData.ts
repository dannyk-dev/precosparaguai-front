import { v4 as uuidv4 } from 'uuid';
import { IBanner } from '@/lib/types/ui.types';
import {
    banner,
    bannerHome,
    consumerWeek,
    lenovoBanner,
    tufBanner,
    cashBack,
    asideBanner,
    cupomFullBanner,
    multiTopLeftDesktop,
    multiTopLeftMobile,
    multiBottomLeftDesktop,
    multiBottomLeftMobile,
    FastPayDesktop,
    FastPayMobile,
    cashbackMobile,
    cupomMobile,
    cashbackBannerMobile,
} from '../images/banners';

export const fullBanners: IBanner[] = [
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'full',
        images: {
            lg: banner.src,
            sm: banner.src,
        },
        image_alt: 'Full Slider Image',
        pageSection: 'hero',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'full',
        images: {
            lg: bannerHome.src,
            sm: bannerHome.src,
        },
        image_alt: 'Full Slider Image',
        image_href: '',
        pageSection: 'hero',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'full',
        images: {
            lg: banner.src,
            sm: banner.src,
        },
        image_alt: 'Full Slider Image',
        pageSection: 'hero',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'full',
        images: {
            lg: bannerHome.src,
            sm: bannerHome.src,
        },
        image_alt: 'Full Slider Image',
        image_href: '',
        pageSection: 'hero',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'full',
        images: {
            lg: cashBack.src,
            sm: cashbackBannerMobile.src,
        },
        image_alt: 'Full Slider Image',
        image_href: '',
        pageSection: 'multibanner',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'full',
        images: {
            lg: cupomFullBanner.src,
            sm: cupomMobile.src,
        },
        image_alt: 'Full Slider Image',
        image_href: '',
        pageSection: 'multibanner',
    },
];

export const leftBanners: IBanner[] = [
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        images: {
            lg: lenovoBanner.src,
            sm: lenovoBanner.src,
        },
        image_alt: 'left slider image',
        pageSection: 'semana_consumidor',
        image_href: '',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        images: {
            lg: tufBanner.src,
            sm: tufBanner.src,
        },
        image_alt: 'left slider image',
        image_href: '',
        pageSection: 'semana_consumidor',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        images: {
            lg: lenovoBanner.src,
            sm: lenovoBanner.src,
        },
        image_alt: 'left slider image',
        pageSection: 'semana_consumidor',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        images: {
            lg: consumerWeek.src,
            sm: consumerWeek.src,
        },
        image_alt: 'left slider image',
        pageSection: 'semana_consumidor',
        image_href: '',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        images: {
            lg: multiTopLeftDesktop.src,
            sm: multiTopLeftMobile.src,
        },
        image_alt: 'left slider image',
        pageSection: 'multibanner',
        image_href: '',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        images: {
            lg: multiBottomLeftDesktop.src,
            sm: multiBottomLeftMobile.src,
        },
        image_alt: 'left slider image',
        pageSection: 'multibanner',
        image_href: '',
    },
];

export const rightBanners: IBanner[] = [
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'right',
        images: {
            lg: asideBanner.src,
            sm: cashbackMobile.src,
        },
        image_alt: 'aside image',
        image_href: '',
        pageSection: 'semana_consumidor',
    },
    // {
    //     _id: uuidv4(),
    //     companyId: uuidv4(),
    //     pos: 'right',
    //     images: {
    //         lg: samgsungBanner.src,
    //         sm: samgsungBanner.src,
    //     },
    //     image_alt: 'aside image',
    //     image_href: '',
    //     pageSection: 'semana_consumidor',
    // },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'right',
        images: {
            lg: FastPayDesktop.src,
            sm: FastPayMobile.src,
        },
        image_alt: 'aside image',
        image_href: '',
        pageSection: 'multibanner',
    },
];
