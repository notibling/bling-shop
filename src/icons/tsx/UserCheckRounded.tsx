import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserCheckRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <circle cx={12} cy={6} r={4} />
    <path
      fillRule='evenodd'
      d='M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m1.968-4.254a.583.583 0 1 0-.825-.825l-1.92 1.92-.366-.365a.583.583 0 1 0-.825.825l.778.778a.583.583 0 0 0 .825 0z'
      clipRule='evenodd'
    />
    <path d='M18.095 15.031C17.67 15 17.149 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.166 0 1.92.181 2.443Q12.605 21 12 21c-3.866 0-7-1.79-7-4s3.134-4 7-4c2.613 0 4.892.818 6.095 2.031' opacity={0.5} />
  </svg>
);
export default SvgUserCheckRounded;
