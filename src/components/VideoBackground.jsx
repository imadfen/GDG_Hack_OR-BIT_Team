import React from 'react';

function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden">
      <video className='w-full h-full object-cover' autoPlay loop muted playsInline>
        <source src="/Blubs.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
}

export default VideoBackground;
