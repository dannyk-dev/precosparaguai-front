/* eslint-disable import/no-extraneous-dependencies */
import tailwindTypography from '@tailwindcss/typography';
import tailwindForm from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
    darkMode: ['class'],
    content: ['src/**/*.{js,jsx,ts,tsx}'],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
    daisyui: {
        themes: ['cmyk', 'dracula', 'light', 'bumblebee', 'autumn'],
    },
    theme: {
        variants: {
            extend: {
                backgroundColor: ['dark'],
                textColor: ['dark'],
            },
        },
        fontFamily: {
            sans: ['var(--font-sans)', ...fontFamily.sans],
        },
        container: {
            center: true,
        },
    },
    plugins: [
        tailwindTypography,
        tailwindForm,
        require('daisyui'),
        require('flowbite/plugin'),
    ],
} satisfies Config;
