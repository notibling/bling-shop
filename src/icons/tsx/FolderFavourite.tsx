import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFolderFavourite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18 10.853V6h-4v4.853c0 .29 0 .435.095.494s.224-.007.484-.136l1.242-.622c.088-.043.132-.065.179-.065s.091.022.179.065l1.242.622c.26.13.39.194.484.136.095-.06.095-.204.095-.494" />
    <path
      d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"
      opacity={0.5}
    />
  </svg>
);
export default SvgFolderFavourite;
