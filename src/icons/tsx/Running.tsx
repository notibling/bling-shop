import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRunning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
    <path
      fillRule="evenodd"
      d="M9.802 5.93a4 4 0 0 1 .721-.043q.12.006.273.02c2.383.248 4.15 2.036 5.328 3.802l.063.094a3.25 3.25 0 0 0 2.704 1.447h1.86a.75.75 0 0 1 0 1.5h-1.86a4.75 4.75 0 0 1-3.952-2.115l-.063-.094A11 11 0 0 0 14 9.39l-1.884 2.355c-.427.534-.714.894-.907 1.19-.187.286-.24.445-.255.566-.023.2.002.403.073.591.044.114.135.256.386.487.26.24.626.518 1.172.93l.095.073c.72.546 1.22.924 1.566 1.428.196.287.351.6.462.93.193.58.193 1.206.193 2.11V22a.75.75 0 1 1-1.5 0v-1.83c0-1.07-.01-1.435-.116-1.755a2.3 2.3 0 0 0-.277-.558c-.19-.278-.476-.505-1.33-1.152l-.028-.021c-.51-.386-.933-.707-1.252-1.001-.333-.307-.611-.635-.772-1.056a2.75 2.75 0 0 1-.162-1.3c.053-.448.242-.835.49-1.214.237-.362.57-.778.968-1.277l1.984-2.479c-.687-.523-1.444-.871-2.263-.956a3 3 0 0 0-.185-.014 2.5 2.5 0 0 0-.45.03c-1.065.148-2.132.74-4.45 2.057l-1.436.815a.75.75 0 1 1-.741-1.304l1.435-.815.153-.087c2.119-1.204 3.448-1.96 4.834-2.151"
      clipRule="evenodd"
    />
    <path
      d="M9.23 16.424a.75.75 0 0 1 .096 1.056l-1 1.201-.097.116c-.642.772-1.113 1.338-1.771 1.646s-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096"
      opacity={0.5}
    />
  </svg>
);
export default SvgRunning;
