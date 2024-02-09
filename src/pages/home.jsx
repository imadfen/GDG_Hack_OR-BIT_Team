import React from 'react';
import Button from '../components/Button';
import Card from '../components/card';
import Cardhome from '../components/CardHome';

function HomePage() {
  return (
    <div className="absolute flex flex-col md:ml-[22%] ml-[30%]">
      <h3 className="text-white text-[28px] py-6">Welcome !</h3>
      <div className="flex flex-row justify-start  gap-10 mt-4 mb-7">
        <Button>Set criteria</Button>
        <Button>Events archive</Button>
      </div>
      <button className="self-end bg-[#0062D5] rounded-[10px] text-white px-5 py-2 justify-self-end justify-end text-center mr-10 mb-4">
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
  );
}

export default HomePage;
