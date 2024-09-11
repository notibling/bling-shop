import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBodyShape = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M21.836 17.462c-.443-1.047-1.022-2-1.536-2.844-.184-.304-.36-.593-.518-.868H4.218c-.158.275-.334.564-.518.867-.514.846-1.093 1.798-1.536 2.845A11.4 11.4 0 0 0 1.25 22a.75.75 0 0 0 1.5 0c0-1.49.29-2.696.709-3.744 5.394.147 7.46 2.871 7.83 3.981a.75.75 0 0 0 1.422 0c.37-1.11 2.436-3.834 7.83-3.98A9.9 9.9 0 0 1 21.25 22a.75.75 0 0 0 1.5 0c0-1.816-.38-3.28-.914-4.538" />
    <path
      d="M4.69 1.706a.75.75 0 1 0-1.38.589l.001.001.004.009.015.036.06.148a32.374 32.374 0 0 1 .892 2.557c.493 1.633.968 3.694.968 5.526a4.9 4.9 0 0 1-.308 1.678h14.116a4.9 4.9 0 0 1-.308-1.678c0-1.832.476-3.893.968-5.526a32 32 0 0 1 .892-2.557l.06-.148.016-.036.003-.009.001-.002a.75.75 0 1 0-1.38-.587L20 2l-.69-.293-.002.004-.005.012-.018.043-.067.163a33.953 33.953 0 0 0-.936 2.684c-.48 1.595-.977 3.678-1.028 5.637H6.746c-.05-1.96-.547-4.042-1.028-5.637a34 34 0 0 0-.936-2.684l-.067-.163-.018-.043-.005-.012-.001-.003z"
      opacity={0.5}
    />
  </svg>
);
export default SvgBodyShape;
