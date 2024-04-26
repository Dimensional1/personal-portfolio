import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader flex items-center justify-center h-screen bg-[#080808]">
      <div className="text-4xl font-bold text-blue-500">
        LO<span className="animate-ping">ADING..</span>
      </div>
    </div>
  );
};

export default Preloader;