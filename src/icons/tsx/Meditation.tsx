import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMeditation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
    <path
      fillRule="evenodd"
      d="M9.95 15.4a.75.75 0 0 1 .15 1.05l-1.047 1.395-.07.093a2.75 2.75 0 0 1-1.421.944l-.113.029-.008.002-1.485.371a1.59 1.59 0 0 0-1.206 1.545c0 .232.189.421.421.421h1.556c.617 0 .865-.001 1.102-.03a4.25 4.25 0 0 0 1.64-.546c.206-.12.406-.268.9-.638L12.55 18.4a.75.75 0 1 1 .9 1.2l-.905.678 1.258.472c.627.235.88.328 1.136.389q.21.048.42.076c.262.034.531.035 1.2.035h2.27a.42.42 0 0 0 .421-.421c0-.73-.497-1.368-1.206-1.545l-1.493-.373-.113-.03a2.75 2.75 0 0 1-1.42-.943c-.023-.028-.044-.057-.072-.093L13.9 16.45a.75.75 0 1 1 1.2-.9l1.042 1.389.052.069a1.25 1.25 0 0 0 .729.45l1.485.37a3.09 3.09 0 0 1 2.342 3c0 1.062-.86 1.922-1.921 1.922h-2.321c-.602 0-.973 0-1.342-.048q-.286-.038-.568-.103c-.363-.085-.71-.215-1.273-.426l-2.204-.826c-.38.285-.631.47-.898.624a5.75 5.75 0 0 1-2.218.74c-.335.04-.676.039-1.23.039H5.171a1.92 1.92 0 0 1-1.921-1.921c0-1.42.966-2.656 2.342-3l1.485-.371.083-.022a1.25 1.25 0 0 0 .698-.497L8.9 15.55a.75.75 0 0 1 1.05-.15"
      clipRule="evenodd"
    />
    <path
      d="M12.869 9.822a5.3 5.3 0 0 0-1.738 0c-2.507.423-4.38 2.624-4.38 5.198 0 .564-.317 1.085-.824 1.341L3.338 17.67a.75.75 0 0 1-.676-1.338l2.587-1.308.001-.003c0-3.306 2.402-6.133 5.632-6.677a6.8 6.8 0 0 1 2.236 0c3.23.544 5.632 3.371 5.632 6.677v.002l2.588 1.309a.75.75 0 1 1-.676 1.338l-2.589-1.308a1.5 1.5 0 0 1-.823-1.341c0-2.574-1.873-4.775-4.381-5.198"
      opacity={0.5}
    />
  </svg>
);
export default SvgMeditation;
