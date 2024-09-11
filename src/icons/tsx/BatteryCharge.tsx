import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBatteryCharge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity={0.5} />
    <path d="M19.491 14c.009-.6.009-1.264.009-2 0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zM12.076 9.48a.75.75 0 0 0-1.152-.96l-2.5 3A.75.75 0 0 0 9 12.75h1.899l-1.475 1.77a.75.75 0 0 0 1.152.96l2.5-3a.75.75 0 0 0-.576-1.23h-1.899z" />
  </svg>
);
export default SvgBatteryCharge;
