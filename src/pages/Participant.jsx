import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Cardhome from '../components/CardHome';
export const Participant = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center h-screen  ">
        <div className="absolute top-[50px] left-14 mt-10 ml-6">
          <h3 className="text-white font-bold text-3xl">Team 1</h3>
        </div>

        <div className="absolute flex justify-center space-x-8 top-[150px]">
          <Button>Submit</Button>
          <Button>Ask for a mentor</Button>
          <Button>Give feedback</Button>
        </div>

        <div className="absolute top-[230px] left-14 mb-6">
          <h1 className="text-lg font-bold text-white">Announcements</h1>
          <div className="overflow-auto">
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
        </div>
      </div>
    </div>
  );
};
