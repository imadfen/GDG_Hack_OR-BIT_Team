import React from "react";
import Card from "./card";
function Cardhome(props) {
    return (
      <Card>
        <div className="flex flex-row justify-start align-middle items-center mb-4">
          <img src="GDGicon.svg" alt="" />
          <div className="flex flex-col text-left ml-5">
            <h4 className="font-semibold text-[18px]">GDG Algiers</h4>
            <h6 className="text-[12px]">{props.time}</h6>
          </div>
        </div>
        <p className="font-semibold text-[22px] my-3">{props.text}</p>
        <a href="" className="text-[#EA4334] font-regular text-[15px]">
          {props.link}
        </a>
      </Card>
    );
  }
export default Cardhome  