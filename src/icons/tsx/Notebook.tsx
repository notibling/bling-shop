import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotebook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M12 5.214c-.684 0-1.057-.161-1.718-.339C8.938 4.515 8.05 3.765 7 3.487c-.887-.234-2.041-.352-3.018-.412C2.886 3.007 2 3.9 2 4.998v11.146c0 1.11.906 2.01 2.015 2.079.97.06 2.108.179 2.985.41.486.129 1.216.431 1.873.726 1.005.451 1.84 1.034 3.127 1.034s2.123-.583 3.127-1.034c.657-.295 1.387-.597 1.873-.726.877-.231 2.016-.35 2.985-.41 1.109-.07 2.015-.968 2.015-2.08V4.999c0-1.098-.886-1.99-1.982-1.923-.977.06-2.131.178-3.018.412-1.05.277-1.938 1.028-3.282 1.388-.66.178-1.034.339-1.718.339'
      opacity={0.5}
    />
    <path d='M4.273 12.818a.75.75 0 0 1 .91-.545l4 1a.75.75 0 1 1-.365 1.455l-4-1a.75.75 0 0 1-.545-.91M5.182 8.273a.75.75 0 1 0-.364 1.455l4 1a.75.75 0 0 0 .364-1.455zM19.727 12.818a.75.75 0 0 0-.91-.545l-4 1a.75.75 0 0 0 .365 1.455l4-1a.75.75 0 0 0 .545-.91M18.818 8.273a.75.75 0 1 1 .364 1.455l-4 1a.75.75 0 0 1-.364-1.455z' />
  </svg>
);
export default SvgNotebook;
