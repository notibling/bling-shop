import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVirus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M19 12.057A6.865 6.865 0 0 1 12.057 19C8.19 18.969 5.03 15.81 5 11.944A6.865 6.865 0 0 1 11.944 5c3.865.031 7.025 3.19 7.056 7.057m-4.5-1.807a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.25 9a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
    <path d="M13.25 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" opacity={0.5} />
    <circle cx={19.5} cy={4.5} r={1.5} />
    <path d="m18.05 4.889-1.63 1.63a1 1 0 0 0-.064.072 7.2 7.2 0 0 1 1.053 1.053 1 1 0 0 0 .071-.064l1.631-1.63a1.5 1.5 0 0 1-1.06-1.061" opacity={0.5} />
    <circle r={1.5} transform="matrix(1 0 0 -1 18.55 19.55)" />
    <path
      d="m9.63 18.55.248.7a2.25 2.25 0 0 0 4.244 0l.216-.613a7.043 7.043 0 0 1-4.708-.087M5.113 10.63a1.5 1.5 0 1 0 .04 2.72 7.1 7.1 0 0 1-.04-2.72M18.863 13.494a7.066 7.066 0 0 0-.047-2.983q.09-.01.184-.011a1.5 1.5 0 1 1-.137 2.994M13.35 5.153a1.5 1.5 0 1 0-2.72-.04 7.066 7.066 0 0 1 2.72.04"
      opacity={0.5}
    />
    <path d="M17.1 19.161 15.85 17.91a7 7 0 0 0 1.17-.95l1.142 1.142a1.5 1.5 0 0 0-1.06 1.06" />
    <circle r={2} transform="matrix(-1 0 0 1 4 4)" />
    <path d="M4.781 5.842a2 2 0 0 0 1.06-1.06l1.69 1.688.037.04q-.587.471-1.058 1.058l-.04-.038z" opacity={0.5} />
    <circle cx={5} cy={20} r={2} transform="rotate(-180 5 20)" />
    <path d="m5.816 18.173 1.269-1.269q.535.536 1.171.95l-1.4 1.4a2 2 0 0 0-1.04-1.08" opacity={0.5} />
  </svg>
);
export default SvgVirus;