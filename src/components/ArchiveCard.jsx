import React from 'react';

export const ArchiveCard = () => {
  return (
    <>
      <div className="w-[90%] h-[200px] flex items-center justify-center bg-gradient-to-br from-slate-400 via-transparent to-slate-400 flex-1 rounded-[30px]  p-[1px]  mx-10 my-4">
        <div className=" flex flex-1 self-center justify-self-center ml-[0.5px] w-full h-full rounded-[30px] px-10 py-10 bg-gradient-to-br  from-slate-900 via-slate-800 to-slate-900  text-white text-center text-[16px]">
          DevFest
        </div>
      </div>
      <button
        type="button"
        className="flex justify-center z-2 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white w-[15%]"
      >
        See more
      </button>
      <div className="absolute flex justify-between transform -translate-y-1/2  left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn h-3 btn-circle">
          ❯
        </a>
      </div>
    </>
  );
};
