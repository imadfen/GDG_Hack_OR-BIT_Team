import BluredCard from '@/components/BluredCard'
import React from 'react'

export default function page() {
    return (
        <div className="text-white h-screen overflow-hidden relative">
            <img src='logo.svg' className='w-[180px] mt-2 mb-6' alt="nothing" />
            <div className="px-20 flex flex-col">
                <h1 className="text-3xl font-bold">Judge name - code</h1>
                <h3 className="text-xl font-bold my-5">Submissions</h3>

                <div className="flex justify-center px-32 flex-grow overflow-hidden">
                    <div className="w-full overflow-y-auto flex flex-col gap-5">
                        {Array(3).fill(null).map((_, i) => (
                            <BluredCard key={i} className="w-full bg-white border rounded-3xl px-5 py-3">
                                <p className="text-xl">Team {i+1}</p>
                                <p className="ml-5">20min ago</p>
                            </BluredCard>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
