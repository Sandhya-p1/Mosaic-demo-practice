import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";

function calendar() {
  return (
    <main className="flex h-screen ">
      <Sidebar />
      <div className="w-full overflow-y-auto bg-slate-100 ">
        <Nav />
        <div className="p-7 space-y-4 text-slate-600">
          {/* top part */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">March 2024 ✨</h1>
            <div className="flex items-center gap-x-3 cursor-pointer">
              <ChevronLeft className="h-9 w-11 p-1 text-slate-500 bg-white border shadow-sm rounded-md" />
              <ChevronRight className="h-9 w-11 text-slate-500 p-1 bg-white border shadow-sm rounded-md" />
              <div className="h-8 border border-slate-200" />
              <button className="px-3 py-2 iconflex bg-indigo-500 hover:bg-indigo-600 font-medium rounded-md text-white">
                <Plus className="text-indigo-400 h-5 w-5" />
                Create Event
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 flex-wrap ">
              <h1 className="calendarbtn">
                <span className="border-blue-500 border h-4 p-[2px] m-1 bg-blue-500" />
                Acme Inc.
              </h1>
              <h1 className="calendarbtn">
                <span className="border-green-500 border h-4 p-[2px] m-1 bg-green-500" />
                Life & Family
              </h1>
              <h1 className="calendarbtn">
                <span className="border-sky-500 border h-4 p-[2px] m-1 bg-sky-500" />
                Acme Inc.
              </h1>
              <h1 className="calendarbtn">
                <span className="border-red-500 border h-4 p-[2px] m-1 bg-red-500" />
                Events
              </h1>
              <h1 className="calendarbtn">
                <span className="border-orange-500 border h-4 p-[2px] m-1 bg-orange-500" />
                Misc
              </h1>
              <h1 className="calendarbtn text-indigo-500">Add New</h1>
            </div>
            <div className="flex items-center shadow-sm">
              <h1 className="box p-2 text-indigo-500">Month</h1>
              <h1 className="box p-2">Week</h1>
              <h1 className="box p-2">Day</h1>
            </div>
          </div>
          {/* body part */}
          <div className="grid grid-cols-7 box text-center ">
            <h2 className="py-2">Sun</h2>
            <h2 className="py-2">Mon</h2>
            <h2 className="py-2">Tue</h2>
            <h2 className="py-2">Wed</h2>
            <h2 className="py-2">Thu</h2>
            <h2 className="py-2">Fri</h2>
            <h2 className="py-2">Sat</h2>
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className="  h-28 space-y-1 p-2  border border-slate-300">
              <h1 className="bg-sky-500 text-white  rounded-md p-1 text-xs">
                Meeting..
                <br />
                10:00 A...
              </h1>
              <p className="bg-blue-800 rounded-md text-white">Reserva..</p>
              <p className="text-end text-black pt-2">1</p>
            </div>
            <div className="  h-28 p-2 border border-slate-300">
              <p className="text-right pt-20 text-black  ">2</p>
            </div>
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
            <div className=" bg-gray-200 h-28  border border-slate-300" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default calendar;
