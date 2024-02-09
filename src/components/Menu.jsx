import React from "react";
import Image from "next/image";

function Menu() {
  return (
    <div className="fixed flex h-full flex-col text-white pl-5 md:pl-0 md:w-[19%] w-48 border-r-[1px] border-slate-600 items-center">
      <Image
        src="/logo.svg"
        className=" m-10"
        alt=""
        width={165}
        height={50}
      />
      <h4 className="font-bold text-[20px] self-start ml-8">Menu</h4>
      <ul className="menu w-60 mx-5 rounded-box">
        <li className="py-2">
          <a>
            <Image
              src="/dashboards.svg"
              alt="dashboards"
              className="h-5 w-5 mr-4"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
            Dashboards
          </a>
        </li>
        <li className="py-2">
          <a>
            <Image
              src="/mentors.svg"
              alt="mentors"
              className="h-5 w-5 mr-4"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
            Mentors
          </a>
        </li>
        <li className="py-2">
          <a>
            <Image
              src="/judges.svg"
              alt="judges"
              className="h-5 w-5 mr-4"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
            Judges
          </a>
        </li>
        <li className="py-2">
          <a>
            <Image
              src="/teams.svg"
              alt="teams"
              className="h-5 w-5 mr-4"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
            Teams
          </a>
        </li>
        <li className="py-2">
          <a>
            <Image
              src="/progress.svg"
              alt="progress"
              className="h-5 w-5 mr-4"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
            Progress
          </a>
        </li>
      </ul>
      <button className="btn btn-sm self-center justify-self-center align-middle px-8 my-8 justify-center items-center bg-white text-[#4285F4]">
        <Image src="/SignOut.svg" width={20} height={20} alt="" /> Log out
      </button>
      <Image
        src="/GDGlogo.svg"
        width={150}
        height={0}
        className="absolute bottom-3"
        alt=""
      />
    </div>
  );
}

export default Menu;
