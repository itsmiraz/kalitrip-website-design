// app/fonts.ts

import { Inter, Montserrat, Open_Sans,  } from 'next/font/google';
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-clashDisplay' });
export const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
export const clashDisplay = localFont({
    src: './fonts/ClashDisplay-Variable.ttf',
    variable: '--font-clash-display', // Make sure this matches in Tailwind config
  });