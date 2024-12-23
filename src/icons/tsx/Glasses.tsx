import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlasses = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M6.712 3.763a.75.75 0 0 1-.475.949l-.518.172c-.617.206-1.024.343-1.326.481-.286.13-.414.235-.5.343-.085.107-.157.256-.219.564-.065.326-.105.753-.164 1.401l-.367 4.037-.048.532a4.751 4.751 0 0 1 7.585 2.942 4.8 4.8 0 0 1 1.32-.187v1.5c-.37 0-.739.063-1.092.19l-.22.077A4.75 4.75 0 0 1 6 20.75c-2.62 0-4.745-2.14-4.75-4.758q0-.421.072-.823L2.02 7.5c.054-.6.1-1.107.183-1.521.089-.441.23-.842.515-1.201.284-.36.642-.59 1.051-.776.384-.176.868-.337 1.439-.527l.555-.185a.75.75 0 0 1 .949.474'
      clipRule='evenodd'
    />
    <path
      d='M20.905 12.242a4.751 4.751 0 0 0-7.585 2.942 4.8 4.8 0 0 0-1.32-.187v1.5c.37 0 .739.063 1.092.19l.22.077A4.75 4.75 0 0 0 18 20.75c2.62 0 4.744-2.14 4.75-4.758q0-.421-.073-.823L21.98 7.5c-.054-.6-.1-1.107-.183-1.521-.089-.441-.23-.842-.515-1.201s-.642-.59-1.051-.776c-.384-.176-.868-.337-1.439-.527l-.555-.185a.75.75 0 0 0-.474 1.423l.518.172c.617.206 1.024.343 1.326.481.286.13.414.235.5.343.085.107.157.256.219.564.065.326.105.753.164 1.401z'
      opacity={0.5}
    />
  </svg>
);
export default SvgGlasses;
