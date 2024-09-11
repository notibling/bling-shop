import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStickerCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="m21.242 13.708-7.534 7.534a3 3 0 0 1-.369.312A2.33 2.33 0 0 1 12 22c0-.552 0-1.049.003-1.5.012-1.834.075-2.911.39-3.812a7 7 0 0 1 4.295-4.295c.9-.315 1.978-.378 3.812-.39C20.951 12 21.448 12 22 12c0 .486-.169.946-.446 1.34a3 3 0 0 1-.312.368" />
    <path d="M12 2c5.523 0 10 4.477 10 10-.552 0-1.049 0-1.5.003-1.834.012-2.911.075-3.812.39a7 7 0 0 0-4.295 4.295c-.315.9-.378 1.978-.39 3.812C12 20.951 12 21.448 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2" opacity={0.5} />
  </svg>
);
export default SvgStickerCircle;
