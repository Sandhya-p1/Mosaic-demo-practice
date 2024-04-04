import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, User, Users } from "lucide-react";

function step3() {
  const [color, setColor] = useState();
  const handleClick = () => {
    setColor(!color);
  };
  return (
    <div className="flex justify-between h-screen ">
      {/* left side */}
      <div className="w-full px-5 pt-5 h-fit  ">
        {/* nav */}
        <div className="flex  justify-between items-center">
          <Link href="./main">
            <img
              src="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-blue-circle-watercolor-png-image_11601564.png"
              className="profile "
            />
          </Link>
          <Link href="./signin">
            <h1 className="font-medium">
              Have an account?
              <span className="text-indigo-500 hover:text-indigo-600 ">
                Sign In
              </span>
            </h1>
          </Link>
        </div>
        {/* body */}
        <div className="  h-full   flex flex-col items-center gap-y-3 px-14 pt-14">
          <div className="flex items-center py-2 w-full ">
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              1
            </h1>
            <div className="border w-full  border-slate-300" />
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              2
            </h1>
            <div className="border w-full border-slate-300" />
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              3
            </h1>
            <div className="border w-full border-slate-300" />
            <h1 className="px-2 rounded-full bg-slate-100 text-slate-500 font-mono">
              4
            </h1>
          </div>
          <h1 className="text-3xl font-bold pt-7 pb-4 text-nowrap text-black">
            Company information ✨
          </h1>
          <form className="space-y-3 py-2">
            <div className="space-y-1">
              <lablel>
                Company Name <span className="text-red-500">*</span>
              </lablel>
              <input
                type="text"
                className="w-full border rounded-md border-slate-200 outline-none"
                placeholder=""
              />
            </div>
            <div className="flex justify-between items-center gap-x-3">
              <div className="space-y-1">
                <lablel>
                  City <span className="text-red-500">*</span>
                </lablel>
                <input
                  type="text"
                  className="w-full border rounded-md border-slate-200 outline-none"
                  placeholder=""
                />
              </div>
              <div className="space-y-1">
                <lablel>
                  Postal Code <span className="text-red-500">*</span>
                </lablel>
                <input
                  type="text"
                  className="w-full border rounded-md border-slate-300 outline-none"
                  placeholder=""
                />
              </div>
            </div>
            <div className="space-y-1">
              <lablel>
                Street Address <span className="text-red-500">*</span>
              </lablel>
              <input
                type="text"
                className="w-full border rounded-md border-slate-200 outline-none"
                placeholder=""
              />
            </div>
            <div className="space-y-1">
              <label>
                Country<span className="text-red-500">*</span>
              </label>
              <select className="form-select cursor-pointer w-full rounded-md border-slate-300 outline-none ">
                <option selected>USA</option>
                <option>Italy</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </form>

          <div className="flex justify-between items-center w-full">
            <h1 className="iconflex underline cursor-pointer hover:no-underline">
              <ArrowLeft className="h-4 w-4" />
              Back
            </h1>
            <Link href="./step4">
              <button className="bg-indigo-500 hover:bg-indigo-600 px-2 py-[6px] rounded-md text-white iconflex font-medium">
                Next Step <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="h-full overflow-hidden hidden md:inline w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/772/534/non_2x/portrait-of-cheerful-black-male-student-learning-online-in-coffee-shop-young-african-american-man-studies-with-laptop-in-cafe-doing-homework-free-photo.jpeg"
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
}

export default step3;
