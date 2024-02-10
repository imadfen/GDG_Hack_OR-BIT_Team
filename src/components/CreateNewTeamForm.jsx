import BluredCard from "./BluredCard";
import VideoBackground from "./VideoBackground";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CreateNewTeamForm({ onCancel, onCreate }) {
  const [handleInput, setHandleInput] = useState(null);
  const [members, setMembers] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //member name
  const handleInputChange = (e) => {
    setHandleInput(e.target.value);
  };
  const handleAdd = () => {
    if (handleInput === "") return;
    setMembers([...members, handleInput]);
  };
  //onsubmit
  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch("/api/createteam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, members }),
    });
    console.log(response);
  };

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
          <p className="text-lg font-bold">Create new team</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
          className="px-10 py-8 relative"
        >
          <div className="flex gap-10">
            <div className="w-2/3">
              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                Team Name
              </h5>
              <input
                type="text"
                name="eventID"
                {...register("eventID")}
                placeholder="Event ID"
                className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
              />

              <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                add a member
              </h5>
              <div className="flex gap-2 items-baseline">
                <input
                  type="text"
                  name="member_name"
                  onChange={handleInputChange}
                  placeholder="member name"
                  className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
                />
                <button
                  className="rounded-2xl p-2 bg-[#0062D5] text-white text-[16px] max-h-[40px] pt-2"
                  type="button"
                  onClick={handleAdd}
                >
                  add
                </button>
              </div>
            </div>
          </div>

          <button
            className="rounded-2xl p-2 bg-[#0062D5] text-white text-[16px] absolute bottom-3 right-5"
            onClick={onCreate}
            type="submit"
          >
            create
          </button>
        </form>
      </BluredCard>
    </div>
  );
}
