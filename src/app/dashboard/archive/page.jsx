import Button from "@/components/Button";
import VideoBackground from "@/components/VideoBackground";
import React, { Fragment } from "react";
import Image from "next/image";
import Card from "@/components/card";
import BluredCard from "@/components/BluredCard";

const page = () => {
  return (
    <div className="min-h-screen relative overflow-y-auto">
      <VideoBackground />
      <Image
        height={40}
        width={150}
        src="/logo.svg"
        className="w-[150px] mt-3 ml-3 fixed left-0 top-4"
        alt="gdglogo"
      />
      <Image
        height={40}
        width={150}
        src="/GDGlogo.svg"
        className="w-[150px] mt-3 ml-3 fixed left-0 bottom-8"
        alt="gdglogo"
      />
      <div className="flex relative justify-center items-center w-full h-full ">
        <div className="flex gap-5 mt-[40vh] mb-10 mx-10 ">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translateY(${i % 2 === 0 ? "100px" : "-100px"})`,
              }}
              className={`bg-white  bg-opacity-10 border border-gray-800 min-w-[310px]  min-h-[150px] rounded-xl`}
            >
              <h1 className="font-bold text-[24px] text-gray-300 text-center mt-5">
                devfest 2021
              </h1>
              <button
                className=" mr-[30%] rounded-xl p-2 bg-[#0062D5] text-white text-[16px] absolute bottom-3 right-5"
                type="button"
              >
                see more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
