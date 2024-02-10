import React from "react";
import Image from "next/image";
import Link from "next/link";

function Menu({ event_id }) {
  return (
    <div className="fixed flex h-full flex-col text-white pl-5 md:pl-0 md:w-[19%] w-48 border-r-[1px] border-slate-600 bg-[#060b26] items-center">
      <Image
        src="/logo.svg"
        className=" m-10"
        alt=""
        width={165}
        height={50}
      />
      <h4 className="font-bold text-[20px] self-start ml-8">Menu</h4>
      <ul className="menu w-64 self-start rounded-box">
        <li className="py-2">
          <Link href={`/dashboard/${event_id}/`}>
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
          </Link>
        </li>
        <li className="py-2">
          <Link href={`/dashboard/${event_id}/mentors`}>
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
          </Link>
        </li>
        <li className="py-2">
          <Link href={`/dashboard/${event_id}/judges`}>
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
          </Link>
        </li>
        <li className="py-2">
          <Link href={`/dashboard/${event_id}/teams`}>
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
          </Link>
        </li>
        <li className="py-2">
          <Link href={`/dashboard/${event_id}/progress`}>
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
          </Link>
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
