"use client"

import React, { useState } from 'react'
import Button from "../../../components/Button";
import Card from "../../../components/card";
import CreateCriteria from '@/components/CreateCriteria';
import CreateAnnounecement from '@/components/CreateAnnouncement';

export default function page() {
  const [isCreateCriteria, setIsCreateCriteria] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState(false);

  return (
    <>
      {isCreateCriteria ?
        <div className="w-full mt-10">
          <CreateCriteria onCancel={() => setIsCreateCriteria(false)} onCreate={() => setIsCreateCriteria(false)} />
        </div>
        :
        newAnnouncement ?
          <div className="w-full mt-10">
            <CreateAnnounecement onCancel={() => setNewAnnouncement(false)} onCreate={() => setNewAnnouncement(false)} />
          </div>
          :
          <div className="absolute flex flex-col pl-6">
            <h3 className="text-white text-[28px] py-6">Welcome</h3>
            <div className="flex flex-row justify-start  gap-10 mt-4 mb-7">
              <Button onClick={() => setIsCreateCriteria(true)}>Set criteria</Button>
              <Button onClick={() => { }}>Events archive</Button>
            </div>
            <button className="self-end bg-[#0062D5] rounded-[10px] text-white px-5 py-2 justify-self-end justify-end text-center mr-10 mb-4" onClick={() => setNewAnnouncement(true)}>
              + New announce
            </button>
            <Cardhome
              time="48 minutes ago"
              text="Good evening Participant I hope you're doing well. Here is the hacker guide of the first edition of GDG Hack!
  Good luck and have a good hacking!  Thank you for your attention."
              link="https://docs.google.com/document/d/1tYlqkAO"
            ></Cardhome>
            <Cardhome
              time="48 minutes ago"
              text="Good evening Participant I hope you're doing well. Here is the hacker guide of the first edition of GDG Hack!
  Good luck and have a good hacking!  Thank you for your attention."
              link="https://docs.google.com/document/d/1tYlqkAO"
            ></Cardhome>
          </div>
      }
    </>
  )
}

function Cardhome(props) {
  return (
    <Card>
      <div className="flex flex-row justify-start align-middle items-center mb-4">
        <img src="/GDGicon.svg" alt="" />
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


