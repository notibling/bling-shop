import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserMinusRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={6} r={4} />
    <path
      fillRule="evenodd"
      d="M13.513 21.487C14.025 22 14.85 22 16.5 22s2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5s0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15s-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987m2.404-3.57h-.973a.583.583 0 1 0 0 1.166h3.112a.583.583 0 1 0 0-1.166h-2.139"
      clipRule="evenodd"
    />
    <path d="M18.095 15.031C17.67 15 17.149 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.166 0 1.92.181 2.443Q12.605 21 12 21c-3.866 0-7-1.79-7-4s3.134-4 7-4c2.613 0 4.892.818 6.095 2.031" opacity={0.5} />
  </svg>
);
export default SvgUserMinusRounded;
