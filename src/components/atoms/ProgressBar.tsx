// components/ProgressBar.js
import PropTypes from 'prop-types';

const ProgressBar = ({ progress, height, color, textColor, bgColor }) => {
  return (
    <div className={`w-full ${height} ${bgColor} rounded-full bling-light  dark:bling-dark overflow-hidden relative`}>
      
      <div
        className={`flex justify-center items-center overflow-hidden relative ${height}  ${color} text-${textColor} text-xs font-medium text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${progress}%` }}
      >
        <div className={` area h-full w-full ${color} `} >
          <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        <div className='absolute text-[10px] bling-light-text font-bold dark:!text-white px-1 rounded-md  drop-shadow-xl  -translate-x-0 -translate-y-0'>{progress}%</div>
      </div> 
     
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  height: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string
};

ProgressBar.defaultProps = {
  height: 'h-4',
  color: 'bg-blue-500',
  textColor: 'white',
  bgColor: 'bg-gray-200'
};

export {ProgressBar};
