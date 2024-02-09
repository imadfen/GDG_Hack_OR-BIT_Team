import React from 'react';

const Header = () => {
  return (
    <div
      className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden flex flex-col justify-center items-center"
      style={{ backgroundImage: `url("/bgONE.png")` }}
    >
      <div className="flex absolute top-0 items-center justify-between w-full">
        <img
          src="/HackFlow.svg"
          alt=""
          className="h-10 ml-4 mt-4"
        />
        
        <div className=" w-[50%] h-6 mt-3 bg-[#292c50] rounded-full dark:bg-gray-700 border border-cyan-700">
          <div className=" h-full bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full" style={{ width: '45%' }}>
            {' '}
           
          </div>
        </div>
        <div className=" mt-2 mr-5 width-[20%]">
          <button className="flex bg-white justify-center text-blue border
          rounded-lg px-7 py-1 pr-10 ml-4 " 
          >
            <img src="/SignOut.png" className='mr-7' alt="" />
            <span>Log out</span>
            </button>
        </div>
      </div>
      
    </div>
  );
};
export default Header