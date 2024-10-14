import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRepeatOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M9.53 2.47a.75.75 0 0 0-1.06 1.06l.72.72H9a7.75 7.75 0 1 0 0 15.5h.5a.75.75 0 0 0 0-1.5H9a6.25 6.25 0 0 1 0-12.5h2a.75.75 0 0 0 .53-1.28zm4.97 1.78a.75.75 0 0 0 0 1.5h.5a6.25 6.25 0 1 1 0 12.5h-2a.75.75 0 0 0-.53 1.28l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H15a7.75 7.75 0 0 0 0-15.5z'
      clipRule='evenodd'
    />
    <path d='M12.75 10a.75.75 0 0 0-1.28-.53l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V14a.75.75 0 0 0 1.5 0z' opacity={0.5} />
  </svg>
);
export default SvgRepeatOne;
