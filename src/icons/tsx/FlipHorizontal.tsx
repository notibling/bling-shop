import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlipHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <g opacity={0.5}>
      <path d="M22 5.887v12.227c0 1.702 0 2.553-.542 2.832-.543.28-1.235-.215-2.62-1.205l-1.582-1.13c-.616-.439-.924-.659-1.09-.982S16 16.927 16 16.171V7.83c0-.757 0-1.135.166-1.458.166-.324.474-.543 1.09-.983l1.581-1.13c1.386-.99 2.078-1.484 2.62-1.205.543.28.543 1.13.543 2.833M2 5.887v12.227c0 1.702 0 2.553.542 2.832.543.28 1.235-.215 2.62-1.205l1.582-1.13c.616-.439.924-.659 1.09-.982S8 16.927 8 16.171V7.83c0-.757 0-1.135-.166-1.458-.166-.324-.474-.543-1.09-.983l-1.582-1.13c-1.385-.99-2.077-1.484-2.62-1.205C2 3.334 2 4.184 2 5.887" />
    </g>
    <path
      fillRule="evenodd"
      d="M12 22.75a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75m0-8a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75m0-8a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFlipHorizontal;