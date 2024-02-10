"use client"

import BluredCard from "./BluredCard";
import { Icon } from "@iconify/react";

export default function CreateFeedback({ onCancel, onCreate }) {

    return (
        <div className="w-full min-h-[100vh] flex flex-col">
            <BluredCard className="w-1/2 self-center justify-self-center flex flex-col align-center justify-center border rounded-[30px] md:mx-[35%] mx-24 text-white">
                <div className="w-full border-b flex items-center p-3 gap-2">
                    <Icon
                        icon="mingcute:left-fill"
                        width={24}
                        className="cursor-pointer"
                        onClick={onCancel}
                    />
                    <p className="text-lg font-bold">Give feedback</p>
                </div>
                <form
                    onSubmit={onCreate}
                    className="px-10 py-8 relative"
                >
                    <div className="flex gap-10 justify-center">
                        <div className="w-2/3 flex flex-col items-center">
                            <h5 className="text-lg font-regular text-[16px] text-left self-start my-4 ml-3">
                                Share your thoughts! We value your feedback
                            </h5>
                            <textarea rows={20} className="w-full self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 py-2 rounded-2xl resize-none h-52" placeholder="feedback..."></textarea >
                        </div>
                    </div>
                    <button
                        className="rounded-2xl py-2 px-3 bg-[#0062D5] text-white text-[16px] absolute bottom-3 right-5"
                        onClick={onCreate}
                        type="submit"
                    >
                        send
                    </button>
                </form>
            </BluredCard>
        </div >
    );
}
