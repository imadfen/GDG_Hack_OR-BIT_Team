import React from 'react'

function Button({children}) {
  return (
    <div className='flex items-center justify-center bg-gradient-to-br from-slate-400 via-transparent to-slate-400 rounded-[30px] h-10 p-[1px] w-48'>
    <button className=' flex-1 self-center justify-self-center ml-[0.5px] w-full h-full rounded-[30px] bg-gradient-to-br  from-slate-800 to-slate-600 z-10 text-white text-[16px]'>{children}</button>   
         </div>
  )
}

export default Button