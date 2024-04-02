import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { Plus } from "lucide-react";
function emptystate() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />
      <div className="w-full overflow-y-auto  ">
        <Nav />
        <div className="py-9 px-5 md:py-7 space-y-5">
          <div className="md:flex justify-between items-center space-y-4">
            <h1 className="font-bold text-3xl">Empty State ✨</h1>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 text-white iconflex rounded-md p-2">
              <Plus className="h-6 w-6 text-indigo-300" />
              Add Event
            </button>
          </div>
          <hr />
          <div className="text-center  space-y-4  py-32 ">
            <img
              src="https://e7.pngegg.com/pngimages/29/508/png-transparent-3d-box-cube.png"
              className="h-14 w-14 rounded-full m-auto"
            />
            <h1 className="text-3xl font-bold">
              Pay your bills in just a few clicks
            </h1>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-indigo-500 m-auto font-semibold hover:bg-indigo-600 text-white iconflex rounded-md p-2">
              <Plus className="h-6 w-6 text-indigo-300" />
              Add Event
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default emptystate;
