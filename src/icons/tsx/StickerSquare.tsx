import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStickerSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 15c-.584 0-1.076 0-1.5.008-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045C15 20.924 15 21.416 15 22q.725-.001 1.41-.142l.048-.01h.004l.038-.01a7.01 7.01 0 0 0 5.339-5.338q.16-.726.161-1.5" />
    <path
      d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 1.128 0 2.122-.02 3-.575 0-1.06 0-1.48.008-.928.016-1.528.069-2.045.237a5 5 0 0 0-3.21 3.21c-.168.517-.22 1.117-.237 2.045-.008.42-.008.905-.008 1.48-.878.02-1.872.02-3 .02"
      opacity={0.5}
    />
  </svg>
);
export default SvgStickerSquare;
