import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='M13.086 5.041 2.332 10.36a.75.75 0 0 1-.665-1.344l12.428-6.146.145 1.01a1 1 0 0 0 .04.133c.042.125.126.334.284.624.318.58.937 1.484 2.127 2.674s2.093 1.808 2.673 2.126c.29.158.5.242.624.284q.093.032.123.037l.01.002 1.01.145-6.146 12.428a.75.75 0 1 1-1.344-.664l5.318-10.754a7 7 0 0 1-.316-.163c-.619-.339-1.45-.907-2.474-1.86L5.53 19.531a.75.75 0 0 1-1.06-1.061L15.109 7.83c-.953-1.023-1.521-1.855-1.86-2.473a7 7 0 0 1-.163-.316'
      clipRule='evenodd'
      opacity={0.5}
    />
    <path d='m20.824 10.527.307-.622-1.01-.145-.01-.002a1 1 0 0 1-.123-.037 4 4 0 0 1-.624-.285c-.58-.318-1.484-.937-2.673-2.126-1.19-1.19-1.809-2.093-2.126-2.673-.16-.29-.243-.5-.285-.624a2 2 0 0 1-.037-.124l-.002-.01-.145-1.01-.626.31a5.225 5.225 0 0 1 7.354 7.348M18.314 12.217l.645-1.303a7 7 0 0 1-.316-.162c-.618-.34-1.45-.908-2.473-1.86l-2.52 2.519a5.23 5.23 0 0 0 4.664.806M12.59 10.35l2.519-2.519c-.953-1.023-1.521-1.855-1.86-2.474a7 7 0 0 1-.163-.315l-1.304.645a5.23 5.23 0 0 0 .808 4.663' />
  </svg>
);
export default SvgSatellite;
