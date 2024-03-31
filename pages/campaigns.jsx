import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ArrowRight,
  ChevronLeft,
  ListFilter,
  Monitor,
  Plus,
  Search,
} from "lucide-react";
function campaigns() {
  return (
    <main className="flex h-screen ">
      <Sidebar />
      <div className="w-full overflow-y-auto bg-slate-100 ">
        <Nav />
        <div className="px-8 py-6 md:px-5 md:py-7 text-slate-500 space-y-10">
          {/* top part */}
          <div className="md:flex justify-between items-center space-y-5 ">
            <h1 className="text-black font-semibold text-3xl">Campaigns ✨</h1>
            <div className="flex items-center gap-x-2 ">
              <div className="inputbox iconflex">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full border-none outline-none"
                />
              </div>
              <ListFilter className="h-10 w-11 p-1 rounded-md bg-white border hover:border-slate-300 shadow-sm" />
              <button className="flex items-center text-nowrap gap-x-2 text-white font-medium bg-indigo-500 hover:bg-indigo-600 p-2 rounded-md">
                <Plus className="text-indigo-300" />
                Create Campaign
              </button>
            </div>
          </div>
          {/* top part ends here */}
          <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 py-3 ">
            {/* box1 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box2 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box3 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box4 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box5 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box6 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box7 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box8 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box9 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box10 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box11 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
            {/* box12 */}
            <div className="box p-4 space-y-5 ">
              <div className="flex justify-between items-center">
                <Monitor className="h-10 w-10 text-white bg-red-500 p-2 rounded-full" />
                <div className="flex items-center">
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                  <img src="" className="profilebox" />
                </div>
              </div>
              <h1 className="text-black font-semibold text-xl inline-grid">
                Monitor progress in Real Time Value
                <span className="text-base text-slate-600 font-normal">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </span>
              </h1>
              <p className="iconflex text-slate-600 font-medium">
                Jan 20 <ArrowRight className="text-slate-500 h-4 w-5" /> Jan 27
              </p>
              <div className="flex justify-between items-center">
                <button className="text-green-700 rounded-full font-medium bg-green-100 text-sm px-2 py-1">
                  One-Time
                </button>
                <h1 className="iconflex text-indigo-600 cursor-pointer hover:underline hover:text-indigo-700 text-sm">
                  View
                  <ArrowRight className="h-4 w-5" />
                </h1>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="flex gap-x-2 items-center justify-center">
            <ChevronLeft className="h-7 w-7 text-slate-400  " />
          </div>
        </div>
      </div>
    </main>
  );
}

export default campaigns;
