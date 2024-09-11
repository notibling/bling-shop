import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBatteryHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity={0.5} />
    <path d="M19.491 14c.009-.6.009-1.264.009-2 0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363.001.002.002.003.004.007.01.018.026.053q.03.064.076.175c.058.147.131.356.202.631.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.202.631 3 3 0 0 1-.103.228l-.01.018-.003.008-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01q.01-.021.038-.087c.035-.087.087-.234.142-.447.108-.424.226-1.111.226-2.1s-.118-1.678-.226-2.102a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01M11.156 8.636a.75.75 0 0 0-1.317.72l.005.01q.01.02.038.086c.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363.001-.001.002-.003.004-.008.01-.018.026-.053q.03-.064.076-.175c.059-.147.131-.356.202-.631.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.202-.631 3 3 0 0 0-.103-.228l-.01-.018-.003-.007-.002-.003v-.002z" />
  </svg>
);
export default SvgBatteryHalf;