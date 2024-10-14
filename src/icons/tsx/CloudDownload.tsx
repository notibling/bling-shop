import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloudDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      d='M6.5 18v-.09c0-.865 0-1.659.087-2.304.095-.711.32-1.463.938-2.08.618-.619 1.37-.844 2.08-.94.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087.711.095 1.463.32 2.08.938.619.618.844 1.37.94 2.08.085.637.086 1.416.086 2.267 2.573-.55 4.5-2.812 4.5-5.52 0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2 9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z'
      opacity={0.5}
    />
    <path
      fillRule='evenodd'
      d='M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m1.805-3.084-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCloudDownload;
