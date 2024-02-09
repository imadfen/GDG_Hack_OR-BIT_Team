import React from "react";
import Card from "../../../../components/card";
import Image from "next/image";

export default function page() {
  return (
    <div className=" flex flex-col pl-6 bg-[#060b26] min-h-[100vh] ">
      <div className="flex flex-row justify-between items-center text-center">
        <h3 className="text-white font-semibold text-[28px] py-6 ml-12 md:ml-1">Teams</h3>
        <button className="self-end bg-[#0062D5] rounded-[10px] text-white px-5 py-2 justify-self-end text-center mr-10 mb-4 flex flex-row justify-between gap-3">
          <Image src="/vector.svg" width={20} height={20}></Image> New team
        </button>
      </div>{" "}
      <br className="bg-white w-[60%] self-center justify-self-center" />
      <div className="flex flex-col md:flex-row">
        <div className="carousel carousel-end rounded-box md:w-auto self-center w-96">
          <div className="carousel-item">
            <Card>
              <h4 className="text-white text-[20px] font-semibold self-center justify-self-center text-center mb-5">
                Teams submissions
              </h4>
              {
                <ul className="flex flex-col justify-between gap-2">
                  {Array.from({ length: 8 }, (_, index) => (
                    <li
                      className="flex justify-between border-b-[0.5px] border-gray-600 px-5 gap-20 py-2"
                      key={index + 1}
                    >
                      <h5 className="self-begin justify-self-start ml-0 text-left">
                        Team {index + 1}
                      </h5>
                      <Image
                        src="/clock.svg"
                        width={20}
                        height={20}
                        className="justify-self-end self-center"
                      ></Image>{" "}
                    </li>
                  ))}
                </ul>
              }
            </Card>
          </div>
          {Array.from({ length: 5 }, (_, index) => (
            <div className="carousel-item">
              <Teamcard team={index}>
                {Array.from({ length: 5 }, (_, index) => (
                  <li className="my-4 px-7 flex " key={index + 1}>
                    <Image
                      src="/Janet.svg"
                      width={40}
                      height={40}
                      className="justify-self-start self-center"
                    ></Image>
                    <h5 className="justify-self-start self-center text-left ml-7">
                      FullName
                    </h5>
                    <a href="" className="self-center justify-self-end ml-12">
                      <Image src="/trash.svg" width={30} height={30}></Image>
                    </a>
                  </li>
                ))}
              </Teamcard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Teamcard({ team, children }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-400 via-transparent to-slate-400 flex-1 rounded-[30px] h-auto p-[1px] mx-5 w-72 my-4">
      <div className=" flex-1 self-center justify-self-center ml-[0.5px] w-full h-full rounded-[30px] pb-5 bg-gradient-to-br  via-[#060b26] from-[#060b26] to-black z-10 text-white text-[16px]">
        {" "}
        <div className="flex flex-1 justify-between rounded-t-[30px] w-full h-16 items-center px-8 bg-[#0062D5] ">
          <h4 className="text-[20px]">Team {team}</h4>
          <a href="">
            <Image
              className="align-end justify-self-end"
              src="/edit.svg"
              width={25}
              height={25}
            ></Image>
          </a>
        </div>
        {children}
      </div>
    </div>
  );
}
