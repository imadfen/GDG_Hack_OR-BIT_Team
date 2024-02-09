import BluredCard from "./BluredCard";
import VideoBackground from "./VideoBackground";
import { Icon } from "@iconify/react";

export default function CreateJudgeForm({ onCancel, onCreate }) {
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <VideoBackground />
      <img src="logo.svg" className="w-[180px] mt-2 mb-6" alt="nothing" />
      <BluredCard className="w-1/2 self-center justify-self-center flex flex-col align-center justify-center border rounded-[30px] md:mx-[35%] mx-24 text-white">
        <div className="w-full border-b flex items-center p-3 gap-2">
          <Icon
            icon="mingcute:left-fill"
            width={24}
            className="cursor-pointer"
            onClick={onCancel}
          />
          <p className="text-lg font-bold">Add new judge</p>
        </div>
        <form className="px-10 py-8 relative">
          <div className="flex gap-10">
            <div className="w-2/3">
              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                judge Name
              </h5>
              <input
                type="text"
                name="judge_name"
                placeholder="Event name"
                className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
              />

              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                judge field
              </h5>
              <div className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl flex items-center">
                <input
                  type="text"
                  name="judge_field"
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent flex-grow"
                />
                <Icon icon="uil:calender" width={24} />
              </div>

              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                select judge Criteria
              </h5>
              <select name="judge critiere" className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl" >
                <option value="1" selected>select criteria</option>
                <option value="1">ui / ux</option>
                <option value="2">flexibilte</option>
                <option value="3">securite</option>
                <option value="4">optimisation</option>
              </select>
            </div>
          </div>

          <button
            className="rounded-2xl p-2 bg-[#0062D5] text-white text-[16px] absolute bottom-3 right-5"
            onClick={onCreate}
            type="button"
          >
            send
          </button>
        </form>
      </BluredCard>
    </div>
  );
}
