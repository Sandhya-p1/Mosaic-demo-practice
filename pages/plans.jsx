import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ArrowRight,
  Cable,
  Check,
  File,
  List,
  MessageSquareWarning,
  Power,
  RefreshCcw,
  Star,
  User,
} from "lucide-react";
import ToggleSwitcher from "./components/ToggleSwitcher";

function plans() {
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
            <div className="box w-full px-3 py-7 space-y-5 text-slate-600">
              <h1 className="text-3xl font-bold text-black">Plans</h1>
              <p>
                This workspace’s Basic Plan is set to $34 per month and will
                renew on July 9, 2021.
              </p>
              <div className="flex items-center gap-x-3">
                <p>Monthly</p>
                <ToggleSwitcher />
                <p>
                  Annually<span className="text-green-500"> (-20%)</span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="border shadow-md border-t-4 rounded-md border-t-green-600 p-5 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <img src="" className="profilebox" />
                    <h1 className="text-lg text-black font-medium">Basic</h1>
                  </div>
                  <p>
                    Ideal for individuals that need a custom solution with
                    custom tools.
                  </p>
                  <h2 className="text-2xl font-bold text-black">
                    $14<span className="text-sm text-slate-500">/mo</span>
                  </h2>
                  <button className="text-center w-full p-2 border hover:border-slate-300">
                    Downgrade
                  </button>
                  <hr />
                  <h1 className="uppercase text-sm font-medium text-slate-800">
                    What's included
                  </h1>
                  <ul className="text-sm space-y-2">
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>
                <div className="border shadow-md border-t-4 rounded-md border-t-sky-400 p-5 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <img src="" className="profilebox" />
                    <h1 className="text-lg text-black font-medium">Standard</h1>
                  </div>
                  <p>
                    Ideal for individuals that need a custom solution with
                    custom tools.
                  </p>
                  <h2 className="text-2xl font-bold text-black">
                    $14<span className="text-sm text-slate-500">/mo</span>
                  </h2>
                  <button className="text-center w-full p-2 border hover:border-slate-300">
                    Downgrade
                  </button>
                  <hr />
                  <h1 className="uppercase text-sm font-medium text-slate-800">
                    What's included
                  </h1>
                  <ul className="text-sm space-y-2">
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>
                <div className="border shadow-md border-t-4 rounded-md border-t-sky-600 p-5 space-y-4">
                  <div className="flex items-center gap-x-3">
                    <img src="" className="profilebox" />
                    <h1 className="text-lg text-black font-medium">Plus</h1>
                  </div>
                  <p>
                    Ideal for individuals that need a custom solution with
                    custom tools.
                  </p>
                  <h2 className="text-2xl font-bold text-black">
                    $14<span className="text-sm text-slate-500">/mo</span>
                  </h2>
                  <button className="text-center w-full p-2 text-white rounded-md bg-indigo-500 hover:bg-indigo-600 ">
                    Upgrade
                  </button>
                  <hr />
                  <h1 className="uppercase text-sm font-medium text-slate-800">
                    What's included
                  </h1>
                  <ul className="text-sm space-y-2">
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                    <li className="iconflex">
                      <Check className="h-4 w-4 text-green-700" />
                      Lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-indigo-200  bg-indigo-100 text-center p-3 space-y-3 md:flex md:justify-between md:items-center">
                <h1 className="text-black text-sm font-medium">
                  Looking for different configurations?
                </h1>
                <button className="text-white bg-indigo-500 text-sm p-2 rounded-md hover:bg-indigo-600 font-medium">
                  Contact Sales
                </button>
              </div>
              <h1 className="text-2xl text-black font-bold py-2">FAQs</h1>
              <h1 className="text-black font-medium inline-grid">
                What is the difference between the three versions?
                <span className="text-slate-600 font-normal">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit.
                </span>
              </h1>
              <h1 className="text-black font-medium inline-grid">
                Is there any difference between Basic and Plus licenses?
                <span className="text-slate-600 font-normal">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit.
                </span>
              </h1>
              <h1 className="text-black font-medium inline-grid">
                Got more questions?
                <span className="text-slate-600 font-normal">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit.
                </span>
              </h1>
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

export default plans;
