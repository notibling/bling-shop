import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWineglass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M5 4.895C5 3.848 5.848 3 6.895 3h10.21C18.152 3 19 3.848 19 4.895V8A7 7 0 1 1 5 8z" opacity={0.5} />
    <path
      fillRule="evenodd"
      d="M11.25 20.25h-3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-4.5M12 15a7 7 0 0 0 6.925-5.97c-.402.157-2.332.886-3.694.963-1.328.075-2.28-.459-3.231-.993s-1.903-1.068-3.23-.993c-1.373.078-3.32.816-3.703.966A7 7 0 0 0 12 15"
      clipRule="evenodd"
    />
    <path d="M12.75 14.96a7 7 0 0 1-1.5 0v5.29h1.5z" opacity={0.5} />
  </svg>
);
export default SvgWineglass;
