import BluredCard from "./BluredCard";
import { Icon } from "@iconify/react";

export default function CreateAnnounecement({ onCancel, onCreate }) {
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
          <p className="text-lg font-bold">add Announcement</p>
        </div>
        <form className="px-10 py-8 relative">
          <div className="flex gap-10 px-10">
            <div className="w-full">
              <textarea
                type="text"
                name="announcement_content"
                placeholder="write somthing ..."
                className="w-full min-h-[30vh] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
              />
            </div>
          </div>

          <button
            className="rounded-2xl p-2 bg-[#0062D5] text-white text-[16px] absolute bottom-3 right-5"
            onClick={onCreate}
            type="button"
          >
            add
          </button>
        </form>
      </BluredCard>
    </div>
  );
}
