import React from 'react';
import Button from '../components/Button';
import Cardhome from '../components/CardHome';
export const Participant = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center h-screen  h-min-[100vh]"
        // style={{ backgroundImage: `url("/bgONE.png")` }}
      >
        <div className="absolute top-[50px] left-14 mt-6 ml-6">
          <h3 className="text-white font-bold text-3xl">Team 1</h3>
        </div>

        <div className="absolute flex justify-center space-x-8 top-[150px]">
          <Button>Submit</Button>
          <Button>Ask for a mentor</Button>
          <Button>Give feedback</Button>
        </div>

        <div className="absolute top-[230px] left-14 mb-2">
          <h1 className="text-lg font-bold text-white">Announcements</h1>

          <div className="h-64 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <Cardhome
                time="48 minutes ago"
                text="Good evening Participant I hope you're doing well. Here is the hacker guide of the first edition of GDG Hack! Good luck and have a good hacking!  Thank you for your attention."
                link="https://docs.google.com/document/d/1tYlqkAO"
              />
            </div>
            <div className="carousel-item h-full">
              <Cardhome
                time="48 minutes ago"
                text="Good evening Participant I hope you're doing well. Here is the hacker guide of the first edition of GDG Hack! Good luck and have a good hacking!  Thank you for your attention."
                link="https://docs.google.com/document/d/1tYlqkAO"
              />
            </div>
          </div>


        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-16 bg-transparent opacity-20 backdrop-blur-lg flex items-center px-4">
        <img src="/GDGlogo.svg" alt="Logo" className="h-5 ml-4" />
      </div>
    </div>
  );
};
