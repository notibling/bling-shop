import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRepeatOneMinimalistic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M8.716 3.203a.7.7 0 0 1 .987 0l1.86 1.846c.2.198.26.496.151.754a.7.7 0 0 1-.644.428H9.21C5.997 6.23 3.394 8.814 3.394 12S6 17.77 9.21 17.77h.464c.386 0 .698.31.698.692a.695.695 0 0 1-.698.692H9.21C5.228 19.154 2 15.95 2 12s3.228-7.154 7.21-7.154h.175l-.669-.664a.69.69 0 0 1 0-.98M13.628 5.538c0-.382.312-.692.698-.692h.465C18.772 4.846 22 8.05 22 12s-3.228 7.154-7.21 7.154h-.175l.669.664a.69.69 0 0 1 0 .98.7.7 0 0 1-.987 0l-1.86-1.847a.69.69 0 0 1-.151-.754.7.7 0 0 1 .644-.428h1.86c3.212 0 5.815-2.583 5.815-5.769s-2.603-5.77-5.814-5.77h-.465a.695.695 0 0 1-.698-.692"
      clipRule="evenodd"
    />
    <path d="M5.488 12c0-2.04 1.666-3.692 3.721-3.692h5.582c2.055 0 3.72 1.653 3.72 3.692s-1.665 3.692-3.72 3.692H9.209c-2.055 0-3.72-1.653-3.72-3.692" opacity={0.5} />
  </svg>
);
export default SvgRepeatOneMinimalistic;