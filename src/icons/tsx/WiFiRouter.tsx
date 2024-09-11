import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWiFiRouter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M2.586 12.336C2 12.922 2 13.864 2 15.75s0 2.828.586 3.414 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414-1.528-.586-3.414-.586H6c-1.886 0-2.828 0-3.414.586M6 16.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
    <path d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H7.86l-.209-.372zM20.349 4.378a.75.75 0 1 1 1.302.744l-3.787 6.628H16.14l.209-.372z" opacity={0.5} />
    <path fillRule="evenodd" d="M12.084 3.5a4.75 4.75 0 0 0-4.39 2.934.75.75 0 1 1-1.387-.574 6.252 6.252 0 0 1 11.553 0 .75.75 0 0 1-1.386.574 4.75 4.75 0 0 0-4.39-2.934" clipRule="evenodd" opacity={0.4} />
    <path fillRule="evenodd" d="M12.085 6a2.25 2.25 0 0 0-2.16 1.618.75.75 0 0 1-1.44-.42 3.751 3.751 0 0 1 7.2 0 .75.75 0 0 1-1.44.42A2.25 2.25 0 0 0 12.085 6" clipRule="evenodd" opacity={0.7} />
    <path d="M13.084 7.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgWiFiRouter;
