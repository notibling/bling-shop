import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBanknote2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8.506 10.714c0-.92.755-1.666 1.686-1.666.932 0 1.687.746 1.687 1.666s-.755 1.667-1.687 1.667a1.677 1.677 0 0 1-1.686-1.667" />
    <path
      fillRule="evenodd"
      d="M2 10.714c0-2.693 0-4.04.847-4.877S5.057 5 7.783 5h4.82c2.725 0 4.088 0 4.935.837s.847 2.184.847 4.877c0 2.694 0 4.041-.847 4.878s-2.21.837-4.936.837H7.783c-2.726 0-4.09 0-4.936-.837S2 13.408 2 10.714m5.06 0c0-1.71 1.402-3.095 3.132-3.095s3.133 1.386 3.133 3.095-1.402 3.096-3.133 3.096c-1.73 0-3.132-1.386-3.132-3.096M4.168 12.62c0 .395.324.715.723.715.4 0 .723-.32.723-.715V8.81a.72.72 0 0 0-.723-.714c-.399 0-.723.32-.723.715zm11.326.715c-.4 0-.723-.32-.723-.715V8.81c0-.394.323-.714.723-.714s.722.32.722.715v3.81a.72.72 0 0 1-.722.714"
      clipRule="evenodd"
    />
    <path
      d="M4.065 16.225q.02.225.048.434c.116.857.366 1.579.946 2.152q.124.123.257.226c.565.514 1.266.742 2.09.851.835.111 1.898.111 3.216.111h4.925c1.318 0 2.38 0 3.216-.111.868-.115 1.598-.362 2.178-.935s.83-1.295.947-2.152c.112-.826.112-1.876.112-3.178v-.105c0-1.302 0-2.352-.112-3.178-.117-.857-.366-1.579-.947-2.152a3 3 0 0 0-.256-.226c-.566-.514-1.266-.742-2.09-.851a9 9 0 0 0-.41-.045c.2.834.2 1.984.2 3.648 0 2.694 0 4.04-.847 4.878-.847.836-2.21.836-4.936.836h-4.82c-1.7 0-2.871 0-3.717-.203"
      opacity={0.5}
    />
  </svg>
);
export default SvgBanknote2;