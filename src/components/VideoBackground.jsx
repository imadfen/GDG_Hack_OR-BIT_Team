import React from 'react';

function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10">
      {/* Ensure that the container covers the entire viewport */}
      <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted playsInline>
        {/* Ensure the video covers the entire container */}
        <source src="/Blubs.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;

