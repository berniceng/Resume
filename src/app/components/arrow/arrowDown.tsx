import React from 'react';

const ArrowDown = (fill: string, height: string, width: string)  => {
  return(
    <svg
      height={height}
      width={width}
    >
      <path
        d="M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,
        0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,
        0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,
        3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585
        c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,
        24.267,14.77,23.795z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDown;