import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { Check, Circle, Dot, Plus } from "lucide-react";

function roadmap() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />
      <div className="w-full overflow-y-auto  ">
        <Nav />
        <div className="p-8 space-y-5">
          <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold">Roadmap ✨</h1>
            <button className="iconflex bg-indigo-500 text-white font-medium hover:bg-indigo-600 rounded-md p-2">
              <Plus className="h-6 w-6 text-indigo-300" />
              Add Entry
            </button>
          </div>

          <hr className="my-5" />
          <div className="md:w-[65%] w-full py-8 mx-auto ">
            {/* 1st */}
            <div className="md:flex md:space-x-7 py-4  ">
              <h1 className="text-2xl font-bold text-nowrap">2021 Q1</h1>
              <div className="space-y-5">
                <div className="flex items-center gap-x-2">
                  <div className="flex items-center">
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NRhiJfbGzGESfh_0086BkUdzXK4i03gkYm7b8n3UfQ&s"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NRhiJfbGzGESfh_0086BkUdzXK4i03gkYm7b8n3UfQ&s"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile -ml-5 border-2 border-white"
                    />
                  </div>
                  <Dot className="text-green-600 h-4 w-4" />
                  <p className="text-green-700 bg-green-100 text-xs rounded-full p-2">
                    Completed
                  </p>
                </div>
                <div className="flex gap-x-5">
                  <Check className="text-white bg-indigo-500 p-1 rounded-full h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <Check className="text-white bg-indigo-500 p-1 rounded-full h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <Check className="text-white bg-indigo-500 p-1 rounded-full h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <Check className="text-white bg-indigo-500 p-1 rounded-full h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* 2nd */}
            <div className="md:flex md:space-x-7 py-7 ">
              <h1 className="text-2xl font-bold text-nowrap">2021 Q1</h1>
              <div className="space-y-5">
                <div className="flex items-center gap-x-2">
                  <div className="flex items-center">
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NRhiJfbGzGESfh_0086BkUdzXK4i03gkYm7b8n3UfQ&s"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NRhiJfbGzGESfh_0086BkUdzXK4i03gkYm7b8n3UfQ&s"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile -ml-5 border-2 border-white"
                    />
                  </div>
                  <Dot className="text-green-600 h-4 w-4" />
                  <p className="text-green-700 bg-green-100 text-xs rounded-full p-2">
                    Completed
                  </p>
                </div>
                <div className="flex gap-x-5">
                  <Check className="text-white bg-indigo-500 p-1 rounded-full h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <Check className="text-white bg-indigo-500 p-1 rounded-full h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <Circle className="text-slate-500 h-5 w-5" />

                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <Circle className="text-slate-500 h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            {/* 3rd */}

            <div className="md:flex md:space-x-7 py-7 ">
              <h1 className="text-2xl font-bold text-nowrap">2021 Q1</h1>
              <div className="space-y-5">
                <div className="flex items-center gap-x-2">
                  <div className="flex items-center">
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NRhiJfbGzGESfh_0086BkUdzXK4i03gkYm7b8n3UfQ&s"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NRhiJfbGzGESfh_0086BkUdzXK4i03gkYm7b8n3UfQ&s"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile -ml-5 border-2 border-white"
                    />
                  </div>
                  <Dot className="text-green-600 h-4 w-4" />
                  <p className="text-green-700 bg-green-100 text-xs rounded-full p-2">
                    Completed
                  </p>
                </div>

                <div className="flex gap-x-5">
                  <Circle className="text-slate-500 h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <Circle className="text-slate-500 h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            {/* 4th */}

            <div className="md:flex md:space-x-7 py-7 ">
              <h1 className="text-2xl font-bold text-nowrap">2021 Q1</h1>
              <div className="space-y-5">
                <div className="flex items-center gap-x-2">
                  <div className="flex items-center">
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NRhiJfbGzGESfh_0086BkUdzXK4i03gkYm7b8n3UfQ&s"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NRhiJfbGzGESfh_0086BkUdzXK4i03gkYm7b8n3UfQ&s"
                      className="profile -ml-5 border-2 border-white"
                    />
                    <img
                      src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                      className="profile -ml-5 border-2 border-white"
                    />
                  </div>
                  <Dot className="text-green-600 h-4 w-4" />
                  <p className="text-green-700 bg-green-100 text-xs rounded-full p-2">
                    Completed
                  </p>
                </div>
                <div className="flex gap-x-5">
                  <Circle className="text-slate-500 h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <Circle className="text-slate-500 h-5 w-5" />
                  <div className="space-y-1">
                    <h1 className="text-xl font-bold">
                      Product V1 - Early Access
                    </h1>
                    <p className="text-slate-600 text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default roadmap;
