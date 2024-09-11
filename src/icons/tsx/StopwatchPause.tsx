import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStopwatchPause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
    <path d="M12 23a9 9 0 1 0 0-18 9 9 0 0 0 0 18" opacity={0.5} />
    <path d="M11 16.5v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 10 9.966 10 9.5 10s-.699 0-.883.076a1 1 0 0 0-.54.541C8 10.801 8 11.034 8 11.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883M16 16.5v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 10 14.966 10 14.5 10s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883" />
  </svg>
);
export default SvgStopwatchPause;
