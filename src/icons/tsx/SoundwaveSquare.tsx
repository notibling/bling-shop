import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSoundwaveSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity={0.5} />
    <path d="M12.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zM7.75 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM17.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" />
  </svg>
);
export default SvgSoundwaveSquare;
