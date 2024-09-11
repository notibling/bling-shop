import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotificationRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47 1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <path
      d="M20.536 20.536C22 19.07 22 16.714 22 12c0-1.358 0-2.52-.035-3.522-.058.884-.213 1.452-.624 1.863-.659.659-1.72.659-3.841.659s-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841c.411-.411.979-.566 1.863-.624C14.52 2 13.358 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465"
      opacity={0.5}
    />
  </svg>
);
export default SvgNotificationRemove;
