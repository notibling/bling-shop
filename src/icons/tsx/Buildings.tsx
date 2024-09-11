import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBuildings = (props: SVGProps<SVGSVGElement>) => (

<svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v12.25h7a.75.75 0 010 1.5H2a.75.75 0 010-1.5h1V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5M5.25 8A.75.75 0 016 7.25h6a.75.75 0 010 1.5H6A.75.75 0 015.25 8m0 3a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75m0 3a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75M9 18.25a.75.75 0 01.75.75v2.25h-1.5V19a.75.75 0 01.75-.75"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v15.25h-6V9c0-1.886 0-2.828-.586-3.414C13.842 5.013 12.928 5 11.126 5V3.5c.084-.387.225-.68.46-.914C12.17 2 13.114 2 15 2"
        opacity={0.5}
      ></path>
    </svg>



);
export default SvgBuildings;