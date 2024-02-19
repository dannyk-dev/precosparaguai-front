import {
  JetBrains_Mono as FontMono,
  Plus_Jakarta_Sans as FontSans,
} from 'next/font/google';

import { Roboto as robotoFont } from 'next/font/google';

export const roboto = robotoFont({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});
