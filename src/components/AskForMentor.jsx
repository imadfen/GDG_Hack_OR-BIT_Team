"use client"

import BluredCard from "./BluredCard";
import { Icon } from "@iconify/react";
import UserCard from "./UserCard";

export default function AskForMentor({ onCancel, onCreate }) {

    return (
        <div className="w-full min-h-[100vh] flex flex-col">
            <BluredCard className="w-[55%] self-center justify-self-center flex flex-col align-center justify-center border rounded-[30px] text-white">
                <div className="w-full border-b flex items-center p-3 gap-2">
                    <Icon
                        icon="mingcute:left-fill"
                        width={24}
                        className="cursor-pointer"
                        onClick={onCancel}
                    />
                    <p className="text-lg font-bold">Ask for a mentor</p>
                </div>
                <div className="pr-10">
                    <div className='flex-grow overflow-hidden flex justify-center items-center'>
                        <div className='grid grid-cols-2 place-content-center'>
                            {
                                Array(6).fill(null).map((_, i) => (
                                    <UserCard name={`mentor ${i + 1}`} field="UI / UX" onButtonClick={onCreate} icon="mingcute:phone-call-fill" />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </BluredCard>
        </div >
    );
}
