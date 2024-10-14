import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPills = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='m10.01 13.109-.495.095-1.923-1.923a5.437 5.437 0 1 1 7.69-7.689l1.922 1.923-.096.495-.001.009-.013.054a4 4 0 0 1-.07.244c-.07.22-.19.545-.385.948-.388.806-1.076 1.923-2.264 3.11-1.188 1.189-2.304 1.876-3.11 2.265-.403.194-.73.314-.948.383a4 4 0 0 1-.298.084zm3.52-8.64a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 1 0 1.06-1.06z'
      clipRule='evenodd'
    />
    <path d='m20.408 8.718-1.953-1.952-.003.008c-.09.28-.235.672-.462 1.143-.454.943-1.236 2.201-2.554 3.52s-2.577 2.1-3.52 2.554a9 9 0 0 1-1.143.461l-.007.003 1.953 1.952a5.437 5.437 0 1 0 7.688-7.689' />
    <path d='M6.717 10.138c.234.409.526.794.875 1.143l5.127 5.126c.349.35.734.642 1.143.876a6 6 0 0 1-1.62 2.96 6 6 0 1 1-5.526-10.105' opacity={0.5} />
  </svg>
);
export default SvgPills;
