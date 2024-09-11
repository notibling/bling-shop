import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarmRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18" opacity={0.5} />
    <path d="M15 12.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23M15.76 2.34a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarmRemove;
