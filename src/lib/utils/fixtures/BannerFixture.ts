import { v4 as uuidv4 } from 'uuid';
import { createFixture } from './createFixture';

import { IBanner } from '@/lib/types/ui.types';

import {
    asideBanner,
    banner,
    bannerHome,
    consumerWeek,
    lenovoBanner,
    samgsungBanner,
    tufBanner,
} from '../images/banners';

const bannerFixture = createFixture<IBanner>({
    _id: uuidv4(),
    companyId: uuidv4(),
    pos: 'right',
    images: {
        lg: samgsungBanner.src,
        sm: samgsungBanner.src,
    },
    image_alt: 'Banner Image',
    image_href: '',
    pageSection: 'semana_consumidor',
});

export const SemanaDoConsumidorFixture = bannerFixture.createCollection([
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'right',
        images: {
            lg: asideBanner.src,
            sm: asideBanner.src,
        },
        image_alt: 'aside image',
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
]);
