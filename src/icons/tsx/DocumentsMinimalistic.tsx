import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocumentsMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M10.75 2h2c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v8c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879h-2c-2.828 0-4.243 0-5.121-.879-.879-.878-.879-2.293-.879-5.121V8c0-2.828 0-4.243.879-5.121C6.507 2 7.922 2 10.75 2M8 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 13m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9m0 8a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17'
      clipRule='evenodd'
    />
    <g fillRule='evenodd' clipRule='evenodd' opacity={0.5}>
      <path d='M1.75 4.25A.75.75 0 0 1 2.5 5v14A.75.75 0 0 1 1 19V5a.75.75 0 0 1 .75-.75M21.75 4.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75' />
    </g>
  </svg>
);
export default SvgDocumentsMinimalistic;
