import React from "react";
import Card from "../components/card";

function Teams() {
  return (
    <div className="absolute flex flex-col md:ml-[22%] ml-[30%]">
      <h3 className="text-white text-[28px] py-6">Teams</h3>
      <br className="bg-white w-[60%] self-center justify-self-center" />
      <Card>
        <h4 className="text-white text-[16px] self-center justify-self-center text-center mb-3">
          Teams' submissions
        </h4>
        {
          <ul className="flex flex-col justify-between gap-2">
            {Array.from({ length: 8 }, (_, index) => (
              <li className="my-2" key={index + 1}>
                Tea {index + 1}
                <Image src="clock.svg" width={20} height={20}></Image>{" "}
              </li>
            ))}
          </ul>
        }
      </Card>
     < Teamcard></Teamcard>
    </div>
  );
}

export default Teams;
