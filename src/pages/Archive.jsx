import React from 'react';
import { ArchiveCard } from '../components/ArchiveCard';
import Card from '../components/Card';

export const Archive = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen h-min-[100vh]"
      style={{ backgroundImage: `url("/bgONE.png")` }}
    >
      <img
        src="/HackFlow.svg"
        alt=""
        className="h-10 w-auto absolute top-0 left-0 ml-4 mt-4"
      />
      <div className="absolute items-center top-[90px] w-[65%] h-[50%] flex flex-col justify-between">
        <div className="flex-1 justify-self-start self-start flex flex-row justify-between gap-5 items-center">
          <button className="justify-self-start">
            <img src="/BackArrowLeft.png" alt="" />
          </button>
          <h1 className="text-white text-2xl self-center justify-self-end">
            Archive
          </h1>
        </div>
        <div className="carousel w-full">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              id={`slide${index}`}
              className="carousel-item relative w-full flex flex-col items-center"
            >
              <Card>
                <div className="flex flex-col justify-center items-center">
                  <h5>hello {index}</h5>
                  <button
                    type="button"
                    className="flex-1 justify-center z-2 rounded bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white w-[15%]"
                  >
                    See more
                  </button>
                </div>
                <div className="flex justify-between transform self-center mb-16">
                  {/* Navigation Buttons */}
                  <a
                    href={`#slide${index === 0 ? 7 : index - 1}`} // Adjust for first slide
                    className="btn btn-circle -ml-16"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${index === 7 ? 0 : index + 1}`} // Adjust for last slide
                    className="btn btn-circle -mr-16"
                  >
                    ❯
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/GdgLogo.svg"
        className="h-5 w-auto absolute bottom-5 left-5 ml-5 mb-0"
      />
    </div>
  );
};
