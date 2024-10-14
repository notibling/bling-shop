import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCodeFile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105-.847-.114-1.694-.375-2.385-1.066-.692-.692-.953-1.539-1.067-2.386-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2 6.239 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22'
      clipRule='evenodd'
      opacity={0.5}
    />
    <path d='M10.702 14.264a.75.75 0 1 0-1.404-.527l-1.5 4a.75.75 0 1 0 1.404.527zM7.53 14.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06l1 1a.75.75 0 0 0 1.06-1.06L7.06 15zM12.03 15.47a.75.75 0 1 0-1.06 1.06l.47.47-.47.47a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06zM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848.114.847.375 1.694 1.067 2.385.69.691 1.538.953 2.385 1.067.781.105 1.751.105 2.848.105h4.052q.02.232.028.5H22c0-.268 0-.402-.01-.56a5.3 5.3 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.161-.832-.556-1.248-.834-1.819-1.04a6 6 0 0 0-.506-.154c-.384-.095-.758-.128-1.285-.14z' />
  </svg>
);
export default SvgCodeFile;
