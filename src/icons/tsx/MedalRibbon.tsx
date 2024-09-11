import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedalRibbon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={9} r={7} opacity={0.5} />
    <path d="m7.546 14.4-.195.6-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.397.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a2 2 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.116.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15l-.195-.6c-1.21 1-2.762 1.6-4.454 1.6s-3.244-.6-4.454-1.6" />
  </svg>
);
export default SvgMedalRibbon;
