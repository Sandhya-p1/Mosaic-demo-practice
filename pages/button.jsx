import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { Check, Circle, Pencil, Plus, Trash, Trash2 } from "lucide-react";
function button() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="text-black px-5 py-7 space-y-5">
          <h1 className="text-3xl font-bold">Button ✨</h1>
          <hr />
          {/* APPEARANCE */}
          <h1 className="text-black font-bold text-2xl">Appearances</h1>
          <div className="flex items-center flex-wrap gap-2 text-white font-medium cursor-pointer">
            <button className="bg-indigo-500 hover:bg-indigo-600 px-2 py-1 rounded-md">
              Primary
            </button>
            <button className="text-indigo-600 border hover:border-slate-300 px-2 py-1 rounded-md">
              Secondary
            </button>
            <button className="border hover:border-slate-300 text-slate-600 px-2 py-1 rounded-md">
              Tertiary
            </button>
            <button className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md">
              Danger
            </button>
            <button className="text-red-500 hover:border-slate-300 border px-2 py-1 rounded-md">
              Danger
            </button>
            <button className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md">
              Success
            </button>
            <button className="text-green-500 border hover:border-slate-300 px-2 py-1 rounded-md">
              Success
            </button>
          </div>
          <h1 className="text-2xl font-bold">States</h1>
          <div className="flex items-center gap-x-2 font-medium">
            <button className="bg-slate-100 text-slate-400 rounded-md px-2 py-1 border cursor-not-allowed">
              Disabled
            </button>
            <button className="bg-slate-100 iconflex text-slate-400 rounded-md px-2 py-1 border cursor-not-allowed">
              <div className="h-3 w-3 border-solid border-current border-e-transparent   cursor-not-allowed animate-spin border-2 border-slate-500 rounded-full " />
              Loading
            </button>
          </div>
          {/* SIZES */}
          <h1 className="text-2xl font-bold">Sizes</h1>
          <div className="flex items-center gap-x-3 font-medium cursor-pointer text-white">
            <button className="p-1 bg-indigo-500 text-sm hover:bg-indigo-600 rounded-md">
              Button
            </button>
            <button className="p-2 bg-indigo-500 hover:bg-indigo-600 rounded-md">
              Button
            </button>
            <button className="p-3 bg-indigo-500 hover:bg-indigo-600 rounded-md">
              Button
            </button>
            <button className="p-4 bg-indigo-500 hover:bg-indigo-600 rounded-md">
              Button
            </button>
          </div>
          {/* WITH ICON */}
          <h1 className="text-2xl font-bold">Buttons with an Icon</h1>
          <div className="flex items-center gap-3 font-medium cursor-pointer">
            <div className="iconflex  bg-indigo-500 hover:bg-indigo-600 p-2  rounded-md">
              <Plus className="h-6 w-6 text-indigo-300" />
              <h1 className="text-white">Add Event</h1>
            </div>
            <div className="iconflex text-slate-600  border hover:border-slate-300 p-2  rounded-md">
              <Pencil className="h-5 w-5" />
              <h1>Edit Content</h1>
            </div>
            <div className="iconflex  border text-red-500 hover:border-slate-300 p-2  rounded-md">
              <Trash2 className="h-5 w-5" />
              <h1>Delete</h1>
            </div>
          </div>
          {/* Icons Button */}
          <h1 className="text-2xl font-semibold">Icon Buttons</h1>
          <div className="flex items-center gap-x-3 font-medium cursor-pointer ">
            <button className="btn ">
              <Pencil className="h-5 w-5  text-slate-500" />
            </button>
            <button className="btn">
              <Trash2 className="h-5 w-5  text-red-500" />
            </button>
            <button className="btn">
              <Check className="h-5 w-5  text-indigo-500" />
            </button>
          </div>
          {/* BUTTON GROUPS */}
          <h1 className="text-2xl font-semibold">Button Groups</h1>
          <div className="flex items-center gap-x-3 font-medium cursor-pointer ">
            <div className="flex items-center text-white  ">
              <button className="p-2 bg-indigo-600 rounded-l-md ">
                Weekly
              </button>
              <div className="border border-indigo-300 h-10" />
              <button className="p-2 bg-indigo-500 text-indigo-100 hover:bg-indigo-600 ">
                Monthly
              </button>
              <div className="border border-indigo-300 text-indigo-100 h-10" />

              <button className="p-2 bg-indigo-500 hover:bg-indigo-600 rounded-r-md ">
                Yearly
              </button>
            </div>
            <div className="flex items-center">
              <button className="btn text-indigo-500">Weekly</button>
              <button className="btn text-slate-500">Monthly</button>
              <button className="btn text-slate-500">Yearly</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default button;
