import React from 'react';
import { Loader } from '@mantine/core';

export const CustomLoader = () => {
  return (
    <div className="flex w-screen h-screen bg-slate-300">
      <div className="flex flex-col m-auto w-1/3">
        <Loader size="xl" />
      </div>
    </div>
  );
};

export default CustomLoader;
