import BluredCard from '@/components/BluredCard'
import Header from '@/components/Header'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col'>
            <Header />
            <div className="text-white h-screen overflow-hidden relative flex flex-col pt-5">
                <div className="px-20 flex flex-col">
                    <h1 className="text-3xl font-bold">Judge name - code</h1>
                    <h3 className="text-xl font-bold my-5">Submissions</h3>

                    <div className="flex justify-center px-32 flex-grow">
                        <div className="w-full flex flex-col gap-5">
                            {Array(3).fill(null).map((_, i) => (
                                <BluredCard key={i} className="w-full bg-white border rounded-3xl px-5 py-3 hover:scale-105 duration-200 cursor-pointer">
                                    <p className="text-xl">Team {i + 1}</p>
                                    <p className="ml-5">20min ago</p>
                                </BluredCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
