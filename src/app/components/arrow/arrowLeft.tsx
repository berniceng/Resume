import React from 'react';

const ArrowLeft = (fill: string, height: string, width: string)  => {
  return(
    <svg
      height={height}
      width={width}
    >
      <path
        d="M7.701,14.276l9.586-9.585c0.879-0.878,2.317-0.878,3.195,0l0.801,
        0.8c0.878,0.877,0.878,2.316,0,3.194  L13.968,16l7.315,7.315c0.878,
        0.878,0.878,2.317,0,3.194l-0.801,0.8c-0.878,0.879-2.316,0.879-3.195,
        0l-9.586-9.587  C7.229,17.252,7.02,16.62,7.054,16C7.02,15.38,7.229,
        14.748,7.701,14.276z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowLeft;