// components/Preloader.js

import React from 'react';

const Preloader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red"></div>
    </div>
  );
};

export default Preloader;
