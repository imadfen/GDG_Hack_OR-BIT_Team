import React from "react";
import Logo from '../assets/logo.svg'

function Login() {
  return (
    <div className="flex flex-col bg-slate-800">
      <img src={Logo} alt="nothing" />
      <div className="self-senter justify-self-center flex flex-col align-center items-center justify-center border rounded-[30px] md:mx-96 mx-24 text-white py-10 px-16 my-32">
        <h3 className="font-bold text-[36px] text-white text-center mb-6">
          Let innovation grow <br /> Let ideas Flow
        </h3>
        <h5 className="font-regular text-[24px] text-left self-start my-3 ml-2">
          Username
        </h5>
        <input
          type="text"
          placeholder="User name"
          className="self-start input bordered-20 w-full mb-8"
        />
        <h5 className="font-regular text-[24px] text-left self-start my-3 ml-2">
          Password
        </h5>
        <input
          type="text"
          placeholder="Password"
          className="self-start input bordered-20 w-full"
        />
        <h6 className="text-white font-regular text-[15px] self-end my-3">
          Forgot password?
        </h6>
        <button className="btn btn-wide bg-[#0062D5] text-white mt-7 mb-3">
          Login
        </button>
      </div>
      <img src="" alt="" />
    </div>
  );
}

export default Login;
