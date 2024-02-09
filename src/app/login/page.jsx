"use client";

// import { signIn } from 'next-auth/react';
import VideoBackground from "@/components/VideoBackground";
import BluredCard from "@/components/BluredCard";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

function Login() {
  const router = useRouter();

  const credentials = [
    {
      type: "admin",
      username: "admin",
      password: "admin",
    },
    {
      type: "participant",
      username: "orbit",
      password: "orbit",
    },
    {
      type: "mentor",
      username: "mentor",
      password: "mentor",
    },
    {
      type: "judge",
      username: "judge",
      password: "judge",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //onsubmit
  const onSubmit = (data) => {
    console.log(data);
    const user = credentials.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (user.type === "admin") {
      console.log("admin");
      router.push("/dashboard");
    } else if (user.type === "participant") {
      console.log("participant");
      router.push("/teamspace");
    } else if (user.type === "mentor") {
      console.log("mentor");
      router.push("/mentorspace");
    } else if (user.type === "judge") {
      console.log("judge");
      router.push("/judgement");
    }
  };
  // const [errorLogin, setErrorLogin] = useState(false);
  // const router = useRouter();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setErrorLogin(false);
  //   const result = await signIn('credentials', {
  //     username: e.target.username.value,
  //     password: e.target.password.value,
  //     redirect: false,
  //   });

  //   if (result.error) {
  //     setErrorLogin(true)
  //   } else {
  //     router(0);
  //   }
  // };

  return (
    <div className="flex flex-col">
      <VideoBackground />
      <Image
        src="GDGlogo.svg"
        height={40}
        width={180}
        className="w-[180px] mt-3 ml-3"
        alt=""
      />
      <Image
        src="logo.svg"
        height={40}
        width={180}
        className="w-[300px] self-center justify-self-center mt-10 mb-6"
        alt="nothing"
      />
      <BluredCard className="self-senter justify-self-center flex flex-col align-center items-center justify-center border rounded-[30px] md:mx-[35%] mx-24 text-white py-5 px-10">
        <h3 className="font-bold text-[24px] text-white text-center mb-3">
          Let innovation grow <br /> Let ideas Flow
        </h3>
        <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
          <h5 className="font-regular text-[16px] text-left self-start my-1 ml-3">
            Username
          </h5>
          <input
            type="text"
            name="username"
            {...register("username")}
            placeholder="User name"
            className="self-start input bordered-20 bg-opacity-[12%] bg-white w-full mb-4"
          />
          <h5 className="font-regular text-[16px] text-left self-start my-1 ml-3">
            Password
          </h5>
          <input
            type="password"
            name="password"
            {...register("password")}
            placeholder="Password"
            className="self-start bg-opacity-[12%] bg-white input bordered-20 w-full"
          />
          <h6 className="text-white font-regular text-[15px] self-end my-3">
            Forgot password?
          </h6>
          {/* {errorLogin && <span className="text-red-500">can't login</span>} */}
          <button
            type="submit"
            className="btn btn-wide bg-[#0062D5] text-white mt-4 mb-1 text-[16px]"
          >
            Login
          </button>
        </form>
      </BluredCard>
    </div>
  );
}

export default Login;
