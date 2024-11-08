import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEyeClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M2.919 6.605a1 1 0 0 0-1.838.79l.002.003.003.007.01.021.032.072q.04.091.12.25c.105.21.262.506.47.857.41.687 1.027 1.6 1.872 2.52l-.797.797a1 1 0 1 0 1.414 1.414l.84-.84c.565.456 1.197.886 1.897 1.256l-.782 1.203a1 1 0 0 0 1.676 1.09l.985-1.514c.677.208 1.402.356 2.177.425V16.5a1 1 0 0 0 1 1V13c-2.748 0-4.819-1.199-6.304-2.589l-.024-.023a12 12 0 0 1-.564-.568 13.4 13.4 0 0 1-1.67-2.238 12 12 0 0 1-.516-.968zm-1.838.79L2 7c-.92.394-.919.395-.919.395'
      clipRule='evenodd'
    />
    <path
      d='M15.22 12.398A8.7 8.7 0 0 1 12 13v4.5a1 1 0 0 0 1-1v-1.544c.772-.07 1.497-.217 2.176-.425l.986 1.514a1 1 0 1 0 1.676-1.09l-.782-1.203a12 12 0 0 0 1.897-1.256l.84.84a1 1 0 0 0 1.414-1.414l-.797-.798a15.4 15.4 0 0 0 2.302-3.296 10 10 0 0 0 .19-.395l.011-.026.004-.008.002-.005a1 1 0 1 0-1.838-.788l-.005.011a5 5 0 0 1-.146.302 13.054 13.054 0 0 1-2.614 3.48c-.841.79-1.87 1.517-3.095 2'
      opacity={0.5}
    />
  </svg>
);
export default SvgEyeClosed;
