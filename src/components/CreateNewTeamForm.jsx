import BluredCard from "./BluredCard";
import VideoBackground from "./VideoBackground";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function CreateNewTeamForm({ onCancel, onCreate }) {
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <VideoBackground />
      <Image height={40} width={180} src="logo.svg" className="w-[180px] mt-2 mb-6" alt="nothing" />
      <BluredCard className="w-1/2 self-center justify-self-center flex flex-col align-center justify-center border rounded-[30px] md:mx-[35%] mx-24 text-white">
        <div className="w-full border-b flex items-center p-3 gap-2">
          <Icon
            icon="mingcute:left-fill"
            width={24}
            className="cursor-pointer"
            onClick={onCancel}
          />
          <p className="text-lg font-bold">Create new team</p>
        </div>
        <form className="px-10 py-8 relative">
          <div className="flex gap-10">
            <div className="w-2/3">
              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                Team Name
              </h5>
              <input
                type="text"
                name="event_name"
                placeholder="Event name"
                className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
              />

              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                add a member
              </h5>
              <div className="flex gap-2 items-baseline">
                <input
                  type="text"
                  name="event_name"
                  placeholder="Event name"
                  className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
                />
                <button
                  className="rounded-2xl p-2 bg-[#0062D5] text-white text-[16px] max-h-[40px] pt-2"
                  type="button"
                >
                  add
                </button>
              </div>
            </div>
          </div>

          <button
            className="rounded-2xl p-2 bg-[#0062D5] text-white text-[16px] absolute bottom-3 right-5"
            onClick={onCreate}
            type="button"
          >
            create
          </button>
        </form>
      </BluredCard>
    </div>
  );
}
