import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSdCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224 8 8 0 0 0-.483-.504l-5.167-5.167c-.247-.247-.37-.37-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12s0 7.071 1.464 8.535"
      opacity={0.5}
    />
    <path d="M13.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM10.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM7.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z" />
  </svg>
);
export default SvgSdCard;