import * as React from 'react';
import type { SVGProps } from 'react';
const SvgListHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
      opacity={0.5}
    />
    <path d="M14 15.036c0 1.235 1.485 2.543 2.52 3.305.435.32.652.48.98.48s.545-.16.98-.48c1.035-.762 2.52-2.07 2.52-3.305 0-2.008-1.925-2.757-3.5-1.206-1.575-1.551-3.5-.802-3.5 1.206" />
  </svg>
);
export default SvgListHeart;