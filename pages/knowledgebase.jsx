import React from "react";
import Sidebar from "./components/Sidebar";

import Nav from "./components/Nav";
import { AlertCircle, ArrowRight, ArrowRightIcon, Search } from "lucide-react";
function knowledgebase() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />
      <div className="w-full overflow-y-auto  ">
        <Nav />
        <div className="space-y-4 relative pb-8 ">
          <div className=" w-full relative">
            <img
              src="https://wallpapers.com/images/hd/high-resolution-blue-background-1920-x-1200-3to6z1520q9xxomq.jpg"
              className="h-80 w-full object-cover "
            />
            <div className=" absolute mx-5 sm:mx-7 lg:w-1/2 lg:mx-auto space-y-3 inset-0 flex flex-col  items-center justify-center ">
              <h1 className="text-white font-bold text-3xl text-nowrap ">
                👋 What Can We Help You Find?
              </h1>
              <div className="inputbox  iconflex  ">
                <Search className="h-5 w-5" />
                <input
                  type="search"
                  className="w-full outline-none border-none"
                />
              </div>
            </div>
          </div>
          {/* middle part */}
          <div className="px-4">
            <h1 className="py-5 font-bold text-2xl">Popular Topics</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-1 flex flex-col justify-center items-center bg-gray-100 p-5 rounded-md w-full ">
                <img
                  src="https://www.iconpacks.net/icons/3/free-blue-thumbs-up-icon-11248-thumb.png"
                  className="h-12 w-12 my-3 rounded-full "
                />
                <h1 className="text-xl font-semibold">Getting Started</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit consectetur adipiscing elit sed do.
                </p>
                <p className="iconflex  text-indigo-500 font-medium">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
              <div className="space-y-1 flex flex-col justify-center items-center bg-gray-100 p-5 rounded-md w-full ">
                <img
                  src="https://www.iconpacks.net/icons/3/free-blue-thumbs-up-icon-11248-thumb.png"
                  className="h-12 w-12 my-3 rounded-full "
                />
                <h1 className="text-xl font-semibold">In-app Messaging</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit consectetur adipiscing elit sed do.
                </p>
                <p className="iconflex  text-indigo-500 font-medium">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
              <div className="space-y-1 flex flex-col justify-center items-center bg-gray-100 p-5 rounded-md w-full ">
                <img
                  src="https://www.iconpacks.net/icons/3/free-blue-thumbs-up-icon-11248-thumb.png"
                  className="h-12 w-12 my-3 rounded-full "
                />
                <h1 className="text-xl font-semibold">Apps & Tools</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit consectetur adipiscing elit sed do.
                </p>
                <p className="iconflex  text-indigo-500 font-medium">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
              <div className="space-y-1 flex flex-col justify-center items-center bg-gray-100 p-5 rounded-md w-full ">
                <img
                  src="https://www.iconpacks.net/icons/3/free-blue-thumbs-up-icon-11248-thumb.png"
                  className="h-12 w-12 my-3 rounded-full "
                />
                <h1 className="text-xl font-semibold">Billing & Invoices</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit consectetur adipiscing elit sed do.
                </p>
                <p className="iconflex  text-indigo-500 font-medium">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
              <div className="space-y-1 flex flex-col justify-center items-center bg-gray-100 p-5 rounded-md w-full ">
                <img
                  src="https://www.iconpacks.net/icons/3/free-blue-thumbs-up-icon-11248-thumb.png"
                  className="h-12 w-12 my-3 rounded-full "
                />
                <h1 className="text-xl font-semibold">Support</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit consectetur adipiscing elit sed do.
                </p>
                <p className="iconflex  text-indigo-500 font-medium">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
              <div className="space-y-1 flex flex-col justify-center items-center bg-gray-100 p-5 rounded-md w-full ">
                <img
                  src="https://www.iconpacks.net/icons/3/free-blue-thumbs-up-icon-11248-thumb.png"
                  className="h-12 w-12 my-3 rounded-full "
                />
                <h1 className="text-xl font-semibold">Multimedia / Files</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit consectetur adipiscing elit sed do.
                </p>
                <p className="iconflex  text-indigo-500 font-medium">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
              <div className="space-y-1 flex flex-col justify-center items-center bg-gray-100 p-5 rounded-md w-full ">
                <img
                  src="https://www.iconpacks.net/icons/3/free-blue-thumbs-up-icon-11248-thumb.png"
                  className="h-12 w-12 my-3 rounded-full "
                />
                <h1 className="text-xl font-semibold">App Rewards</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit consectetur adipiscing elit sed do.
                </p>
                <p className="iconflex  text-indigo-500 font-medium">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
              <div className="space-y-1 flex flex-col justify-center items-center bg-gray-100 p-5 rounded-md w-full ">
                <img
                  src="https://www.iconpacks.net/icons/3/free-blue-thumbs-up-icon-11248-thumb.png"
                  className="h-12 w-12 my-3 rounded-full "
                />
                <h1 className="text-xl font-semibold">Contact Us</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit consectetur adipiscing elit sed do.
                </p>
                <p className="iconflex  text-indigo-500 font-medium">
                  Explore <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="px-4">
            <h1 className="py-5 font-bold text-2xl">Popular Guides</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-md p-3 flex gap-x-3">
                <AlertCircle className="h-8 w-8 text-white fill-indigo-500" />
                <div>
                  <h1 className="text-xl font-semibold">
                    Documents For Business Verification
                  </h1>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <button className="iconflex text-indigo-500 py-2 font-medium hover:text-indigo-600">
                    View <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="border rounded-md p-3 flex gap-x-3">
                <AlertCircle className="h-8 w-8 text-white fill-indigo-500" />
                <div>
                  <h1 className="text-xl font-semibold">
                    Close A Mosaic Account
                  </h1>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <button className="iconflex text-indigo-500 py-2 font-medium hover:text-indigo-600">
                    View <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="border rounded-md p-3 flex gap-x-3">
                <AlertCircle className="h-8 w-8 text-white fill-indigo-500" />
                <div>
                  <h1 className="text-xl font-semibold">
                    Update Existing Bank Account Information
                  </h1>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <button className="iconflex text-indigo-500 py-2 font-medium hover:text-indigo-600">
                    View <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="border rounded-md p-3 flex gap-x-3">
                <AlertCircle className="h-8 w-8 text-white fill-indigo-500" />
                <div>
                  <h1 className="text-xl font-semibold">
                    Delayed Or Missing Payouts
                  </h1>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <button className="iconflex text-indigo-500 py-2 font-medium hover:text-indigo-600">
                    View <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default knowledgebase;
