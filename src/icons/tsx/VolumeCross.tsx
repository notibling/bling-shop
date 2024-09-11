import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVolumeCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21.78 3.53a.75.75 0 0 0-1.06-1.06l-4.45 4.449a11 11 0 0 0-.193-1.39c-.172-.788-.477-1.473-1.116-1.923a3 3 0 0 0-.769-.39c-.818-.28-1.631-.057-2.457.345-.814.395-1.8 1.046-3.032 1.857l-.267.176c-.447.295-.602.394-.76.464q-.257.115-.535.16c-.171.03-.354.032-.89.032h-.162c-1.217 0-2.062-.001-2.814.347A3.96 3.96 0 0 0 1.548 8.22c-.392.729-.438 1.491-.504 2.575l-.008.13C1.014 11.294 1 11.658 1 12s.014.706.036 1.074l.008.13c.066 1.084.112 1.846.504 2.575a3.96 3.96 0 0 0 1.727 1.624c.61.283 1.283.336 2.166.345L2.72 20.47a.75.75 0 1 0 1.06 1.06z" />
    <g opacity={0.4}>
      <path d="m16.238 9.072-8.624 8.624c.396.475 1.412 1.118 1.725 1.304 1.039.68 1.899 1.225 2.631 1.55.743.328 1.48.488 2.222.235.272-.093.534-.226.769-.391.706-.496 1.005-1.28 1.167-2.18.159-.884.213-2.056.281-3.516l.003-.058c.052-1.115.088-2.088.088-2.64v-.108c.003-.567.012-2.43-.262-2.82M20.515 6.317a.75.75 0 0 1 .992.375c.467 1.035.993 2.768.993 5.308 0 2.192-.392 3.783-.8 4.844-.204.53-.41.925-.572 1.195a5 5 0 0 1-.289.425l-.007.01-.003.003-.002.002-.576-.478.575.48a.75.75 0 0 1-1.156-.956l.004-.005.01-.013.02-.028q.047-.063.137-.212c.12-.198.288-.516.459-.961.342-.889.7-2.297.7-4.306 0-2.326-.48-3.849-.86-4.691a.75.75 0 0 1 .375-.992M19.3 9.848a.75.75 0 1 0-1.468.305c.089.426.168 1.034.168 1.847 0 .99-.118 1.677-.227 2.101a4 4 0 0 1-.179.534l-.005.01a.75.75 0 0 0 1.317.72L18.25 15l.655.362.001-.001.002-.003.004-.008.01-.018.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631.14-.551.273-1.364.273-2.474 0-.91-.089-1.622-.2-2.152" />
    </g>
  </svg>
);
export default SvgVolumeCross;
