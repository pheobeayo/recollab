import { Blocks } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
    <Blocks
      height={80}
      width={80}
      color='#123962'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
      ariaLabel='blocks-loading'
      secondaryColor='#00AEE6'
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default LoadingSpinner;