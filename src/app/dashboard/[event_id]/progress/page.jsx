import React from "react";
import Progress from "@/components/Progress";
import { data } from "autoprefixer";
export default function page() {
  const data = [
    {
      id: 1,
      title: "checking",
    },
    {
      id: 2,
      title: "opennig ceremony",
    },
    {
      id: 3,
      title: "presentation",
    },
    {
      id: 4,
      title: "Dinner",
    },
    {
      id: 5,
      title: "first talk",
    },
    {
      id: 6,
      title: "hackathon start",
    },
    {
      id: 7,
      title: "closing ceremony",
    },
    {
      id: 8,
      title: "award ceremony",
    },
    {
        id: 9,
        title: "final talk",
    }
  ];
  return (
    <div className="flex-col gap-4 px-10">
      <div className="flex justify-between p-4 mt-8 ">
        <h1 className="text-2xl  font-bold">Progress</h1>
        <button className="btn bg-blue-600 text-white">edit agenda</button>
      </div>
      <Progress data={data} />
    </div>
  );
}
