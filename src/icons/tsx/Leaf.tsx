import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path fillRule='evenodd' d='M12 22c-4.418 0-8-3.646-8-8.143 0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2z' clipRule='evenodd' />
    <path d='M13.463 2.326A3.45 3.45 0 0 0 12 2v7l4.432-4.432c-.863-.947-1.86-1.724-2.97-2.242' opacity={0.3} />
    <path d='M12 9v5.5l6.614-6.614c-.572-1.22-1.308-2.357-2.182-3.318z' opacity={0.4} />
    <path d='m12 19.5 7.811-7.811a15 15 0 0 0-1.197-3.803L12 14.5z' opacity={0.6} />
    <path d='M19.811 11.689 12 19.5V22c4.418 0 8-3.646 8-8.143 0-.71-.064-1.438-.189-2.168' opacity={0.7} />
  </svg>
);
export default SvgLeaf;
