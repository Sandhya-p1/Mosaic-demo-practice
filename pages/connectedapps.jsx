import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ArrowRight,
  Cable,
  Check,
  File,
  List,
  MessageSquareWarning,
  Power,
  RefreshCcw,
  Star,
  User,
} from "lucide-react";

function connectedapps() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="text-black py-9 px-4 space-y-4">
          <h1 className="font-bold text-3xl">Account Settings ✨</h1>
          <div className="box rounded-md  w-full md:flex ">
            {/* left side */}
            <div className=" md:space-y-6 px-3 py-7 md:w-1/4 md:space-x-0  scroll-smooth  overflow-scroll no-scrollbar space-x-4 flex justify-between items-center md:inline">
              {/* business settings */}
              <div className=" space-y-5 ">
                <h2 className="uppercase text-gray-400 md:pb-3 text-xs font-bold">
                  business settings
                </h2>
                <div className="flex gap-x-3  font-medium text-nowrap items-center md:inline md:space-y-4">
                  <p className="text-indigo-400 w-3/4  cursor-pointer iconflex bg-indigo-100 rounded-md p-2">
                    <User className="h-4 w-4" />
                    My Account
                  </p>
                  <p className="iconflex cursor-pointer">
                    <Power className="icon" />
                    My Notifications
                  </p>
                  <p className="iconflex cursor-pointer">
                    <Cable className="icon" />
                    Connected Apps
                  </p>
                  <p className="iconflex cursor-pointer">
                    <List className="icon" />
                    Plans
                  </p>
                  <p className="iconflex cursor-pointer">
                    <File className="icon" />
                    Billing & Invoices
                  </p>
                </div>
              </div>
              {/* experience */}
              <div className="space-y-3">
                <h1 className="uppercase text-gray-400 text-xs font-bold">
                  experience
                </h1>
                <div className="text-nowrap font-medium">
                  <p className="iconflex cursor-pointer">
                    <MessageSquareWarning className="icon" />
                    Give Feedback
                  </p>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="box w-full px-3 py-7 space-y-6 text-slate-600">
              <h1 className="text-3xl font-bold text-black">Connected Apps</h1>
              <div className="flex items-center gap-x-4">
                <h2 className="text-indigo-500">View All</h2>

                <h2>Utility</h2>
                <h2>Marketing</h2>
                <h2>Development</h2>
              </div>
              <hr />
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <div className="box p-5 space-y-4">
                  <div className="flex items-center gap-x-4 ">
                    <img src="" className="profile" />
                    <h1 className="text-black text-lg font-semibold">
                      MaterialStack
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                      <p className="iconflex">
                        <RefreshCcw className="icon" />
                        4K+
                      </p>
                      <p className="text-orange-500 iconflex">
                        <Star className="starorange" />
                        4.7
                      </p>
                    </div>
                    <button className="iconflex font-medium border rounded-md p-2 hover:border-slate-300">
                      <Check className="h-5 w-4 mx-1 text-green-700" />
                      Connected
                    </button>
                  </div>
                </div>
                <div className="box p-5 space-y-4">
                  <div className="flex items-center gap-x-4 ">
                    <img src="" className="profile" />
                    <h1 className="text-black text-lg font-semibold">
                      MaterialStack
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                      <p className="iconflex">
                        <RefreshCcw className="icon" />
                        4K+
                      </p>
                      <p className="text-orange-500 iconflex">
                        <Star className="starorange" />
                        4.7
                      </p>
                    </div>
                    <button className="iconflex font-medium border rounded-md p-2 hover:border-slate-300">
                      <Check className="h-5 w-4 mx-1 text-green-700" />
                      Connected
                    </button>
                  </div>
                </div>
                <div className="box p-5 space-y-4">
                  <div className="flex items-center gap-x-4 ">
                    <img src="" className="profile" />
                    <h1 className="text-black text-lg font-semibold">
                      MaterialStack
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                      <p className="iconflex">
                        <RefreshCcw className="icon" />
                        4K+
                      </p>
                      <p className="text-orange-500 iconflex">
                        <Star className="starorange" />
                        4.7
                      </p>
                    </div>
                    <button className="iconflex font-medium border rounded-md p-2 hover:border-slate-300">
                      <Check className="h-5 w-4 mx-1 text-green-700" />
                      Connected
                    </button>
                  </div>
                </div>
                <div className="box p-5 space-y-4">
                  <div className="flex items-center gap-x-4 ">
                    <img src="" className="profile" />
                    <h1 className="text-black text-lg font-semibold">
                      MaterialStack
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                      <p className="iconflex">
                        <RefreshCcw className="icon" />
                        4K+
                      </p>
                      <p className="text-orange-500 iconflex">
                        <Star className="starorange" />
                        4.7
                      </p>
                    </div>
                    <button className="iconflex font-medium border rounded-md p-2 hover:border-slate-300">
                      <Check className="h-5 w-4 mx-1 text-green-700" />
                      Connected
                    </button>
                  </div>
                </div>
                <div className="box p-5 space-y-4">
                  <div className="flex items-center gap-x-4 ">
                    <img src="" className="profile" />
                    <h1 className="text-black text-lg font-semibold">
                      MaterialStack
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                      <p className="iconflex">
                        <RefreshCcw className="icon" />
                        4K+
                      </p>
                      <p className="text-orange-500 iconflex">
                        <Star className="starorange" />
                        4.7
                      </p>
                    </div>
                    <button className="iconflex font-medium border rounded-md p-2 hover:border-slate-300">
                      <Check className="h-5 w-4 mx-1 text-green-700" />
                      Connected
                    </button>
                  </div>
                </div>
                <div className="box p-5 space-y-4">
                  <div className="flex items-center gap-x-4 ">
                    <img src="" className="profile" />
                    <h1 className="text-black text-lg font-semibold">
                      MaterialStack
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-3">
                      <p className="iconflex">
                        <RefreshCcw className="icon" />
                        4K+
                      </p>
                      <p className="text-orange-500 iconflex">
                        <Star className="starorange" />
                        4.7
                      </p>
                    </div>
                    <button className="iconflex font-medium border rounded-md p-2 hover:border-slate-300">
                      <Check className="h-5 w-4 mx-1 text-green-700" />
                      Connected
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <h1 className="text-2xl text-black font-semibold">
                Trending Categories
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="box p-6 space-y-5">
                  <h1 className="text-black text-lg">Programming</h1>
                  <div className="flex justify-between items-center">
                    <p className="italic">400+ Apps</p>
                    <h2 className="text-indigo-500 hover:text-indigo-600 cursor-pointer iconflex">
                      Explore <ArrowRight className="h-4 w-4" />
                    </h2>
                  </div>
                </div>

                <div className="box p-6 space-y-5">
                  <h1 className="text-black text-lg">Digital Marketing</h1>
                  <div className="flex justify-between items-center">
                    <p className="italic">400+ Apps</p>
                    <h2 className="text-indigo-500 hover:text-indigo-600 cursor-pointer iconflex">
                      Explore <ArrowRight className="h-4 w-4" />
                    </h2>
                  </div>
                </div>

                <div className="box p-6 space-y-5">
                  <h1 className="text-black text-lg">Music & Audio</h1>
                  <div className="flex justify-between items-center">
                    <p className="italic">400+ Apps</p>
                    <h2 className="text-indigo-500  hover:text-indigo-600 cursor-pointer iconflex">
                      Explore <ArrowRight className="h-4 w-4" />
                    </h2>
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

export default connectedapps;
