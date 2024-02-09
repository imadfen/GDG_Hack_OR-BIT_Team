import React from 'react';

export const Feedback = () => {
  return (
    <div className="absolute top-0 left-0 z-0 w-full h-full overflow-hidden flex flex-col justify-center items-center">
      <img src="bgONE.png" className="w-full h-full object-cover" alt="" />
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

      <div className="h-96 w-[45%] border border-gray-400 rounded-lg flex flex-col  justify-center absolute ">
        <div className="flex items-center justify-center absolute top-0 w-full p-2 border-b border-gray-400">
          <p className="text-white text-sm">Give feedback</p>
          <button className=" absolute top-0 left-0 ml-2 mt-2 h-1 text-white font-bold rounded">
            <img src="BackArrow.png" alt="" />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center w-full">
        <p className="text-white text-sm mb-4">Share your thoughts! We value your feedback</p>
          <textarea
            className="bg-[#060b28] text-white w-[80%] h-55 p-2 resize-none rounded-lg ml-2 mb-2"
            rows="8"
            placeholder=""
          ></textarea>
        </div>
        
        <div className="absolute bottom-0 right-0 mb-3 mr-3">
          <button className="bg-blue-500 text-white px-4 py-2 bottom-0  rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
