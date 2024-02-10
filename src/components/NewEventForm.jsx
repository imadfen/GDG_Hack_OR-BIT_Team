"use client";
import BluredCard from "./BluredCard";
import VideoBackground from "./VideoBackground";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function NewEventForm({ onCancel, onCreate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  //onsubmit
  const onSubmit = async (data) => {
    console.log(data);
    router.replace("dashboard/dfsfdsfs/teams");
    const response = fetch("/api/createevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
  };

  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <VideoBackground />
      <Image
        height={40}
        width={180}
        src="logo.svg"
        className="w-[180px] mt-2 mb-6"
        alt="nothing"
      />
      <BluredCard className="w-1/2 self-center justify-self-center flex flex-col align-center justify-center border rounded-[30px] md:mx-[35%] mx-24 text-white">
        <div className="w-full border-b flex items-center p-3 gap-2">
          <Icon
            icon="mingcute:left-fill"
            width={24}
            className="cursor-pointer"
            onClick={onCancel}
          />
          <p className="text-lg font-bold">Create an event</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
          className="px-10 py-8 relative"
        >
          <div className="flex gap-10">
            <div className="w-2/3">
              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                Event Name
              </h5>
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="Event name"
                className="w-full self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
              />

              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                Starting date
              </h5>
              <div className="w-full self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl flex items-center">
                <input
                  type="date"
                  name="start_date"
                  {...register("start_date")}
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent flex-grow"
                />
              </div>

              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                Ending date
              </h5>
              <div className="w-full self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl flex items-center">
                <input
                  type="date"
                  name="end_date"
                  {...register("end_date")}
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent flex-grow"
                />
              </div>

              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                Description
              </h5>
              <textarea
                type="text"
                name="description"
                {...register("description")}
                placeholder="Type description here"
                rows={4}
                className="w-full resize-none self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
              />
            </div>

            <div className="w-1/3">
              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                Edition
              </h5>
              <input
                type="text"
                name="edition"
                {...register("edition")}
                placeholder="Edition"
                className="w-full self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
              />
            </div>
          </div>

          <button
            type="submit"
            className="rounded-2xl p-2 bg-[#0062D5] text-white text-[16px] absolute bottom-3 right-5"
            onClick={onCreate}
          >
            Create
          </button>
        </form>
      </BluredCard>
    </div>
  );
}
