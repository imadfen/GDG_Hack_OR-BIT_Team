import React from "react";

import VideoBackground from "@/components/VideoBackground";
function Login() {
  return (
    
    <div className="flex flex-col">
      <VideoBackground/>
      <img src="GDGlogo.svg" className="w-[180px] mt-3 ml-3" alt="" />
      <img src='logo.svg' className='w-[300px] self-center justify-self-center mt-10 mb-6' alt="nothing" />
      <div className="self-senter justify-self-center flex flex-col align-center items-center justify-center border rounded-[30px] md:mx-[35%] mx-24 text-white py-5 px-10">
        <h3 className="font-bold text-[24px] text-white text-center mb-3">
          Let innovation grow <br /> Let ideas Flow
        </h3>
        <h5 className="font-regular text-[16px] text-left self-start my-1 ml-3">
          Username
        </h5>
        <input
          type="text"
          placeholder="User name"
          className="self-start input bordered-20 bg-opacity-[12%] bg-white w-full mb-4"
        />
        <h5 className="font-regular text-[16px] text-left self-start my-1 ml-3">
          Password
        </h5>
        <input
          type="text"
          placeholder="Password"
          className="self-start bg-opacity-[12%] bg-white input bordered-20 w-full"
        />
        <h6 className="text-white font-regular text-[15px] self-end my-3">
          Forgot password?
        </h6>
        <button className="btn btn-wide bg-[#0062D5] text-white mt-4 mb-1 text-[16px]">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
