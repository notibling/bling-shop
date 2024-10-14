import * as React from 'react';
import type { SVGProps } from 'react';
const SvgForbidden = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='m3.757 17.394 1.425 1.424 1.424 1.425c.867.867 1.3 1.3 1.852 1.529.551.228 1.165.228 2.39.228h2.303c1.226 0 1.84 0 2.39-.228.552-.229.986-.662 1.853-1.53l2.849-2.848c.867-.867 1.3-1.3 1.529-1.852.228-.551.228-1.165.228-2.39v-2.303c0-1.226 0-1.84-.228-2.39-.229-.552-.662-.985-1.53-1.853l-1.424-1.424-1.425-1.425c-.867-.867-1.3-1.3-1.852-1.529C14.991 2 14.378 2 13.151 2h-2.302c-1.227 0-1.84 0-2.391.228-.551.229-.985.662-1.852 1.53L3.757 6.605c-.867.867-1.3 1.301-1.529 1.852S2 9.623 2 10.85v2.302c0 1.226 0 1.84.228 2.39.228.552.662.986 1.53 1.853'
      opacity={0.5}
    />
    <path stroke={props.color || 'currentColor'} strokeWidth={1.5} d='M18.818 5.182 5.182 18.818' />
  </svg>
);
export default SvgForbidden;
