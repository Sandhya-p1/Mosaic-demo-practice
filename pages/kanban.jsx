import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { Heart, Link, MessageCircle, Plus } from "lucide-react";
function kanban() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="px-4 md:px-7 py-6 text-gray-500 space-y-3">
          <div className="md:flex md:justify-between space-y-2 items-center">
            <h1 className="text-black text-xl font-semibold">
              Acme Inc.Tasks ✨
            </h1>
            <button className="flex items-center px-2 py-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm rounded-md">
              <Plus className="h-4 w-4 text-indigo-300" />
              Add Board
            </button>
          </div>
          {/* list of title */}
          <div className="flex items-center space-x-4 font-medium text-base">
            <h1 className="text-indigo-500  cursor-pointer">View All</h1>
            <h1 className="cursor-pointer">Web Sprint</h1>
            <h1 className="cursor-pointer">Marketing</h1>
            <h1 className="cursor-pointer">Development</h1>
          </div>
          <div className="w-full border border-gray-200" />
          {/* all the contents  */}
          <div className="grid md:grid-cols-4 space-x-3">
            {/* 1st grid */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h1>To Do's 🖋️</h1>
                <Plus className="iconhover blueicon" />
              </div>
              {/* box1 */}
              <box1 className="box p-3 space-y-3 w-full">
                <h1>Managing Teams(book)</h1>
                <p>#7764 created by markus-james</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src="" className="profile" />
                    <img src="" className="profile" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="iconflex">
                      <Heart className="icon iconhover" /> 4
                    </p>
                    <p className="iconflex">
                      <MessageCircle className="icon iconhover" /> 7
                    </p>
                    <Link className="icon iconhover" />
                  </div>
                </div>
              </box1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default kanban;
