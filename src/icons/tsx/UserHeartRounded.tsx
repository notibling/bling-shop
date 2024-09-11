import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserHeartRounded = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={6} r={4} />
    <path d="M18.095 15.031C17.67 15 17.149 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.166 0 1.92.181 2.443Q12.605 21 12 21c-3.866 0-7-1.79-7-4s3.134-4 7-4c2.613 0 4.892.818 6.095 2.031" opacity={0.5} />
    <path
      fillRule="evenodd"
      d="M13.513 21.487C14.025 22 14.85 22 16.5 22s2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5s0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15s-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987m2.014-1.51C14.825 19.474 14 18.883 14 17.86c0-1.13 1.375-1.931 2.5-.845 1.125-1.087 2.5-.285 2.5.845 0 1.023-.825 1.614-1.527 2.117l-.213.154c-.26.19-.51.369-.76.369s-.5-.18-.76-.37z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserHeartRounded;
