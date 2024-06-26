import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });

export const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  preload: true,
});
