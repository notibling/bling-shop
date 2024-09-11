import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M1 13.53c0-4.667 0-7 1.45-8.45s3.783-1.45 8.45-1.45 7 0 8.45 1.45 1.45 3.783 1.45 8.45 0 7-1.45 8.45-3.783 1.45-8.45 1.45-7 0-8.45-1.45S1 18.197 1 13.53" opacity={0.5} />
    <path d="m17.67 1.907 2.593 2.248c1.785 1.546 2.678 2.32 2.678 3.325 0 1.004-.893 1.778-2.678 3.325l-2.593 2.247c-.785.68-1.177 1.02-1.498.873-.322-.146-.322-.666-.322-1.704v-1.677c-2.65 0-5.477.988-7.2 2.7-.525.52-.788.781-.927.715-.14-.066-.107-.403-.042-1.076.648-6.721 5.061-8.468 8.169-8.468V2.74c0-1.04 0-1.558.322-1.705.321-.147.713.193 1.498.873" />
  </svg>
);
export default SvgSquareForward;
