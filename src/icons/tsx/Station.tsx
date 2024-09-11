import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M10.833 10.624a2 2 0 1 1 2.335 0l3.547 11.149a.75.75 0 0 1-1.287.712L12 18.434l-3.427 4.05a.75.75 0 0 1-1.288-.711zm2.15 6.649 1.164 1.375-.637-2zm-.008-2.308-.047.05L12 16.113l-.927-1.096-.047-.051.974-3.063zm-2.485 1.684.528.624-1.164 1.375z"
      clipRule="evenodd"
    />
    <g opacity={0.4}>
      <path d="M5.466 2.53a.75.75 0 1 0-1.06-1.06A10.72 10.72 0 0 0 1.25 9.077a10.72 10.72 0 0 0 3.225 7.677.75.75 0 0 0 1.05-1.071A9.22 9.22 0 0 1 2.75 9.078a9.22 9.22 0 0 1 2.716-6.547M19.677 1.553a.75.75 0 1 0-1.071 1.05 9.22 9.22 0 0 1 2.644 6.475 9.22 9.22 0 0 1-2.703 6.534.75.75 0 0 0 1.062 1.06 10.72 10.72 0 0 0 3.141-7.594c0-2.93-1.173-5.587-3.073-7.525" />
    </g>
    <g opacity={0.7}>
      <path d="M8.274 5.626A.75.75 0 1 0 7.25 4.53C6.021 5.679 5.25 7.28 5.25 9.06c0 1.8.79 3.418 2.042 4.57a.75.75 0 0 0 1.016-1.105c-.97-.89-1.558-2.118-1.558-3.466 0-1.332.575-2.546 1.524-3.434M16.803 4.58a.75.75 0 0 0-1.037 1.084c.925.885 1.484 2.083 1.484 3.396 0 1.329-.572 2.54-1.517 3.428a.75.75 0 0 0 1.027 1.093c1.223-1.148 1.99-2.746 1.99-4.52 0-1.754-.75-3.336-1.947-4.48" />
    </g>
  </svg>
);
export default SvgStation;