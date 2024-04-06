import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { TriangleRight } from "lucide-react";
function badge() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-4 py-7 flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold"> Breadcrumb ✨ </h1>
          <hr />
          {/* small */}
          <h1 className="text-2xl font-bold">Basic Small</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-indigo-600 px-3 py-1 text-xs font-medium  rounded-full bg-indigo-100">
              Working on
            </p>
            <p className="text-sky-600 px-3 py-1 text-xs font-medium  rounded-full bg-sky-100">
              Exciting news
            </p>
            <p className="text-green-600 px-3 py-1 text-xs font-medium  rounded-full bg-green-100">
              Product
            </p>
            <p className="text-orange-600 px-3 py-1 text-xs font-medium  rounded-full bg-orange-100">
              Announcement
            </p>
            <p className="text-pink-600 px-3 py-1 text-xs font-medium  rounded-full bg-pink-100">
              Bug Fix
            </p>
            <p className="text-blue-600 px-3 py-1 text-xs font-medium  rounded-full bg-blue-100">
              Customer Stories
            </p>
            <p className="text-slate-600 px-3 py-1 text-xs font-medium  rounded-full bg-slate-100">
              All Stories
            </p>
            <p className="text-white px-3 py-1 text-xs font-medium  rounded-full bg-black">
              All Stories
            </p>
          </div>
          {/* large */}
          <h1 className="text-2xl font-bold">Basic Small</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-indigo-600 px-3 py-2 text-sm font-medium  rounded-full bg-indigo-100">
              Working on
            </p>
            <p className="text-sky-600 px-3 py-2 text-sm font-medium  rounded-full bg-sky-100">
              Exciting news
            </p>
            <p className="text-green-600 px-3 py-2 text-sm font-medium  rounded-full bg-green-100">
              Product
            </p>
            <p className="text-orange-600 px-3 py-2 text-sm font-medium  rounded-full bg-orange-100">
              Announcement
            </p>
            <p className="text-pink-600 px-3 py-2 text-sm font-medium  rounded-full bg-pink-100">
              Bug Fix
            </p>
            <p className="text-blue-600 px-3 py-2 text-sm font-medium  rounded-full bg-blue-100">
              Customer Stories
            </p>
            <p className="text-slate-600 px-3 py-2 text-sm font-medium  rounded-full bg-slate-100">
              All Stories
            </p>
            <p className="text-white px-3 py-2 text-sm font-medium  rounded-full bg-black">
              All Stories
            </p>
          </div>
          {/* with icon */}
          <h1 className="text-2xl font-bold">Basic Small</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-white iconflex px-3 py-1 text-xs font-medium  rounded-full bg-slate-700">
              <TriangleRight className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              Special Offer
            </p>
            <p className="text-white iconflex px-3 py-2 text-sm font-medium  rounded-full bg-slate-700">
              <TriangleRight className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              Special Offer
            </p>
          </div>
          {/* charts */}
          <h1 className="text-2xl font-bold">Basic for Charts</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-white  px-2 py-[2px] text-sm font-medium  rounded-full bg-green-500">
              +29%
            </p>
            <p className="text-white  px-2 py-[2px] text-sm font-medium  rounded-full bg-yellow-500">
              -14%
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default badge;
