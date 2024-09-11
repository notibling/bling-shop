import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStarRainbow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16.946 2.847c1.408-.697 2.112-1.046 2.589-.73.475.317.408 1.09.272 2.634l-.035.4c-.038.439-.057.659.011.857.07.2.218.355.515.667l.271.284c1.048 1.097 1.571 1.646 1.399 2.208-.173.562-.927.765-2.436 1.172l-.39.105c-.43.116-.644.173-.815.308-.171.134-.28.33-.496.72l-.197.356c-.761 1.376-1.142 2.064-1.724 2.094-.583.031-.982-.616-1.779-1.909l-.206-.335c-.227-.367-.34-.55-.514-.667-.175-.116-.39-.151-.822-.221l-.392-.064c-1.518-.247-2.277-.37-2.464-.914-.188-.543.32-1.146 1.337-2.352l.262-.312c.29-.343.434-.514.497-.72s.038-.423-.012-.857l-.046-.396c-.177-1.528-.265-2.292.202-2.658s1.18-.093 2.605.455l.368.142c.405.156.608.234.821.222.214-.01.414-.11.814-.308z" />
    <g opacity={0.5}>
      <path d="M9.045 11.32C5.99 13.27 3.27 16.796 2.09 20.032 1.708 21.082 2.59 22 3.717 22H4.75c0-.35.082-.787.204-1.244.125-.471.305-1.014.53-1.595a26 26 0 0 1 1.852-3.796c.763-1.281 1.67-2.529 2.665-3.466l.074-.07-.069-.021a3.1 3.1 0 0 1-.961-.488M12.02 12.217q-.48.292-.99.774c-.857.807-1.682 1.927-2.405 3.141a24 24 0 0 0-1.742 3.57c-.21.543-.372 1.033-.48 1.439-.11.419-.153.705-.153.86h2.833c0-1.125.39-3.207 1.094-5.293.517-1.53 1.233-3.153 2.155-4.44zM13.298 13.513c-.675 1.044-1.25 2.345-1.7 3.675-.678 2.008-1.015 3.916-1.015 4.812h1.289c1.126 0 2.032-.906 2.107-2.02.13-1.914.425-3.64.762-4.866a3.1 3.1 0 0 1-.782-.677 9 9 0 0 1-.66-.924" />
    </g>
  </svg>
);
export default SvgStarRainbow;