import React from 'react';
import VideoBackground from '../components/VideoBackground';


export const NoEvent = ({ onNewEvent }) => {
  return (
    <div>
      <VideoBackground />
      <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center ">
        <img
          src="/HackFlow.svg"
          alt=""
          className="h-10 w-auto absolute top-0 left-0 ml-4 mt-4"
        />
        <img
          src="/GdgLogo.svg"
          alt=""
          className="h-5 w-auto absolute bottom-0 left-0 ml-5 mb-7"
        />
        <h1 className="text-white justify-center text-3xl">
          No current events
        </h1>
        <div className='flex justify-center mt-20'>
          <button className='text-white mr-8 border border-white px-5 py-5 rounded-lg min-w-[150px] w-5 '>Archive of events</button>
          <button className='text-white ml-20 border border-white px-4 py-2 rounded-lg min-w-[150px]' onClick={onNewEvent} >Create event</button>
        </div>

      </div>
    </div>
  );
};
