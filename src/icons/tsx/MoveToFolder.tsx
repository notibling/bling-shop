import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoveToFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95v7.3l.006 1.5c.027 2.636.191 4.104 1.166 5.078C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14"
      opacity={0.5}
    />
    <path d="M9.316 11.394a.75.75 0 0 0-.882 1.213l2.26 1.643H2l.006 1.5h8.688l-2.26 1.643a.75.75 0 0 0 .882 1.214l4.125-3a.75.75 0 0 0 0-1.213z" />
  </svg>
);
export default SvgMoveToFolder;
