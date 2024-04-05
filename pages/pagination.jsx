import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
function pagination() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-4 py-7 flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold">Modal ✨ </h1>
          <hr />
          {/* option1 */}
          <h1 className="text-2xl font-bold">Option 1</h1>
          <div className="box p-8 space-x-2 text-slate-600 flex items-center w-full justify-center ">
            <ChevronLeft className="border p-2 h-10 w-9  text-slate-300 rounded-md bg-slate-50" />
            <div className="flex">
              <button className="footerbtn text-blue-600 rounded-l-md ">
                1
              </button>
              <button className="footerbtn hover:bg-indigo-600 hover:text-white cursor-pointer ">
                2
              </button>
              <button className="footerbtn hover:bg-indigo-600 hover:text-white cursor-pointer ">
                3
              </button>
              <button className="footerbtn hover:bg-indigo-600 hover:text-white cursor-pointer ">
                ...
              </button>
              <button className="footerbtn rounded-r-md hover:bg-indigo-600 hover:text-white cursor-pointer ">
                9
              </button>
            </div>
            <ChevronRight className="border p-2 h-10 w-9 rounded-md cursor-pointer hover:bg-indigo-600 hover:text-white" />
          </div>
          {/* option2 */}
          <h1 className="text-2xl font-bold">Option 2</h1>
          <div className="box p-8  w-full flex flex-col gap-y-3 items-center  justify-center md:justify-between md:flex-row   ">
            <p className="text-slate-600 hidden md:inline ">
              Showing <span className="text-black">1</span> to
              <span className="text-black">10</span> of
              <span className="text-black">467</span> results
            </p>
            <div className="space-x-3  flex items-center justify-center ">
              <button className="cursor-text iconflex footerbtn text-slate-300 rounded-md">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>
              <button className="cursor-pointer iconflex footerbtn text-indigo-600 hover:border-slate-300 rounded-md">
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="text-slate-600 md:hidden">
              Showing <span className="text-black">1</span> to
              <span className="text-black">10</span> of
              <span className="text-black">467</span> results
            </p>
          </div>
          {/* option3 */}
          <h1 className="text-2xl font-bold">Option 3</h1>
          <div className="box p-8 space-x-2 text-slate-600 flex items-center w-full justify-between ">
            <div className="hidden md:inline">
              <button className="cursor-text iconflex footerbtn text-slate-300 rounded-md">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>
            </div>
            <ArrowLeft className="footerbtn md:hidden h-10 w-10 text-slate-300" />
            <div className="flex items-center gap-x-3 font-medium">
              <p className="text-indigo-600 cursor-text px-3 py-1 rounded-full border border-slate-300">
                1
              </p>
              <p className="hover:text-indigo-500 cursor-pointer">2</p>
              <p className="hover:text-indigo-500 cursor-pointer">3</p>
              <p className=" cursor-text">...</p>
              <p className="hover:text-indigo-500 cursor-pointer">9</p>
            </div>
            <div className="hidden md:inline">
              <button className="cursor-pointer iconflex footerbtn text-indigo-600 hover:border-slate-300 rounded-md">
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <ArrowRight className="footerbtn md:hidden h-10 w-10 text-indigo-600 hover:border-slate-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default pagination;
