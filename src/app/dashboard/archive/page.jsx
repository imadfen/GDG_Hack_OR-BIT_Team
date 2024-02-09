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
        className="w-[150px] mt-3 ml-3 fixed left-0 bottom-4"
        alt="gdglogo"
      />
      <div className="flex relative justify-center items-center w-full h-full ">
        <div className="flex gap-10 mt-[40vh] mb-10 ">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translateY(${i % 2 === 0 ? "100px" : "-100px"})`,
              }}
              className={`border border-red-50 min-w-[310px]  min-h-[150px] rounded-md`}
            >
              <h1 className="font-bold text-[24px] text-white text-center mb-3">
                devfest 2021
              </h1>
              <p className="text-[16px] text-white text-center mb-3">
                12-12-2021
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
