import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudSnowfall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M12.001 14.25a.75.75 0 0 1 .75.75v2.163l1.873-1.081a.75.75 0 1 1 .75 1.299l-1.873 1.081 1.876 1.083a.75.75 0 0 1-.75 1.3L12.75 19.76V22a.75.75 0 1 1-1.5 0v-2.239l-1.876 1.083a.75.75 0 0 1-.75-1.299l1.876-1.083-1.873-1.081a.75.75 0 0 1 .75-1.3l1.873 1.082V15a.75.75 0 0 1 .75-.75'
      clipRule='evenodd'
    />
    <path
      d='M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3 9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z'
      opacity={0.5}
    />
  </svg>
);
export default SvgCloudSnowfall;
