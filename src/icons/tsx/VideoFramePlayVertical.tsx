import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVideoFramePlayVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464'
      clipRule='evenodd'
      opacity={0.5}
    />
    <path d='M14 12c0-.528-.53-.884-1.589-1.596-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12M6.25 6.25H2.22c.195-1.223.56-2.101 1.243-2.785.684-.685 1.563-1.05 2.786-1.243zM21.778 6.25c-.194-1.223-.559-2.101-1.243-2.785s-1.562-1.05-2.785-1.243V6.25zM22 11.25c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5zM20.535 20.536c-.684.684-1.562 1.048-2.785 1.242V17.75h4.028c-.194 1.223-.559 2.102-1.243 2.786M22 12.75c-.002 1.366-.01 2.519-.069 3.5H17.75v-3.5zM6.25 17.75v4.028c-1.223-.194-2.102-.558-2.786-1.242s-1.048-1.563-1.243-2.786zM6.25 16.25H2.069C2.01 15.269 2 14.116 2 12.75h4.25zM6.25 11.25H2c.001-1.366.01-2.519.068-3.5H6.25z' />
  </svg>
);
export default SvgVideoFramePlayVertical;
