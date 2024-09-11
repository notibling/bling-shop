import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c4.836 0 8.757-3.884 8.757-8.675 0-4.79-3.92-8.674-8.757-8.674s-8.757 3.883-8.757 8.674S7.163 22 12 22" opacity={0.5} />
    <path d="M12 8.747c.403 0 .73.324.73.723v3.556l2.218 2.198a.72.72 0 0 1 0 1.022.734.734 0 0 1-1.032 0l-2.432-2.41a.72.72 0 0 1-.214-.51V9.47c0-.4.327-.723.73-.723" />
    <path
      fillRule="evenodd"
      d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23M15.76 2.34a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlarm;
