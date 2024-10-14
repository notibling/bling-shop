import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeartPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width || 24} height={props.height || 24} fill='currentColor' viewBox='0 0 24 24' {...props}>
    <path d='M2 9.26c0 3.748 4.02 7.711 6.962 10.11C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63C17.981 16.972 22 13.009 22 9.26 22 3.35 16.5.663 12 5.5 7.5.663 2 3.349 2 9.26' opacity={0.5} />
    <path d='M10.093 10.746q.133-.19.23-.325c.056.098.119.211.194.348l1.71 3.11c.166.302.33.598.493.813.175.23.482.545.975.555.493.009.813-.294.996-.518.172-.208.345-.498.523-.794l.055-.092c.221-.368.36-.598.483-.765.113-.153.179-.203.228-.23.049-.028.125-.059.315-.077.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027-.311.03-.614.097-.91.264a2.2 2.2 0 0 0-.694.644c-.171.232-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377-1.709-3.108c-.154-.28-.307-.56-.463-.764-.17-.224-.462-.52-.93-.545-.467-.025-.789.237-.982.441-.177.187-.36.448-.543.71l-.31.442c-.227.325-.37.527-.493.673-.113.134-.176.178-.223.202-.046.025-.118.051-.293.067-.19.018-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024.29-.027.571-.085.85-.23.28-.145.489-.343.676-.565.173-.204.354-.463.559-.756z' />
  </svg>
);
export default SvgHeartPulse;
