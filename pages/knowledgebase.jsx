import React from "react";
import Sidebar from "./components/Sidebar";

import Nav from "./components/Nav";
import { ArrowRight, Search } from "lucide-react";
function knowledgebase() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />
      <div className="w-full overflow-y-auto  ">
        <Nav />
        <div className="space-y-4">
          <div className=" w-full">
            <img
              src="https://wallpapers.com/images/hd/high-resolution-blue-background-1920-x-1200-3to6z1520q9xxomq.jpg"
              className="h-80 w-full object-cover absolute"
            />
            <div className="space-y-4 relative top-0 mx-auto text-center w-1/2 translate-y-full ">
              <h1 className="text-white font-bold text-3xl ">
                👋 What Can We Help You Find?
              </h1>
              <div className="inputbox iconflex  ">
                <Search className="h-5 w-5" />
                <input
                  type="search"
                  className="w-full outline-none border-none"
                />
              </div>
            </div>
          </div>
          <div className="p-10">
            <h1>Popular Topics</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              <div className="space-y-3 bg-gray-100 p-4 rounded-md w-full ">
                <img src="" className="h-10 w-10" />
                <h1 className="text-xl font-semibold">Getting Started</h1>
                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
                <p className="iconflex text-indigo-500">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default knowledgebase;
