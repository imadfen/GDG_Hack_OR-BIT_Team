import React from "react";

function Menu() {
  return (
    <div className="flex flex-col text-white pl-5 w-[17%] items-center justify-center">
      <img src="logo.svg" className="w-[165px] m-10" alt="" />
      <h4 className="font-bold text-[20px] self-start ml-3">Menu</h4>
    <ul className="menu w-60 h-full rounded-box">
      <li className="py-2">
        <a>
          <img
            src="dashboards.svg"
            className="h-5 w-5 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          Dashboards
        </a>
      </li>
      <li className="py-2">
        <a>
          <img
            src="mentors.svg"
            className="h-5 w-5 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          Mentors
        </a>
      </li>
      <li className="py-2">
        <a>
          <img
            src="judges.svg"
            className="h-5 w-5 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          Judges
        </a>
      </li>
      <li className="py-2">
        <a>
          <img
            src="teams.svg"
            className="h-5 w-5 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          Teams
        </a>
      </li>
      <li className="py-2">
        <a>
          <img
            src="progress.svg"
            className="h-5 w-5 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          Progress
        </a>
      </li>
    </ul>
    <button className="btn btn-sm self-center justify-self-center align-middle px-8 my-8 justify-center items-center bg-white text-[#4285F4]">
      <img src="SignOut.svg " alt="" /> Log out
    </button>
    <img src="GDGlogo.svg" className="absolute bottom-3 w-[13%]" alt="" />
    </div>
  );
}

export default Menu;
