import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      d='m10.091 11.963 9.273-3.332L21 7.952v-.46c0-1.12 0-2.059-.088-2.807a7 7 0 0 0-.043-.31c-.084-.51-.234-.988-.522-1.386a2.2 2.2 0 0 0-.676-.617l-.009-.005c-.771-.461-1.639-.428-2.532-.224-.864.198-1.935.6-3.25 1.095l-2.284.859c-.615.231-1.137.427-1.546.63-.436.216-.811.471-1.093.851s-.398.79-.452 1.234c-.05.418-.05.926-.05 1.525v4.265z'
      clipRule='evenodd'
    />
    <g opacity={0.5}>
      <path d='M8.455 16.13a3.8 3.8 0 0 0-1.91-.5C4.587 15.63 3 17.056 3 18.815S4.587 22 6.545 22c1.959 0 3.546-1.426 3.546-3.185v-6.852l-1.636.638zM19.364 8.63v5.54a3.8 3.8 0 0 0-1.91-.5c-1.958 0-3.545 1.426-3.545 3.185s1.587 3.185 3.545 3.185c1.959 0 3.546-1.426 3.546-3.185V7.952z' />
    </g>
  </svg>
);
export default SvgMusicNote;
