import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { ArrowLeft, Dot, Plus } from "lucide-react";
function changelog() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />
      <div className="w-full overflow-y-auto  ">
        <Nav />
        <div className="px-5 py-8 space-y-5">
          <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold">Changelog ✨</h1>
            <button className="iconflex bg-indigo-500 text-white font-medium hover:bg-indigo-600 rounded-md p-2">
              <Plus className="h-6 w-6 text-indigo-300" />
              Add Entry
            </button>
          </div>
          <hr />
          <div className="w-full md:w-[60%] mx-auto space-y-5 ">
            <div className="flex items-center gap-x-2 md:justify-center">
              <button className="text-white font-medium px-3 py-1 rounded-2xl text-sm shadow-sm bg-indigo-500">
                View All
              </button>
              <button className="optionmenu">Announcements</button>
              <button className="optionmenu">Bug Fix</button>
              <button className="optionmenu">Product</button>
              <button className="optionmenu">Exciting News</button>
            </div>
            <div className="md:flex  gap-x-5 ">
              <p className="text-slate-400 font-medium text-sm text-nowrap">
                8 JULY, 2021
              </p>
              <div className="space-y-4 md:mx-10  ">
                <h1 className=" text-3xl font-bold">Released version 2.0</h1>
                <div className="flex gap-x-3 items-center">
                  <img
                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                    className="profilebox"
                  />
                  <h1 className="font-semibold text-base">Simona Lurwer</h1>
                  <Dot className="icon" />
                  <p className="text-green-700 bg-green-100 p-2 rounded-full text-xs">
                    product
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat non proident.
                </p>
              </div>
            </div>
            <hr />
            <div className="md:flex gap-x-5 justify-evenly  ">
              <p className="text-slate-400 font-medium text-sm text-nowrap">
                6 JULY, 2021
              </p>
              <div className="space-y-4 md:mx-10  ">
                <h1 className=" text-3xl font-bold">
                  Feature Name is now public 🎉
                </h1>
                <div className="flex gap-x-3 items-center">
                  <img
                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                    className="profilebox"
                  />
                  <h1 className="font-semibold text-base">Danielle Cohen</h1>
                  <Dot className="icon" />
                  <p className="text-orange-700 bg-orange-100 p-2 rounded-full text-xs">
                    Announcement
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat non proident.
                </p>
              </div>
            </div>
            <hr />
            <div className="md:flex gap-x-5 ">
              <p className="text-slate-400 font-medium text-sm text-nowrap">
                6 JULY, 2021
              </p>
              <div className="space-y-4 md:mx-10  ">
                <h1 className=" text-3xl font-bold">
                  Bugs fixed, issues, and more
                </h1>
                <div className="flex gap-x-3 items-center">
                  <img
                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                    className="profilebox"
                  />
                  <h1 className="font-semibold text-base">Danielle Cohen</h1>
                  <Dot className="icon" />
                  <p className="text-red-700 bg-red-100 p-2 rounded-full text-xs">
                    Announcement
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat non proident.
                </p>
                <div className="space-y-1">
                  <li>E-commerce: Better lorem ipsum generator.</li>
                  <li>E-commerce: Better lorem ipsum generator.</li>
                  <li>E-commerce: Better lorem ipsum generator.</li>
                  <li>E-commerce: Better lorem ipsum generator.</li>

                  <li>E-commerce: Better lorem ipsum generator.</li>
                </div>
              </div>
            </div>
            <hr />
            <div className="md:flex gap-x-5 ">
              <p className="text-slate-400 font-medium text-sm text-nowrap">
                6 JULY, 2021
              </p>
              <div className="space-y-4 md:mx-10 ">
                <h1 className=" text-3xl font-bold">Thanks, everyone 🙌</h1>
                <div className="flex gap-x-3 items-center">
                  <img
                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                    className="profilebox"
                  />
                  <h1 className="font-semibold text-base">Danielle Cohen</h1>
                  <Dot className="icon" />
                  <p className="text-blue-700 bg-blue-100 p-2 rounded-full text-xs">
                    Exciting News
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat non proident.
                </p>
              </div>
            </div>
            <hr />
            <div className="flex gap-x-3 items-center justify-center">
              <button className="iconflex text-slate-300 border border-slate-200 hover:border-slate-300 rounded-md p-2">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>
              <button className="iconflex text-indigo-600 border border-slate-200 hover:border-slate-300 rounded-md p-2">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>
            </div>
            <p className="text-center text-slate-500">
              Showing <span className=" text-black">1</span> to
              <span className=" text-black"> 10</span> of
              <span className=" text-black"> 467</span> results
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default changelog;
