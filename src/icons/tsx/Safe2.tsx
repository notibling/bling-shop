import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSafe2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12.75 8.837v1.041a2.25 2.25 0 0 1 1.495 2.268l.958.41a3.251 3.251 0 0 0-2.453-3.72M11.25 8.837a3.25 3.25 0 0 0-2.453 3.72l.958-.41a2.25 2.25 0 0 1 1.495-2.268zM14.611 13.935l-.957-.41c-.41.446-1 .725-1.654.725s-1.243-.28-1.654-.725l-.957.41A3.25 3.25 0 0 0 12 15.25c1.07 0 2.02-.517 2.611-1.315" />
    <path
      fillRule="evenodd"
      d="M13.055 4.25h-2.11c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.278.278-.482.59-.634.933A.75.75 0 0 0 3.75 7v3a.75.75 0 0 0 .5.707v2.586a.75.75 0 0 0-.5.707v3a.75.75 0 0 0 .964.72c.151.342.356.654.634.932.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h2.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-2.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117M7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.481.786h2.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v2.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982a3 3 0 0 1-.634-.933A.75.75 0 0 1 3.75 17v-3a.75.75 0 0 1 .5-.707v-2.586a.75.75 0 0 1-.5-.707V7a.75.75 0 0 1 .964-.72c.151-.342.356-.654.634-.932.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117"
      clipRule="evenodd"
      opacity={0.5}
    />
  </svg>
);
export default SvgSafe2;
