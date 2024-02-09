import React from 'react'

function Card({ children, className }) {
  return (
    <div className={'flex items-center justify-center bg-gradient-to-br from-slate-400 via-transparent to-slate-400 flex-1 rounded-[30px] h-auto p-[1px] w-[90%] mx-10 my-4 ' + className}>
      <div className=' flex-1 self-center justify-self-center ml-[0.5px] w-full h-full rounded-[30px] px-10 py-5 bg-gradient-to-br  from-slate-900 via-slate-700 to-slate-800 z-10 text-white text-[16px]'>{children}</div>
    </div>
  )
}

export default Card