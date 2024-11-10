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
import { Cookies } from '@/components/molecules';
import { AuthProvider } from '@/hooks';

const font = localFont({
  src: [
    {
      path: '../fonts/montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
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
}: {
  children: React.ReactNode; // Declaración explícita de children como React.ReactNode
}) {

  return (
    <html suppressHydrationWarning={true} data-theme='bumblebee' lang='en'>
      <head><meta name='viewport' content='width=device-width, initial-scale=1' /></head>
      <body suppressHydrationWarning={true} className={classNames(font.className, 'overflow-x-hidden', 'bling-scrollbar')}>
        <ToastsProvider>
          <AuthProvider>
            <CartProvider>
              <GlobalProvider>{children}</GlobalProvider>
            </CartProvider>
          </AuthProvider>
        </ToastsProvider>
      </body>
    </html>
  );
}
