import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Box, User, Users } from "lucide-react";
import ToggleSwitcher from "./components/ToggleSwitcher";

function step1() {
  const [color, setColor] = useState();
  const handleClick = () => {
    setColor(!color);
  };
  return (
    <div className="flex justify-between h-screen text-slate-500">
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
        <div className="  h-full relative  flex flex-col items-center gap-y-3 px-14 pt-14">
          <div className="flex items-center py-2 w-full ">
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              1
            </h1>
            <div className="border w-full  border-slate-300" />
            <h1 className="px-2 rounded-full bg-slate-200  font-mono">2</h1>
            <div className="border w-full border-slate-300" />
            <h1 className="px-2 rounded-full bg-slate-100 text-slate-500 font-mono">
              3
            </h1>
            <div className="border w-full border-slate-300" />
            <h1 className="px-2 rounded-full bg-slate-100 text-slate-500 font-mono">
              4
            </h1>
          </div>
          <h1 className="text-3xl font-bold pt-7 pb-4 text-nowrap text-black">
            Tell us what’s your situation ✨
          </h1>
          <div
            className={`${
              color ? "border-indigo-600" : "border-slate-300"
            } border cursor-pointer rounded-md p-6 flex  items-center gap-x-3 w-full`}
            onClick={handleClick}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcA4rVvaM8FKX-CIr6D3yDjnOS_6BFwV9jRP7k1i8Hw&s"
              className="profilebox"
            />
            <h1 className="text-black font-medium">I have a company</h1>
          </div>
          <div
            className={`${
              color ? "border-indigo-600" : "border-slate-300"
            } border cursor-pointer rounded-md p-6 flex  items-center gap-x-3 w-full`}
            onClick={handleClick}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcA4rVvaM8FKX-CIr6D3yDjnOS_6BFwV9jRP7k1i8Hw&s"
              className="profilebox"
            />
            <h1 className="text-black font-medium">
              I’m a freelance / contractor
            </h1>
          </div>
          <div
            className={`${
              color ? "border-indigo-600" : "border-slate-300"
            } border cursor-pointer rounded-md p-6 flex  items-center gap-x-3 w-full`}
            onClick={handleClick}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcA4rVvaM8FKX-CIr6D3yDjnOS_6BFwV9jRP7k1i8Hw&s"
              className="profilebox"
            />
            <h1 className="text-black font-medium">I’m just getting started</h1>
          </div>

          <Link href="./step2">
            <button className="bg-indigo-500 hover:bg-indigo-600 px-2 py-[6px] rounded-md text-white iconflex font-medium right-14 absolute">
              Next Step <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
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

export default step1;
