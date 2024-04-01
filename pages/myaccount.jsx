import React, { useState } from "react";
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
import Link from "next/link";

function myaccount() {
  // const [open, setOpen] = useState();
  // const handleOpen = () => {
  //   setOpen(!open);

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
                  <Link href="/myaccount">
                    <p className="text-indigo-400 w-3/4  cursor-pointer iconflex bg-indigo-100 rounded-md p-2">
                      <User className="h-4 w-4" />
                      My Account
                    </p>
                  </Link>
                  <Link
                    // className={`${path === "/mynotifications" ? "active" : ""}`}
                    href="/mynotifications"
                  >
                    <p className="iconflex cursor-pointer ">
                      <Power className="icon" />
                      My Notifications
                    </p>
                  </Link>
                  <Link href="/connectedapps">
                    <p className="iconflex cursor-pointer">
                      <Cable className="icon" />
                      Connected Apps
                    </p>
                  </Link>
                  <Link href="/plans">
                    <p className="iconflex cursor-pointer">
                      <List className="icon" />
                      Plans
                    </p>
                  </Link>
                  <Link href="/billing&invoices">
                    <p className="iconflex cursor-pointer">
                      <File className="icon" />
                      Billing & Invoices
                    </p>
                  </Link>
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
              <h1 className="text-3xl font-bold">My Account</h1>
              <div className="flex items-center gap-x-4">
                <img src="" className="h-20 w-20 rounded-full" />
                <button className="bg-indigo-500 text-white rounded-md px-2 py-1 font-semibold hover:bg-indigo-600">
                  Change
                </button>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Business Profile</h1>
                <p className="text-slate-400">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit
                </p>
                <div className="flex items-center gap-x-3 py-2 text-slate-600">
                  <h1 className="inline-grid gap-y-2 w-full">
                    Business Name
                    <span className="p-1  border  hover:border-slate-300 rounded-md">
                      Acme Inc.
                    </span>
                  </h1>
                  <h1 className="inline-grid gap-y-2 w-full">
                    Business ID
                    <span className="p-1  border  hover:border-slate-300 rounded-md">
                      Kz4tSEqtUmA
                    </span>
                  </h1>
                  <h1 className="inline-grid gap-y-2 w-full">
                    Location
                    <span className="p-1  border hover:border-slate-300  rounded-md">
                      London, UK
                    </span>
                  </h1>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Email</h1>
                <p className="text-slate-400">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia.
                </p>
                <div className="flex items-center gap-x-2">
                  <button className="p-1  border   hover:border-slate-300 rounded-md">
                    admin@acmeinc.com
                  </button>
                  <button className="p-1  border text-indigo-500   hover:border-slate-300 rounded-md">
                    Change
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Password</h1>
                <p className="text-slate-400">
                  You can set a permanent password if you don't want to use
                  temporary login codes.
                </p>

                <button className="p-1  border text-indigo-500   hover:border-slate-300 rounded-md">
                  Set New Password
                </button>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold">
                  Smart Sync update for Mac
                </h1>
                <p className="text-slate-400">
                  With this update, online-only files will no longer appear to
                  take up hard drive space.
                </p>
                <ToggleSwitcher />
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

export default myaccount;
