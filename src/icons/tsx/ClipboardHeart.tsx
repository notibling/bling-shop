import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClipboardHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878.879-.88.879-2.293.879-5.122'
      opacity={0.5}
    />
    <path d='M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5zM9 12.697c0 .984 1.165 2.024 2.043 2.669.42.308.63.462.957.462.328 0 .537-.154.957-.462.878-.645 2.043-1.685 2.043-2.67 0-1.672-1.65-2.297-3-1.005-1.35-1.292-3-.668-3 1.006' />
  </svg>
);
export default SvgClipboardHeart;
