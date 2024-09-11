import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCameraRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21"
      opacity={0.5}
    />
    <path d="M14.52 8.85a.75.75 0 0 1 .75.75v1.68a.75.75 0 0 1-.596.734l-1.52.32a.75.75 0 0 1-.471-1.414 2.417 2.417 0 1 0 1.719 2.595.75.75 0 0 1 1.49.17 3.918 3.918 0 1 1-2.123-3.941V9.6a.75.75 0 0 1 .75-.75" />
  </svg>
);
export default SvgCameraRotate;
