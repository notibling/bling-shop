import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClapperboardOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z' opacity={0.5} />
    <path d='m13.318 8.2.6-5.034-4.71 1.262-.042.285-.604 5.064 4.719-1.264zM3.483 7.515c-.208.776.034 1.68.518 3.485L7 10.196l.039-.314.6-5.034-.103.028c-1.805.484-2.708.726-3.276 1.294a3 3 0 0 0-.777 1.345M18.248 7.182l-3.407.913.604-5.065.055-.272a3 3 0 0 1 .344-.048 3 3 0 0 1 2.887 1.666c.13.265.22.602.401 1.275.06.225.09.337.097.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134' />
  </svg>
);
export default SvgClapperboardOpen;
