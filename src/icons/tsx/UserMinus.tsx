import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
    <path
      d="M14.477 21.92c-.726.053-1.547.08-2.477.08-8 0-8-2.015-8-4.5S7.582 13 12 13c2.88 0 5.406.856 6.814 2.141C18.298 15 17.574 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987c.237.238.542.365.964.434"
      opacity={0.5}
    />
    <path
      fillRule="evenodd"
      d="M13.513 21.487C14.025 22 14.85 22 16.5 22s2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5s0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15s-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987m2.404-3.57h-.973a.583.583 0 1 0 0 1.166h3.112a.583.583 0 1 0 0-1.166h-2.139"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserMinus;