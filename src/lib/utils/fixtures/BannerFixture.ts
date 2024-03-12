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
    order: 'normal',
    image_url: samgsungBanner.src,
    image_alt: 'Banner Image',
    status: true,
    pageSection: 'semana_consumidor',
});

export const SemanaDoConsumidorFixture = bannerFixture.createCollection([
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'right',
        order: 'normal',
        image_url: asideBanner.src,
        image_alt: 'aside image',
        status: true,
        pageSection: 'semana_consumidor',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        order: 'normal',
        image_url: lenovoBanner.src,
        image_alt: 'left slider image',
        pageSection: 'semana_consumidor',
        status: true,
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        order: 'normal',
        image_url: tufBanner.src,
        image_alt: 'left slider image',
        status: true,
        pageSection: 'semana_consumidor',
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        order: 'normal',
        image_url: lenovoBanner.src,
        image_alt: 'left slider image',
        pageSection: 'semana_consumidor',
        status: true,
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'left',
        order: 'normal',
        image_url: consumerWeek.src,
        image_alt: 'left slider image',
        pageSection: 'semana_consumidor',
        status: true,
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'full',
        order: 'normal',
        image_url: banner.src,
        image_alt: 'Full Slider Image',
        pageSection: 'hero',
        status: true,
    },
    {
        _id: uuidv4(),
        companyId: uuidv4(),
        pos: 'full',
        order: 'normal',
        image_url: bannerHome.src,
        image_alt: 'Full Slider Image',
        pageSection: 'hero',
        status: true,
    },
]);
