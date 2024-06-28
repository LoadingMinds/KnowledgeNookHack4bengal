import React from "react";
import Name from "@/../public/icon/name.png";
import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-[500px] h-auto md:h-[475px] bg-[#303030] rounded-[20px] flex flex-col justify-center items-center shadow-2xl shadow-red p-4 mx-7 ">
        <div className="text-3xl md:text-4xl mb-4 text-text font-Poppins font-semibold">
          Log In
        </div>
        <div className="mb-10 text-text font-Poppins font-light text-lg md:text-xl flex items-center">
          New User?
          <Link href="/signup" className="text-red text-Poppins pl-2">Create an account.</Link>
        </div>
        <form className="flex flex-col gap-4 items-center justify-center font-DM_Sans font-medium text-text w-full">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute z-10 left-2 top-1 right-2">
              <Image
                src="/icon/nameicon.svg"
                alt="Description"
                width={30}
                height={30}
              />
            </div>

            <input
              type="text"
              placeholder="Enter your username"
              className="pl-14 w-full p-2 rounded-lg items-center"
            />
          </div>
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute z-10 left-2 top-1 right-2">
              <Image
                src="/icon/email.svg"
                alt="Description"
                width={30}
                height={30}
              />
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="pl-14 w-full  p-2 rounded-lg items-center"
            />
          </div>

          
          <button
            type="submit"
            className="w-[180px] p-2 bg-red text-white rounded-xl font-semibold font-Poppins items-center justify-center mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
