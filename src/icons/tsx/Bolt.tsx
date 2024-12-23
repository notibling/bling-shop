import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} viewBox='0 0 24 24' {...props}>
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8.732 5.771 5.67 9.914c-1.285 1.739-1.928 2.608-1.574 3.291l.018.034c.375.673 1.485.673 3.704.673 1.233 0 1.85 0 2.236.363l.02.02 3.872-4.57-.02-.02c-.379-.371-.379-.963-.379-2.148v-.31c0-3.285 0-4.927-.923-5.21s-1.913 1.056-3.892 3.734'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      d='M10.453 16.443v.31c0 3.284 0 4.927.923 5.21s1.913-1.056 3.893-3.734l3.062-4.143c1.284-1.739 1.927-2.608 1.573-3.291l-.018-.034c-.375-.673-1.485-.673-3.704-.673-1.233 0-1.85 0-2.236-.363l-3.872 4.57c.379.371.379.963.379 2.148'
      opacity={0.5}
    />
  </svg>
);
export default SvgBolt;
