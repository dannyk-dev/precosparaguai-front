import { Options } from '@splidejs/react-splide';
import { sliderVariant } from '../../types/ui.types';

type SliderOption = Record<sliderVariant, Options>;

const SliderDefaults: SliderOption = {
    products: {
        rewind: true,
        drag: true,
        gap: '1rem',
        lazyLoad: true,
        pagination: false,
        autoWidth: true,
    },
    banner: {},
    full: {
        rewind: true,
        drag: true,
        lazyLoad: true,
        interval: 4000,
        autoplay: true,
        pagination: false,
        easing: 'ease',
        fixedWidth: '100%',
    },
};

export default SliderDefaults;
