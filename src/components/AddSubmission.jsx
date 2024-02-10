import BluredCard from "./BluredCard";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddSubmission({ onCancel, onCreate }) {
    const [handleInput, setHandleInput] = useState(null);

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
                    <p className="text-lg font-bold">Submission</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
                    className="px-10 py-8 relative"
                >
                    <div className="flex gap-10">
                        <div className="w-2/3">
                            <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                                Git repo link
                            </h5>
                            <input
                                type="text"
                                {...register("git_link")}
                                placeholder="Link"
                                className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
                            />

                            <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                                Figma link
                            </h5>
                            <input
                                type="text"
                                {...register("figma_link")}
                                placeholder="Link"
                                className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
                            />

                            <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                                Other link
                            </h5>
                            <input
                                type="text"
                                {...register("other_link")}
                                placeholder="Link"
                                className="w-[80%] self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"
                            />

                            <h5 className="text-lg font-regular text-[16px] text-left self-start my-1 ml-3">
                                Readme
                            </h5>
                            <textarea {...register("readme")} rows={10} className="w-full self-start input bordered-20 bg-opacity-[12%] bg-white mb-4 rounded-2xl"></textarea >
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
