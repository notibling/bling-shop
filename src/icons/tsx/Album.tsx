import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlbum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M17.29 11.968a1.33 1.33 0 0 1-1.322 1.338 1.33 1.33 0 0 1-1.323-1.338 1.33 1.33 0 0 1 1.323-1.337c.73 0 1.323.599 1.323 1.337" />
    <path
      fillRule="evenodd"
      d="M18.132 7.408c-.849-.12-1.942-.12-3.305-.12H9.173c-1.363 0-2.456 0-3.305.12-.877.125-1.608.392-2.152 1.02-.543.628-.71 1.396-.716 2.293-.006.866.139 1.962.319 3.328l.365 2.772c.141 1.068.255 1.933.432 2.61.185.704.457 1.288.968 1.74.51.453 1.12.649 1.834.74.687.089 1.55.089 2.615.089h4.934c1.065 0 1.928 0 2.615-.088.715-.092 1.323-.288 1.834-.74.511-.453.783-1.037.968-1.741.177-.677.291-1.542.432-2.61l.365-2.772c.18-1.366.325-2.462.319-3.328-.007-.897-.172-1.665-.716-2.293s-1.275-.895-2.152-1.02M6.052 8.732c-.726.104-1.094.292-1.34.577-.248.285-.384.679-.39 1.421-.005.761.126 1.764.315 3.195l.05.379.371-.272c.96-.703 2.376-.668 3.288.095l3.384 2.833c.32.268.871.318 1.269.084l.235-.139c1.125-.662 2.634-.592 3.672.19l1.832 1.38c.09-.495.171-1.104.273-1.875l.352-2.675c.189-1.43.32-2.434.314-3.195-.005-.742-.141-1.136-.388-1.42-.247-.286-.615-.474-1.342-.578-.745-.106-1.745-.107-3.172-.107h-5.55c-1.427 0-2.427.001-3.172.107"
      clipRule="evenodd"
    />
    <path d="M6.88 4.5c-1.252 0-2.278.84-2.62 1.954l-.021.07c.358-.12.731-.2 1.109-.253.972-.139 2.2-.139 3.628-.139h6.203c1.427 0 2.656 0 3.629.139.377.053.75.132 1.108.253l-.02-.07C19.553 5.34 18.527 4.5 17.276 4.5z" opacity={0.7} />
    <path d="M8.859 2h6.282c.21 0 .37 0 .51.015a2.62 2.62 0 0 1 2.16 1.672H6.19a2.62 2.62 0 0 1 2.16-1.672C8.49 2 8.65 2 8.858 2" opacity={0.4} />
  </svg>
);
export default SvgAlbum;
