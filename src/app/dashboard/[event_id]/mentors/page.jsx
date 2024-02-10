"use client"

import CreateMentorForm from '@/components/CreateMentorForm';
import UserCard from '@/components/UserCard'
import { Icon } from '@iconify/react'
import { useState } from 'react';

export default function Page() {
  const [isAddMentor, setIsAddMentor] = useState(false);

  return (
    <div className="pt-5 flex h-screen text-white overflow-hidden">
      {isAddMentor ?
        <CreateMentorForm onCancel={() => setIsAddMentor(false)} onCreate={() => setIsAddMentor(false)} />
        :
        <>
          <div className='flex-grow overflow-hidden'>
            <h2 className="text-3xl font-bold">Mentors</h2>

            <div className='grid grid-cols-2 w-[85%]'>
              {
                Array(6).fill(null).map((_, i) => (
                  <UserCard name={`mentor ${i + 1}`} field="UI / UX" onButtonClick={() => { }} />
                ))
              }
            </div>

          </div>
          <div className='flex m-5'>
            <button className='h-fit px-2 py-1 rounded-lg flex items-center gap-3 bg-[#0062D5]' onClick={() => setIsAddMentor(true)}>
              <Icon icon="mingcute:user-add-2-fill" width={24} />
              <p className="text-xl">New mentor</p>
            </button>
          </div>
        </>
      }
    </div>
  )
}
