import { v4 as uuidv4 } from 'uuid';
import { createFixture } from './createFixture';

type PositionOptions = 'left' | 'right' | 'top' | 'bottom' | 'full';
type OrderOptions = 'priority' | 'normal' | 'base';

import banner from '@/../public/assets/banner_dior.jpg';

export interface IBannerFixture {
    _id: string;
    companyId: string;
    pos: PositionOptions;
    order: OrderOptions;
    image_url: string;
    image_alt: string;
    status: boolean;
}

export const bannerFixture = createFixture<IBannerFixture>({
    _id: uuidv4(),
    companyId: uuidv4(),
    pos: 'left',
    order: 'normal',
    image_url: banner.src,
    image_alt: 'Banner Image',
    status: true,
});
