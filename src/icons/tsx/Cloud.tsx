import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M22 14.353C22 17.472 19.442 20 16.286 20h-5.787a7.5 7.5 0 0 1 7.487-11.853q.119.422.17.868C20.392 9.78 22 11.881 22 14.353" clipRule="evenodd" opacity={0.5} />
    <path d="M12.476 4C9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20H10.5a7.5 7.5 0 0 1 7.487-11.853l-.047-.158C17.224 5.68 15.048 4 12.476 4" />
  </svg>
);
export default SvgCloud;