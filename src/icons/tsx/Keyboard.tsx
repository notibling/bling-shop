import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16 5H8c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11v2c0 2.828 0 4.243.879 5.121C3.757 19 5.172 19 8 19h8c2.828 0 4.243 0 5.121-.879C22 17.243 22 15.828 22 13v-2c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5" opacity={0.5} />
    <path d="M6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17.75 16a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75" />
  </svg>
);
export default SvgKeyboard;
