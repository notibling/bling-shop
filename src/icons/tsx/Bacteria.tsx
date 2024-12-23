import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBacteria = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0' />
    <path
      stroke={props.color || 'currentColor'}
      strokeWidth={1.5}
      d='M14.465 7.171s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.17 6.465 6.17 6.465M19 13.136s-1.162.473-1.483 1.673.448 2.19.448 2.19M13.42 17.772 15 19'
    />
    <path
      fillRule='evenodd'
      d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-6.393 8.787a.75.75 0 0 0-1.386-.574l-.414 1a.75.75 0 0 0 1.386.574zm8.893.463a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-2.5-7h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5'
      clipRule='evenodd'
      opacity={0.5}
    />
    <path stroke={props.color || 'currentColor'} strokeWidth={1.5} d='m12.5 9.5-1-1' />
  </svg>
);
export default SvgBacteria;
