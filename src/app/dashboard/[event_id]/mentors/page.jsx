"use client"

import UserCard from '@/components/UserCard'
import { Icon } from '@iconify/react'

export default function Page() {
  return (
    <div className="flex h-screen text-white">
      <div className='flex-grow'>
        <h2 className="text-3xl font-bold">Mentors</h2>

        <div className='grid grid-cols-2'>
          {
            Array(4).fill(null).map((_, i) => (
              <UserCard name={`mento ${i + 1}`} field="UI / UX" onButtonClick={() => { }} />
            ))
          }
        </div>

      </div>
      <div className='flex'>
        <button className='h-fit px-2 py-1 rounded-lg flex items-center gap-3 bg-[#0062D5]'>
          <Icon icon="mingcute:user-add-2-fill" width={24} />
          <p className="text-xl">New mentor</p>
        </button>
      </div>
    </div>
  )
}
