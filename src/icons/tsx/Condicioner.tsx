import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCondicioner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 2h12c1.886 0 2.828 0 3.414.586S22 4.114 22 6v3c0 2.828 0 4.243-.879 5.121-.53.531-1.258.742-2.374.825-.005-.67-.02-1.402-.059-1.692-.066-.492-.215-.963-.597-1.345s-.854-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062H8.951c-.665 0-1.238 0-1.697.062-.491.066-.963.215-1.345.597s-.531.853-.597 1.345c-.04.29-.054 1.023-.059 1.692-1.116-.083-1.843-.294-2.374-.825C2 13.243 2 11.828 2 9V6c0-1.886 0-2.828.586-3.414S4.114 2 6 2m-.75 6.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0-2.5A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18.747 14.946H5.253c.005-.67.02-1.402.059-1.692.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h6.098c.665 0 1.238 0 1.697.062.492.066.963.215 1.345.597s.531.853.597 1.345c.04.29.054 1.023.059 1.692"
      opacity={0.5}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.23.23 0 0 0 .043.267 1.73 1.73 0 0 1 .324 1.998l-.183.368a.75.75 0 0 1-1.342-.671l.184-.368a.23.23 0 0 0-.044-.267 1.73 1.73 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336m11 .001a.75.75 0 0 1 .336 1.006l-.184.367a.23.23 0 0 0 .043.267 1.73 1.73 0 0 1 .324 1.998l-.183.368a.75.75 0 1 1-1.342-.671l.184-.368a.23.23 0 0 0-.044-.267 1.73 1.73 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336m-5.419.047a.75.75 0 0 1 .208 1.04l-.307.46a.57.57 0 0 0 .133.774 2.07 2.07 0 0 1 .48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.57.57 0 0 0-.132-.774 2.07 2.07 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208"
      clipRule="evenodd"
      opacity={0.5}
    />
  </svg>
);
export default SvgCondicioner;