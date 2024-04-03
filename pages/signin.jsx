import { Check } from "lucide-react";
import React from "react";
import Link from "next/link";

function signin() {
  return (
    <div className="md:flex md:overflow-hidden  relative">
      <Link href="./main">
        <img
          src="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-blue-circle-watercolor-png-image_11601564.png"
          className="profile m-4"
        />
      </Link>
      {/* left side */}
      <div className="space-y-5 md:w-1/4 w-1/2 mx-auto flex flex-col items-center translate-y-[20%] ">
        <h1 className="font-bold text-4xl  text-nowrap">Welcome back! ✨</h1>
        <form className="w-full space-y-4 ">
          <div className="flex flex-col space-y-1">
            <label className="text-slate-600 font-medium">Email Address</label>
            <input
              type="email"
              placeholder=""
              className="border bg-white rounded-md px-3 py-2"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-slate-600 font-medium">Password</label>
            <input
              type="passsword"
              placeholder=""
              className="border bg-white rounded-md px-3 py-2"
            />
          </div>
          <div className="flex justify-between items-center py-2">
            <h1 className="text-slate-600 underline underline-offset-1 cursor-pointer hover:no-underline">
              Forgot Password?
            </h1>
            <button className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-medium ">
              Sign In
            </button>
          </div>
          <hr />
          <p className="text-slate-600">
            Don’t you have an account?
            <span className="text-indgio-500  text-indigo-500 cursor-pointer">
              Sign Up
            </span>
          </p>
          <p className="p-2 rounded-md text-amber-700 bg-amber-100  leading-tight flex gap-x-1">
            <Check className="h-6 w-6" /> To support you during the pandemic
            super pro features are free until March 31st.
          </p>
        </form>
      </div>
      {/* right side */}
      <img
        src="https://img.freepik.com/premium-photo/portrait-successful-business-woman-using-digital-tablet_623487-876.jpg"
        className="h-screen hidden md:inline w-[40%] object-cover"
      />
      <img
        src="https://png.pngtree.com/png-clipart/20230112/original/pngtree-transparent-blue-arrow-pointing-left-png-image_8906313.png"
        className="absolute top-[40%] left-[55%] h-40 w-40 hidden md:inline"
      />
    </div>
  );
}

export default signin;
