import React from 'react';
import VideoBackground from './VideoBackground';
export const NoEvent = () => {
  return (
    <div>
      <VideoBackground />
      <div className="absolute top-0 left-0 p-4">
        <img
          src="../assets/icons/HackFlow.svg"
          alt=""
          className="h-12 w-auto"
        />
      </div>
    </div>
  );
};
