import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity={0.5} />
    <path d="M16.262 7.477a.75.75 0 0 1 1.06-.015l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.146-.954h-.338c-.511 0-.844 0-1.1.025-.242.023-.36.062-.444.109-.084.046-.176.12-.318.307-.152.2-.323.474-.586.902l-1.52 2.463c-.242.39-.45.729-.652.994-.218.286-.46.532-.789.713-.328.18-.666.254-1.025.288-.336.032-.74.032-1.21.032H6a.75.75 0 0 1 0-1.5h2.162c.511 0 .844 0 1.1-.025.243-.023.36-.062.444-.11.084-.045.176-.12.318-.306.152-.2.323-.475.586-.902l1.52-2.464c.242-.39.45-.728.652-.994.218-.285.46-.531.789-.712.328-.18.666-.255 1.025-.289.336-.031.74-.031 1.21-.031h.37a.75.75 0 0 1 .086-.94" />
    <path d="M9.385 9.77c-.085-.017-.186-.02-.584-.02H6a.75.75 0 0 1 0-1.5h2.8579999999999997c.313 0 .565 0 .806.045.54.102 1.033.373 1.405.775.167.18.299.394.459.653l.03.05a.75.75 0 1 1-1.276.788c-.206-.334-.259-.413-.313-.472a1.06 1.06 0 0 0-.584-.32M12.686 13.028a.75.75 0 0 1 1.032.245c.206.333.259.412.313.471.151.163.355.277.584.32.085.016.186.02.584.02h.977a.75.75 0 0 1 1.147-.955l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.147-.955h-1.034c-.313 0-.565 0-.806-.045a2.56 2.56 0 0 1-1.405-.775c-.167-.18-.299-.394-.459-.653l-.03-.05a.75.75 0 0 1 .244-1.032" />
  </svg>
);
export default SvgShuffle;
