import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSkateboardingRound = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0' />
    <path
      fillRule='evenodd'
      d='M10.21 6.047a5.02 5.02 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516 3.52 3.52 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272zM2.498 16.442a.75.75 0 0 1 1.06.056l.608.676A3.25 3.25 0 0 0 6.58 18.25H17.42c.92 0 1.799-.391 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06'
      clipRule='evenodd'
    />
    <g opacity={0.5}>
      <path d='M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM11.53 14.53a.75.75 0 1 0-1.06-1.06l-.622.621c-.476.477-.577.558-.682.602s-.234.057-.909.057H7a.75.75 0 0 0 0 1.5h1.361c.51 0 .961.002 1.379-.171.417-.173.736-.493 1.095-.854l.074-.073z' />
    </g>
  </svg>
);
export default SvgSkateboardingRound;
