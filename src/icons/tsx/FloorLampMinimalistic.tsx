import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFloorLampMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M8.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
    <path d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8" />
    <path d="M12 2c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2" opacity={0.5} />
    <path d="m6.455 11.98.067-.09a3.12 3.12 0 0 0 .107-3.497c-.305-.48-.968-.398-1.318.05L2.78 11.684c-.35.448-.274 1.118.26 1.305 1.2.42 2.585.055 3.416-1.01" />
    <path
      d="M12 8q.383 0 .75-.045V21.25h-1.5v-3.347a3.39 3.39 0 0 0-1.295-2.636l-3.9-2.863a3.1 3.1 0 0 0 .856-1.233l3.94 2.893.012.009q.204.158.387.334V7.955Q11.617 8 12 8M2.439 8.786a2.033 2.033 0 0 1 2.872-.343L2.78 11.684a2.076 2.076 0 0 1-.34-2.898"
      opacity={0.5}
    />
  </svg>
);
export default SvgFloorLampMinimalistic;