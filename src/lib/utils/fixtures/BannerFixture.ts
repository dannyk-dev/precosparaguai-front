import { v4 as uuidv4 } from 'uuid';
import { createFixture } from './createFixture';

import { IBanner } from '@/lib/types/ui.types';
import { fullBanners, leftBanners, rightBanners } from './bannerData';

import {} from '../images/banners';

const bannerFixture = createFixture<IBanner>({
    _id: uuidv4(),
    companyId: uuidv4(),
    pos: 'right',
    images: {
        lg: '',
        sm: '',
    },
    image_alt: 'Banner Image',
    image_href: '',
    pageSection: 'semana_consumidor',
});

export const SemanaDoConsumidorFixture = bannerFixture.createCollection([
    ...rightBanners,
    ...leftBanners,
    ...fullBanners,
]);
