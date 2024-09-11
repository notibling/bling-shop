import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPaletteRound = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0" opacity={0.4} />
    <path d="m9.248 20.336 3.974-3.974 5.838-6.09a4.042 4.042 0 0 0-5.776-5.655L10 7.9V18c0 .872-.279 1.679-.752 2.336" opacity={0.7} />
    <path d="m13.222 16.362-3.974 3.974A4 4 0 0 1 6 22h11.9a4 4 0 1 0 0-8h-2.414z" />
  </svg>
);
export default SvgPaletteRound;
