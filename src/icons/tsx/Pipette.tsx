import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPipette = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="m10.241 5.753 1.092 1.092 5.822 5.822 1.092 1.092a1.544 1.544 0 0 0 2.183-2.184l-1.091-1.091 1.455-1.456a4.117 4.117 0 1 0-5.822-5.822L13.516 4.66 12.425 3.57a1.544 1.544 0 1 0-2.184 2.183" />
    <path
      d="M4.709 13.469c-.456.456-.684.684-.829.957a2 2 0 0 0-.203.58c-.058.304-.022.624.049 1.265l.053.476c.02.175.029.262.031.346a2.06 2.06 0 0 1-.488 1.392 5 5 0 0 1-.241.25l-.629.63a1.544 1.544 0 1 0 2.184 2.183l.628-.629c.125-.124.187-.187.25-.24.389-.33.885-.504 1.393-.49.084.003.171.013.346.032l.476.053c.64.071.961.107 1.265.05q.305-.06.58-.204c.273-.145.501-.373.957-.829l1.439-1.439 1.06-1.06.94-.94 1.06-1.06 2.125-2.125-5.822-5.822z"
      opacity={0.5}
    />
    <path d="m12.116 14 1.854 1.852 1.06-1.06-1.853-1.854A.75.75 0 1 0 12.117 14M10.116 16l1.854 1.852 1.06-1.06-1.853-1.854A.75.75 0 1 0 10.117 16" />
  </svg>
);
export default SvgPipette;
