import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16.625 7.875c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75M16.625 16.875c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75" />
    <path fillRule="evenodd" d="M20.625 23.125a.75.75 0 0 1-.75-.75v-20a.75.75 0 0 1 1.5 0v20a.75.75 0 0 1-.75.75" clipRule="evenodd" opacity={0.5} />
  </svg>
);
export default SvgAlignRight;