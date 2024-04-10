import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { Dot, EyeOffIcon, Pencil, Plus } from "lucide-react";

import { useState } from "react";

function cards() {
  const [clickBorder, setClickBorder] = useState(false);
  const handleClick = () => {
    setClickBorder(!clickBorder);
  };
  return (
    <main className="flex h-screen bg-white ">
      <Sidebar />
      <div className="w-full overflow-hidden flex flex-col ">
        <Nav />
        <div className=" md:flex justify-between  overflow-y-auto  gap-x-5">
          {/* left side */}
          <div className="space-y-5 py-6 px-4 md:px-5  text-black col-span-2 md:w-2/3">
            <div className="md:flex md:justify-between space-y-3 items-center">
              <h1 className="font-bold text-2xl">Cards ✨</h1>
              <button className="bg-indigo-500 font-medium text-white text-sm flex gap-x-1 items-center hover:bg-indigo-600 px-3 py-2 rounded-md">
                <Plus className="h-5 w-5 text-indigo-200" />
                Add Card
              </button>
            </div>
            {/* list of titles */}
            <div className="flex items-center gap-x-2">
              <button className="text-white font-medium px-3 py-1 shadow-md rounded-2xl bg-indigo-500">
                View All
              </button>
              <button className="optionmenu">Physical Cards</button>
              <button className="optionmenu">Virtual Cards</button>
            </div>
            {/* box1 */}
            <div
              className={` shadow-md border-2 bg-white p-4 flex rounded-md  flex-wrap items-center justify-between ${
                clickBorder ? "border-blue-600" : "border-gray-100"
              } `}
              onClick={handleClick}
            >
              <div className="space-y-2">
                <div className="flex gap-x-4 items-center text-base space-y-3">
                  <img
                    src="https://media.istockphoto.com/id/1351057681/vector/two-opposite-circles-difference.jpg?s=612x612&w=0&k=20&c=Ms3Wyy0YtZBkN1F5P_6sZoy8ljwktGNShboCF5XO3Kk="
                    className="h-10 w-9 object-cover rounded-sm "
                  />
                  <h1>
                    _Metal<p className="text-gray-600 text-xs">**7328</p>
                  </h1>
                </div>
                <h2 className="font-medium md:hidden">Dominik Lamakani</h2>
              </div>

              <h2 className="font-medium hidden md:inline">Dominik Lamakani</h2>

              <div className="space-y-4 flex flex-col items-end">
                <h1 className="text-slate-600">$780,00 / $20,000</h1>
                <h2 className="text-green-400 md:hidden px-3 py-1 font-medium w-fit flex rounded-2xl bg-green-100 text-sm">
                  Active
                </h2>
              </div>
              <h2 className="text-green-500 hidden md:inline px-3 py-1 font-medium w-fit rounded-2xl bg-green-100 text-sm">
                Active
              </h2>
            </div>

            {/* box2 */}
            <div
              className={` shadow-md border-2 bg-white p-4 flex rounded-md  flex-wrap items-center justify-between ${
                clickBorder ? "border-blue-600" : "border-gray-100"
              } `}
              onClick={handleClick}
            >
              <div className="space-y-2">
                <div className="flex gap-x-4 items-center text-base space-y-3">
                  <img
                    src="https://media.istockphoto.com/id/1351057681/vector/two-opposite-circles-difference.jpg?s=612x612&w=0&k=20&c=Ms3Wyy0YtZBkN1F5P_6sZoy8ljwktGNShboCF5XO3Kk="
                    className="h-10 w-9 object-cover rounded-sm "
                  />
                  <h1>
                    _Virtual<p className="text-gray-600 text-xs">**7377</p>
                  </h1>
                </div>
                <h2 className="font-medium md:hidden">Dominik Lamakani</h2>
              </div>

              <h2 className="font-medium hidden md:inline">Dominik Lamakani</h2>

              <div className="space-y-4 flex flex-col items-end">
                <h1 className="text-slate-600">$0 / $20,000</h1>
                <h2 className="text-yellow-600 md:hidden px-3 py-1 font-medium w-fit flex rounded-2xl bg-yellow-100 text-sm">
                  Blocked
                </h2>
              </div>
              <h2 className="text-yellow-600 hidden md:inline px-3 py-1 font-medium w-fit rounded-2xl bg-yellow-100 text-sm">
                Blocked
              </h2>
            </div>
          </div>
          {/* right side */}
          <div className="md:border-l border-t overflow-y-auto  no-scrollbar space-y-6 border-gray-200 bg-gray-50   w-full md:w-[30%] py-9 md:px-7 px-20  text-slate-600">
            <h1 className="text-black font-medium text-center">
              Physical Metal Card Summary
            </h1>
            {/* card section */}
            <div className="border shadow-lg relative border-blue-950 p-4 grid grid-rows-3  md:mx-0 rounded-xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-900 h-48">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqTAU4LQjqmz0RLJYCvsuMDxtzc-Gw3tAgCqdCmwVLuU_HiCGAckEtkXfvbU982qOEIk&usqp=CAU"
                  className=" absolute rounded-full  h-10 w-10 "
                />
              </div>

              <p className="flex justify-between items-center text-slate-300 font-semibold ">
                <span>* * * *</span>
                <span>* * * *</span>
                <span>* * * *</span> 7328
              </p>
              <div className="flex justify-between items-center text-slate-300 font-semibold">
                <h1>EXP 12/24 CVC ***</h1>
                <img
                  src="https://t4.ftcdn.net/jpg/05/86/74/93/360_F_586749312_R2aJgxLdEtmJ1rfuOg8GARLAhgC1G8J4.jpg"
                  className="h-8 w-8 object-contain mix-blend-color-burn "
                />
              </div>
            </div>
            {/* card section ends here */}
            <h1 className="text-black font-medium">Details</h1>

            <div className="space-y-3">
              <p className="flex justify-between items-center ">
                Card Name<span className="text-black">Physical Metal Card</span>
              </p>
              <div className="border border-gray-200 w-full" />
              <p className="flex justify-between items-center ">
                Status
                <span className="text-black flex items-center ">
                  <Dot className="h-8 w-8 text-green-600  fill-green-600" />
                  Active
                </span>
              </p>
              <div className="border border-gray-200 w-full" />
            </div>
            <h2 className="text-black font-medium">Payment Limits</h2>
            <div className="space-y-3">
              <p className="flex justify-between items-center ">
                Spent This Month
                <span className="text-black italic">$750,00 / $1,500.00</span>
              </p>
              <div className="flex">
                <div className="border border-green-500 p-1 rounded-l-sm bg-green-500 w-full" />
                <div className="border border-gray-200 p-1 rounded-r-sm bg-gray-200 w-full" />
              </div>

              <div className="border border-gray-200 w-full" />
            </div>
            <h2 className="text-black font-medium">Withdrawal Limits</h2>
            <div className="space-y-3">
              <p className="flex justify-between items-center ">
                Withdrawn This Month
                <span className="text-black italic">$100,00 / $1,500.00</span>
              </p>
              <div className="flex">
                <div className="border border-green-500 p-1 rounded-l-sm bg-green-500 w-1/6" />
                <div className="border border-gray-200 p-1 rounded-r-sm bg-gray-200 w-full" />
              </div>

              <div className="border border-gray-200 w-full" />
            </div>
            <div className="flex  items-center gap-x-3  ">
              <button className="btn flex items-center justify-center gap-x-1 w-full">
                <Pencil className="icon" /> Edit Card
              </button>
              <button className="btn text-red-600 justify-center flex items-center gap-x-1 w-full">
                <EyeOffIcon className="h-4 w-4 " />
                Block Card
              </button>
            </div>
            {/* try */}

            {/* try */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default cards;
