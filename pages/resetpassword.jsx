import { Check } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Checkbox } from "rsuite";

function signup() {
  return (
    <div className="md:flex md:overflow-hidden  relative">
      <Link href="./main">
        <img
          src="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-blue-circle-watercolor-png-image_11601564.png"
          className="profile m-4"
        />
      </Link>
      {/* left side */}
      <div className="space-y-5 md:w-1/4 w-1/2 mx-auto flex flex-col items-center justify-center translate-y-32 md:translate-y-0">
        <h1 className="font-bold text-4xl  text-nowrap">Welcome back! ✨</h1>
        <form className="w-full space-y-4 relative ">
          <div className="flex flex-col space-y-1">
            <label className="text-slate-600 font-medium">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder=""
              className="border bg-white rounded-md px-3 py-2 outline-none"
            />
          </div>

          <button className="text-white py-2 px-3 absolute right-0 rounded-md hover:bg-indigo-600  bg-indigo-500 cursor-pointer">
            Sign In
          </button>
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

export default signup;
