import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  Cable,
  Circle,
  File,
  List,
  MessageSquareWarning,
  Minus,
  Power,
  User,
} from "lucide-react";

function givefeedback() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="text-black py-9 px-4 space-y-4">
          <h1 className="font-bold text-3xl">Account Settings ✨</h1>
          <div className="box rounded-md  w-full md:flex ">
            {/* left side */}
            <div className=" md:space-y-6 px-3 py-7 md:w-1/4 md:space-x-0  scroll-smooth  overflow-scroll no-scrollbar space-x-4 flex justify-between items-center md:inline">
              {/* business settings */}
              <div className=" space-y-5 ">
                <h2 className="uppercase text-gray-400 md:pb-3 text-xs font-bold">
                  business settings
                </h2>
                <div className="flex gap-x-3  font-medium text-nowrap items-center md:inline md:space-y-4">
                  <p className="text-indigo-400 w-3/4  cursor-pointer iconflex bg-indigo-100 rounded-md p-2">
                    <User className="h-4 w-4" />
                    My Account
                  </p>
                  <p className="iconflex cursor-pointer">
                    <Power className="icon" />
                    My Notifications
                  </p>
                  <p className="iconflex cursor-pointer">
                    <Cable className="icon" />
                    Connected Apps
                  </p>
                  <p className="iconflex cursor-pointer">
                    <List className="icon" />
                    Plans
                  </p>
                  <p className="iconflex cursor-pointer">
                    <File className="icon" />
                    Billing & Invoices
                  </p>
                </div>
              </div>
              {/* experience */}
              <div className="space-y-3">
                <h1 className="uppercase text-gray-400 text-xs font-bold">
                  experience
                </h1>
                <div className="text-nowrap font-medium">
                  <p className="iconflex cursor-pointer">
                    <MessageSquareWarning className="icon" />
                    Give Feedback
                  </p>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="box w-full px-3 py-7 space-y-6 text-slate-600">
              <h1 className="text-3xl font-bold text-black">Give Feedback</h1>
              <p>
                Our product depends on customer feedback to improve the overall
                experience!
              </p>
              <div className="w-fit">
                <h2 className="font-semibold text-black text-xl">
                  How likely would you recommend us to a friend or colleague?
                </h2>
                <div className="flex items-center">
                  <Circle className="h-12 w-12 text-slate-300" />
                  <div className="border border-slate-400 w-full" />
                  <Circle className="h-12 w-12 text-slate-300" />
                  <div className="border border-slate-400 w-full" />
                  <Circle className="h-12 w-12 text-indigo-500 fill-indigo-500" />
                  <div className="border border-slate-400 w-full" />
                  <Circle className="h-12 w-12 text-slate-300" />
                  <div className="border border-slate-400 w-full" />
                  <Circle className="h-12 w-12 text-slate-300" />
                </div>
                <div className="flex items-center justify-between italic">
                  <h1>Not at all</h1>
                  <p>Extremely likely</p>
                </div>
              </div>
              <h1 className="text-black font-bold text-2xl">
                Tell us in words
              </h1>
              <textarea
                className="p-2 focus:outline-none placeholder:text-slate-400 focus:shadow-sm leading-tight w-full rounded-md border border-slate-200"
                placeholder="I really enjoy..."
                rows={5}
              ></textarea>
              <hr />
              <div className="flex justify-end items-center gap-x-3">
                <button className="text-slate-600 border  hover:border-slate-300 rounded-md p-2">
                  Cancel
                </button>
                <button className="text-white bg-indigo-500 hover:bg-indigo-600 rounded-md p-2 font-medium">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default givefeedback;
