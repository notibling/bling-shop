import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlashlightOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M9 19v-1.343c0-.818 0-1.226-.152-1.594L8.82 16h6.36q-.015.03-.027.063C15 16.431 15 16.84 15 17.657V20c0 .943 0 1.414-.293 1.707C14.416 22 13.944 22 13 22h-2c-.942 0-1.414 0-1.707-.293S9 20.943 9 20z' opacity={0.5} />
    <path fillRule='evenodd' d='M12 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75' clipRule='evenodd' />
    <path d='M20 10.172V10c0-.943 0-1.414-.293-1.707S18.943 8 18 8H6c-.943 0-1.414 0-1.707.293S4 9.057 4 10v.172c0 .408 0 .613.076.797L4.09 11h15.82l.014-.031c.076-.184.076-.389.076-.797' opacity={0.5} />
    <path d='m16.171 14.828 3.243-3.242c.272-.273.416-.417.496-.586H4.09c.08.17.223.313.496.586l3.242 3.242c.545.545.833.833.992 1.172h6.36c.159-.339.447-.627.991-1.172M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM6.53 2.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06zM18.53 2.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06' />
  </svg>
);
export default SvgFlashlightOn;
