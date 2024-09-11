import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLamp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M4.968 7.445c.609-2.346.913-3.519 1.7-4.294a4 4 0 0 1 .756-.585C8.372 2 9.584 2 12.007 2s3.634 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.699 4.294l.084.324c.828 3.189 1.242 4.783.49 5.903a3 3 0 0 1-.247.319c-.285.322-.648.541-1.116.69-.596.146-1.246.23-1.497.254-.849.065-1.904.065-3.223.065h-3.059c-3.294 0-4.941 0-5.836-1.01q-.135-.15-.247-.318c-.752-1.12-.338-2.714.49-5.903z"
      clipRule="evenodd"
    />
    <path d="m16.759 14.935-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c-.596.145-1.246.23-1.497.253" opacity={0.5} />
    <path fillRule="evenodd" d="M11.256 21.25V15h1.5v6.25z" clipRule="evenodd" opacity={0.5} />
    <path d="M11.256 21.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-3.75" />
  </svg>
);
export default SvgLamp;
