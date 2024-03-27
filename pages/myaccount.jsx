import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  Cable,
  File,
  List,
  MessageSquareWarning,
  Power,
  User,
} from "lucide-react";
function myaccount() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="text-black py-7 px-4 space-y-4">
          <h1 className="font-bold text-3xl">Account Settings ✨</h1>
          <div className="box rounded-md px-3 py-7 w-full md:flex ">
            {/* left side */}
            <div className=" md:space-y-4 md:w-1/4 md:border md:border-r-slate-300 md:space-x-0  scroll-smooth  overflow-scroll no-scrollbar space-x-4 flex justify-between items-center md:inline">
              {/* business settings */}
              <div className=" space-y-3 ">
                <h2 className="uppercase text-gray-400 md:pb-3 text-xs font-bold">
                  business settings
                </h2>
                <div className="flex gap-x-3  font-medium text-nowrap items-center md:inline md:space-y-2">
                  <p className="text-indigo-500  cursor-pointer iconflex bg-indigo-200 rounded-md p-2">
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
            <div>jelw</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default myaccount;
