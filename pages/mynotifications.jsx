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
import ToggleSwitcher from "./components/ToggleSwitcher";
function mynotifications() {
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
            <div className="box w-full px-3 py-7 space-y-6">
              <h1 className="text-3xl font-bold">My Notifications</h1>
              <h2 className="text-2xl font-semibold">General</h2>
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-slate-700 text-lg inline-grid">
                  Comments and replies
                  <span className="text-slate-500 font-normal text-base">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit
                  </span>
                </h1>
                <ToggleSwitcher />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-slate-700 text-lg inline-grid">
                  Messages
                  <span className="text-slate-500 font-normal text-base">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit
                  </span>
                </h1>
                <ToggleSwitcher />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-slate-700 text-lg inline-grid">
                  Mentions
                  <span className="text-slate-500 font-normal text-base">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit
                  </span>
                </h1>
                <ToggleSwitcher />
              </div>
              <hr />
              <h1 className="text-2xl font-semibold">Shares</h1>
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-slate-700 text-lg inline-grid">
                  Shares of my content
                  <span className="text-slate-500 font-normal text-base">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit
                  </span>
                </h1>
                <button className="p-2 text-sm text-slate-600 rounded-md border hover:border-slate-300">
                  Manage
                </button>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-slate-700 text-lg inline-grid">
                  Team Invites
                  <span className="text-slate-500 font-normal text-base">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit
                  </span>
                </h1>
                <button className="p-2 text-sm text-slate-600 rounded-md border hover:border-slate-300">
                  Manage
                </button>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <h1 className="font-medium text-slate-700 text-lg inline-grid">
                  Smart connection
                  <span className="text-slate-500 font-normal text-base">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit
                  </span>
                </h1>
                <button className="p-2 text-sm text-red-600 rounded-md border hover:border-slate-300">
                  Disable
                </button>
              </div>

              <hr />
              <div className="flex justify-end items-center gap-x-3">
                <button className="text-slate-600 border hover:border-slate-300 rounded-md p-2">
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

export default mynotifications;
