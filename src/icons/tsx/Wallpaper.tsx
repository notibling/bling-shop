import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWallpaper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M15.721 7.349a1.86 1.86 0 1 1-3.721 0 1.86 1.86 0 0 1 3.721 0" />
    <path
      fillRule="evenodd"
      d="M16.085 2.108C15.28 2 14.253 2 12.981 2H11.02c-1.272 0-2.298 0-3.104.108-.838.113-1.543.354-2.103.914s-.8 1.265-.913 2.102c-.108.806-.108 1.832-.108 3.104v7.544c0 1.272 0 2.298.108 3.104.113.837.354 1.542.913 2.102.56.56 1.265.801 2.103.914C8.72 22 9.747 22 11.019 22h1.962c1.273 0 2.298 0 3.104-.108.838-.113 1.543-.354 2.103-.914s.8-1.265.913-2.102c.108-.806.108-1.832.108-3.104V8.228c0-1.272 0-2.298-.108-3.104-.113-.837-.354-1.542-.913-2.102-.56-.56-1.265-.801-2.103-.914m.724 14.522.986 1.04c.018-.536.019-1.175.019-1.95V8.28c0-1.336-.002-2.267-.096-2.97-.092-.683-.26-1.044-.517-1.302-.258-.257-.619-.425-1.302-.517-.702-.094-1.633-.096-2.969-.096h-1.86c-1.335 0-2.267.002-2.97.096-.682.092-1.043.26-1.3.517-.258.258-.426.62-.518 1.302-.094.703-.096 1.634-.096 2.97v4.624l.003-.003c.917-.941 2.336-.876 3.184.118l2.94 3.448c.236.276.545.289.783.093l.204-.169c1.076-.886 2.552-.77 3.509.24"
      clipRule="evenodd"
    />
    <g opacity={0.5}>
      <path d="M5.016 4.5H5c-.465 0-.697 0-.891.03A2.5 2.5 0 0 0 2.03 6.61C2 6.803 2 7.035 2 7.5v9c0 .465 0 .697.03.891A2.5 2.5 0 0 0 4.11 19.47c.194.031.426.031.891.031h.016a6 6 0 0 1-.117-.624c-.108-.806-.108-1.832-.108-3.104V8.228c0-1.272 0-2.298.108-3.104q.043-.325.117-.624M18.985 19.5q.074-.299.116-.624c.109-.806.109-1.832.109-3.104V8.228c0-1.272 0-2.298-.109-3.104a6 6 0 0 0-.116-.624H19c.465 0 .697 0 .891.03A2.5 2.5 0 0 1 21.97 6.61c.031.194.031.426.031.891v9c0 .465 0 .697-.03.891a2.5 2.5 0 0 1-2.079 2.078c-.194.031-.426.031-.891.031z" />
    </g>
  </svg>
);
export default SvgWallpaper;
