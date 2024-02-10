"use client";
import React from "react";
import UserCard from "./UserCard";

const Progress = ({ data }) => {
  return (
    <div className="text-xl flex items-center justify-center ">
      <ul className="timeline timeline-vertical">
        {data.map((item) => (
          <li key={item.id}>
            {item.id % 2 !== 0 && (
              <div className="timeline-start timeline-box bg-white bg-opacity-15 shadow-md">{item.title}</div>
            )}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {item.id % 2 === 0 && (
              <div className="timeline-end timeline-box bg-white bg-opacity-15 shadow-md">{item.title}</div>
            )}
            <hr className="bg-primary" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
