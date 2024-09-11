import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRemoteController = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104"
      opacity={0.5}
    />
    <path fillRule="evenodd" d="M8.25 15.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0" clipRule="evenodd" />
    <path d="M16 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgRemoteController;
