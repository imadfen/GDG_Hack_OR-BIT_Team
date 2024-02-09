import BluredCard from '@/components/BluredCard'
import React from 'react'

export default function page() {
    return (
        <div className="text-white h-screen overflow-y-hidden relative">
            <img src='logo.svg' className='w-[180px] mt-2 mb-6' alt="nothing" />
            <div className="px-20">
                <h1 className="text-3xl font-bold">Judge name - code</h1>
                <h3 className="text-xl font-bold">Submissions</h3>

                <div className="flex justify-center px-20 h-full">
                    <div className="w-full max-h-full overflow-y-auto">
                        {Array(20).fill(null).map((_, i) => (
                            <BluredCard key={i} className="w-full bg-white">
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
