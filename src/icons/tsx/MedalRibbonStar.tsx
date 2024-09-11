import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMedalRibbonStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6"
      clipRule="evenodd"
    />
    <path
      d="M6.714 17.323 7.351 15 8 13h8l.649 2 .637 2.323c.628 2.292.942 3.438.523 4.065-.147.22-.344.396-.573.513-.652.332-1.66-.193-3.675-1.243-.67-.35-1.006-.524-1.362-.562a2 2 0 0 0-.398 0c-.356.038-.691.213-1.362.562-2.015 1.05-3.023 1.575-3.675 1.243a1.5 1.5 0 0 1-.573-.513c-.42-.627-.105-1.773.523-4.065"
      opacity={0.5}
    />
  </svg>
);
export default SvgMedalRibbonStar;
