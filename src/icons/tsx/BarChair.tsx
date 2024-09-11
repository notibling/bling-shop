import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarChair = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M5.46 6.733a4 4 0 0 1 3.295-4.425l.373-.064a17 17 0 0 1 5.745 0l.373.064a4 4 0 0 1 3.295 4.425l-.017.14a1 1 0 0 1-.993.879H6.469a1 1 0 0 1-.992-.88z" clipRule="evenodd" />
    <path d="M8.233 7.752 5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314L15.766 7.752H14.25q0 .078.017.157L16 16.002H7.999l1.735-8.093a.8.8 0 0 0 .016-.157z" opacity={0.5} />
  </svg>
);
export default SvgBarChair;
