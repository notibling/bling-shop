import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInfinity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12"
      clipRule="evenodd"
    />
    <path
      d="M12.67 12.335a.755.755 0 0 0-.34-1.006.746.746 0 0 0-.975.284l.316-.639c.58-1.18 1.116-2.27 1.776-3.074.41-.501.89-.923 1.49-1.215S16.216 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.597 0-1.045.107-1.407.284-.362.176-.68.442-.986.816-.54.66-.983 1.558-1.567 2.741q-.175.355-.37.744"
      opacity={0.5}
    />
  </svg>
);
export default SvgInfinity;
