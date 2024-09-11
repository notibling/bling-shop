import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStopwatchPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
    <path d="M12 23a9 9 0 1 0 0-18 9 9 0 0 0 0 18" opacity={0.5} />
    <path d="M13.026 11.275a15 15 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617-.48.36-.524 1.116-.612 2.628-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.267.612 2.628.481.361 1.018.035 2.09-.617.278-.169.547-.341.784-.508.27-.19.565-.418.862-.66C14.963 15.188 15.5 14.75 15.5 14s-.537-1.188-1.612-2.065c-.297-.242-.591-.47-.862-.66" />
  </svg>
);
export default SvgStopwatchPlay;
