import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import {
  ChevronDown,
  ChevronUp,
  ListFilter,
  Check,
  MessageCircleMore,
  Dot,
} from "lucide-react";
import { Checkbox } from "@material-tailwind/react";
function dropdown() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-4 py-7 flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold">Modal ✨ </h1>
          <hr />

          {/* Classic DropDown */}
          <h1 className="text-3xl font-bold">Classic Dropdown</h1>

          <div className="border rounded-md font-medium flex p-2 w-36 justify-between items-center text-slate-500">
            <h1>Last 7 Days</h1>
            {show ? (
              <ChevronUp
                className="h-4 w-4 cursor-pointer "
                onClick={handleShow}
              />
            ) : (
              <ChevronDown
                className="h-4 w-4 cursor-pointer"
                onClick={handleShow}
              />
            )}
          </div>
          {show && (
            <ul className="border -mt-4  cursor-pointer px-4 py-2 space-y-1 rounded-sm shadow-md w-36">
              <li>Today</li>
              <li>Last 7 Days</li>
              <li>Last Month </li>
              <li>Last 12 Months</li>
              <li>All Time</li>
            </ul>
          )}
          {/* Full-width DropDown */}
          <h1 className="text-3xl font-bold">Full-width Dropdown</h1>

          <div className="border rounded-md font-medium flex p-2 w-52 justify-between items-center text-slate-500">
            <h1>Most Popular</h1>
            {show ? (
              <ChevronUp
                className="h-4 w-4 cursor-pointer "
                onClick={handleShow}
              />
            ) : (
              <ChevronDown
                className="h-4 w-4 cursor-pointer"
                onClick={handleShow}
              />
            )}
          </div>
          {/* {show && (
            <ul className="border -mt-4  cursor-pointer px-4 py-2 space-y-1 rounded-sm shadow-md w-36">
              <li>Most Popular</li>
              <li>Last 7 Days</li>
              <li>Last Month </li>
              <li>Last 12 Months</li>
              <li>All Time</li>
            </ul>
          )} */}
          {/* Filter */}
          <h1 className="text-3xl font-bold">Filter</h1>

          <div className="border rounded-md w-fit p-2">
            <ListFilter
              className="h-6 w-6 cursor-pointer"
              onClick={handleShow}
            />
          </div>
          {show && (
            <div className="border -mt-4 transition-all ease-linear duration-200 rounded-sm shadow-md w-60">
              <div className=" p-2">
                <h1 className="uppercase text-sm text-slate-400 font-medium">
                  filters
                </h1>
                <ul>
                  <li className="flex items-center">
                    <Checkbox className="h-4 w-4" checked /> Direct Vs Indirect
                  </li>
                  <li className="flex items-center">
                    <Checkbox className="h-4 w-4" checked /> Real Time Value
                  </li>
                  <li className="flex items-center">
                    <Checkbox className="h-4 w-4" checked /> Top Channels
                  </li>
                  <li className="flex items-center">
                    <Checkbox className="h-4 w-4" /> Sales VS Refunds
                  </li>
                  <li className="flex items-center">
                    <Checkbox className="h-4 w-4" /> Last Order
                  </li>
                  <li className="flex items-center">
                    <Checkbox className="h-4 w-4" /> Total Spent
                  </li>
                </ul>
              </div>
              <hr />
              <div className="flex justify-between items-center p-2">
                <button className="border rounded-md p-1 text-slate-500">
                  Clear
                </button>
                <button className="border rounded-md text-sm font-medium p-1 text-white bg-indigo-500 hover:bg-indigo-600">
                  Apply
                </button>
              </div>
            </div>
          )}
          {/* Profile */}
          <h1 className="text-3xl font-bold">Profile</h1>
          <div className="flex items-center gap-x-1">
            <img
              src="https://w7.pngwing.com/pngs/651/825/png-transparent-round-blue-arrow-logo-button-arrow-next-button-blue-trademark-internet-thumbnail.png"
              className="profilebox"
            />
            <h1 className="font-semibold text-lg">Acme Inc.</h1>
            <ChevronDown
              className="h-5 w-5 text-slate-500 cursor-pointer"
              onClick={handleShow}
            />
          </div>
          {show && (
            <div className="border transition-all ease-linear duration-300 shadow-md rounded-sm w-44 -mt-4 space-y-2">
              <h1 className="text-black p-2 font-medium inline-grid">
                Acme Inc.
                <span className="text-slate-400 text-xs font-normal italic">
                  Administrator
                </span>
              </h1>
              <hr />
              <p className="text-indigo-600 cursor-pointer px-2">Settings</p>
              <p className="text-indigo-600 cursor-pointer px-2 pb-2">
                Sign Out
              </p>
            </div>
          )}
          {/* switch account */}
          <h1 className="text-3xl font-bold">Switch Account</h1>
          <div className="flex items-center gap-x-1">
            <img
              src="https://w7.pngwing.com/pngs/651/825/png-transparent-round-blue-arrow-logo-button-arrow-next-button-blue-trademark-internet-thumbnail.png"
              className="profilebox"
            />
            <h1 className="font-semibold text-lg">Acme Inc.</h1>
            <ChevronDown
              className="h-5 w-5 text-slate-500 cursor-pointer"
              onClick={handleShow}
            />
          </div>
          {show && (
            <div className="border transition-all p-3 ease-linear duration-300 shadow-md rounded-sm w-48 -mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <h1 className="iconflex">
                  <img
                    src="https://w7.pngwing.com/pngs/651/825/png-transparent-round-blue-arrow-logo-button-arrow-next-button-blue-trademark-internet-thumbnail.png"
                    className="profilebox"
                  />
                  Acme Inc.
                </h1>
                <Check className="h-5 w-5 text-indigo-500" />
              </div>
              <h1 className="iconflex">
                <img
                  src="https://w7.pngwing.com/pngs/651/825/png-transparent-round-blue-arrow-logo-button-arrow-next-button-blue-trademark-internet-thumbnail.png"
                  className="profilebox"
                />
                Acme Limited
              </h1>
              <h1 className="iconflex">
                <img
                  src="https://w7.pngwing.com/pngs/651/825/png-transparent-round-blue-arrow-logo-button-arrow-next-button-blue-trademark-internet-thumbnail.png"
                  className="profilebox"
                />
                Acme Srl
              </h1>
            </div>
          )}
          {/* notification */}
          <h1 className="text-3xl font-bold">Notification </h1>
          <div className="relative w-fit cursor-pointer ">
            <MessageCircleMore className="h-8 w-8 p-1  bg-slate-200 rounded-full" />
            <p className=" border  bg-red-600 border-white  p-1  rounded-full  absolute top-0  -right-1"></p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default dropdown;
