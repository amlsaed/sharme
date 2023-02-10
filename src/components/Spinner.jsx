import React from 'react';
import {RotatingLines} from 'react-loader-spinner';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <RotatingLines
        type="Circles"
        color="#333"
        height={50}
        width={100}
        className="m-5"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;