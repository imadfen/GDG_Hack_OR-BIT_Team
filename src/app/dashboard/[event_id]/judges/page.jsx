"use client"

import CreateJudgeForm from '@/components/CreateJudgeForm';
import UserCard from '@/components/UserCard'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [isCreateJudge, setIsCreateJudge] = useState(false);
  const router = useRouter();

  return (
    <div className="pt-5 flex h-screen text-white overflow-hidden relative">
      {isCreateJudge ?
        <CreateJudgeForm onCancel={() => setIsCreateJudge(false)} onCreate={() => setIsCreateJudge(false)} />
        :
        <>
          <div className='flex-grow overflow-hidden'>
            <h2 className="text-3xl font-bold">Judges</h2>

            <div className='grid grid-cols-2 w-[85%]'>
              {
                Array(3).fill(null).map((_, i) => (
                  <UserCard key={i} name={`judge ${i + 1}`} field="UI / UX" onButtonClick={() => { }} />
                ))
              }
            </div>

          </div>
          <div className='flex m-5'>
            <button className='h-fit px-2 py-1 rounded-lg flex items-center gap-3 bg-[#0062D5]' onClick={() => setIsCreateJudge(true)}>
              <Icon icon="mingcute:user-add-2-fill" width={24} />
              <p className="text-xl">New judge</p>
            </button>
          </div>
        </>
      }
    </div>
  )
}
