import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801.598 1.015 1.674 1.58 3.825 2.709z" />
    <path fill="currentColor" d="m17.577 4.432-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" opacity={0.7} />
    <path fill="currentColor" d="m21.403 7.14-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802" opacity={0.5} />
    <path
      fill="currentColor"
      d="m6.323 4.484.1-.052 1.493-.784 9.1 5.005 4.025-2.011q.205.232.362.498c.15.254.262.524.346.825L17.75 9.964V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44A3 3 0 0 1 12 22c-.248 0-.493-.032-.75-.096v-9.44l-8.998-4.5c.084-.3.196-.57.346-.824a3 3 0 0 1 .362-.498l9.04 4.52 3.387-1.693z"
    />
  </svg>
);
export default SvgBox;
