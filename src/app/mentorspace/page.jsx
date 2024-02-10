"use client"

import BluredCard from '@/components/BluredCard'
import Header from '@/components/Header';
import { useState } from 'react';

export default function page() {
    const [availability, setAvailability] = useState(true);
    const [queue, setQueue] = useState([1, 2, 3]);

    return (
        <div className='flex flex-col'>
            <Header />
            <div className="pt-5 text-white h-screen overflow-hidden relative">
                <div className="px-20 flex flex-col">
                    <h1 className="text-3xl font-bold">Mentor 1</h1>
                    <div className="flex mt-5 items-center">
                        <h3 className="text-xl font-bold">Availability:</h3>
                        <div className="flex w-full justify-center">
                            <div className="flex gap-10 w-2/4 self-center">
                                <button className={`w-1/2 border-2 border-white p-3 rounded-3xl ${availability ? "bg-white font-bold text-[#0062D5]" : ""}`} onClick={() => setAvailability(true)}>Available</button>
                                <button className={`w-1/2 border-2 border-white p-3 rounded-3xl ${!availability ? "bg-white font-bold text-[#0062D5]" : ""}`} onClick={() => setAvailability(false)}>Unavailable</button>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold my-5">requests</h3>

                    <div className="flex justify-center px-32 flex-grow overflow-hidden">
                        <div className="w-full overflow-y-auto flex flex-col gap-5">
                            {queue.map((v, i) => (
                                <BluredCard key={i} className="w-full bg-white border rounded-3xl px-5 py-3 flex items-center">
                                    <div>
                                        <p className="text-xl">Team {v}</p>
                                        <p className="ml-5">20min ago</p>
                                    </div>
                                    <button className="h-fit ml-auto py-2 px-4 text-md rounded-2xl text-white bg-[#0062D5]" onClick={() => setQueue(old => old.filter((_, j) => i != j))}>Done</button>
                                </BluredCard>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
