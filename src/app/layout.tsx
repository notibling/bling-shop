
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import classNames from 'classnames';

import { GlobalProvider } from '@/contexts/GlobalState';
import { ToastsProvider } from '@/components/organisms/Toasts';
import { CartProvider } from '@/contexts/Cart';

import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const font = localFont({
  src: [
    // {
    //   path: '../fonts/montserrat/Montserrat-Light.ttf',
    //   weight: '300',
    //   style: 'normal',
    // },
    {
      path: '../fonts/montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
    // {
    //   path: '../fonts/montserrat/Montserrat-Italic.ttf',
    //   weight: '400',
    //   style: 'italic',
    // },
    // {
    //   path: '../fonts/montserrat/Montserrat-Medium.ttf',
    //   weight: '500',
    //   style: 'normal',
    // },
    // {
    //   path: '../fonts/montserrat/Montserrat-SemiBold.ttf',
    //   weight: '600',
    //   style: 'normal',
    // },

    // {
    //   path: '../fonts/montserrat/Montserrat-Bold.ttf',
    //   weight: '700',
    //   style: 'normal',
    // },


  ],

  weight: '400'
});
console.log(font);

export const metadata: Metadata = {
  title: 'BLING - Tiendas Online 24/7',
  description: 'Todo a un 🔔 de distancia.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html suppressHydrationWarning={true} data-theme='bumblebee' lang='en' >
      <head><meta name='viewport' content='width=device-width, initial-scale=1' /></head>
      <body suppressHydrationWarning={true} className={classNames(font.className, 'overflow-x-hidden', 'bling-scrollbar')}>
        <ToastsProvider>
          <CartProvider>
            <GlobalProvider>{children}</GlobalProvider>
          </CartProvider>
        </ToastsProvider>
      </body>
    </html>
  );
}
