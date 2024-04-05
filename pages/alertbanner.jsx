import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  X,
  XCircle,
} from "lucide-react";

function alertbanner() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-5 py-8 flex flex-col gap-y-4">
          <h1 className="text-3xl font-bold">Alert & Banner ✨</h1>
          <hr />
          {/* Banner */}
          <h1 className="text-2xl font-bold">Banner</h1>
          <div className="flex flex-col gap-y-2 w-full text-white text-sm font-medium">
            <div className="bg-orange-400 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-white text-orange-400 h-5 w-5 " />
                We're currently experiencing an increase in inquiries. There may
                be a delay in responses from the Support.
              </h1>
              <X className="text-orange-200 h-6 w-6 cursor-pointer" />
            </div>
            <div className="bg-green-500 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <CheckCircle2 className="fill-green-100 text-green-500 h-5 w-5 " />
                All Systems are operational. Sorry for any inconvenience this
                might cause! .
              </h1>
              <X className="text-green-100 h-5 w-5 cursor-pointer " />
            </div>
            <div className="bg-red-500 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <XCircle className="fill-red-100 text-red-400  h-5 w-5  " />
                Customers are experiencing a delay in withdrawing their funds!
              </h1>
              <X className="text-red-100 h-5 w-5 cursor-pointer" />
            </div>
            <div className="bg-indigo-400 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-indigo-100 text-indigo-400 h-5 w-5   " />
                There are over 200 apps available in the store!
              </h1>
              <X className="text-indigo-100 h-5 w-5 cursor-pointer" />
            </div>
          </div>
          {/* Banner2 */}
          <h1 className="text-2xl font-bold pt-2">Banner 2</h1>
          <div className="flex flex-col gap-y-2 w-full  text-sm ">
            <div className="bg-orange-100 border border-orange-300 text-orange-400 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-orange-500 text-orange-200 h-5 w-5 " />
                We're currently experiencing an increase in inquiries. There may
                be a delay in responses from the Support.
              </h1>
              <X className="text-orange-500 h-6 w-6 cursor-pointer" />
            </div>
            <div className="bg-green-200 border border-green-300 text-green-500 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <CheckCircle2 className="fill-green-500 text-green-200 h-5 w-5 " />
                All Systems are operational. Sorry for any inconvenience this
                might cause! .
              </h1>
              <X className="text-green-500 h-5 w-5 cursor-pointer " />
            </div>
            <div className="bg-red-200 border text-red-500 border-red-300 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <XCircle className="fill-red-500 text-red-200  h-5 w-5  " />
                Customers are experiencing a delay in withdrawing their funds!
              </h1>
              <X className="text-red-500 h-5 w-5 cursor-pointer" />
            </div>
            <div className="bg-indigo-200 border border-indigo-300 text-indigo-500 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-indigo-500 text-indigo-200 h-5 w-5   " />
                There are over 200 apps available in the store!
              </h1>
              <X className="text-indigo-500 h-5 w-5 cursor-pointer" />
            </div>
          </div>
          {/* Toast */}
          <h1 className="text-2xl font-bold">Toast </h1>
          <div className="flex flex-col gap-y-2 w-72 text-white text-sm font-medium">
            <div className="bg-orange-400 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-white text-orange-400 h-5 w-5 " />A
                warning toast.
              </h1>
              <X className="text-orange-200 h-6 w-6 cursor-pointer" />
            </div>
            <div className="bg-green-500 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <CheckCircle2 className="fill-green-100 text-green-500 h-5 w-5 " />
                A successful toast.
              </h1>
              <X className="text-green-100 h-5 w-5 cursor-pointer " />
            </div>
            <div className="bg-red-500 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <XCircle className="fill-red-100 text-red-400  h-5 w-5  " />A
                dangerous toast.
              </h1>
              <X className="text-red-100 h-5 w-5 cursor-pointer" />
            </div>
            <div className="bg-indigo-400 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-indigo-100 text-indigo-400 h-5 w-5   " />
                An informational toast.
              </h1>
              <X className="text-indigo-100 h-5 w-5 cursor-pointer" />
            </div>
          </div>
          {/* Toast 2 */}
          <h1 className="text-2xl font-bold pt-2">Toast 2</h1>
          <div className="flex flex-col gap-y-2 w-72  text-sm ">
            <div className="bg-orange-100 border border-orange-300 text-orange-400 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-orange-500 text-orange-200 h-5 w-5 " />
                A warning toast.
              </h1>
              <X className="text-orange-500 h-6 w-6 cursor-pointer" />
            </div>
            <div className="bg-green-200 border border-green-300 text-green-500 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <CheckCircle2 className="fill-green-500 text-green-200 h-5 w-5 " />
                A successful toast.
              </h1>
              <X className="text-green-500 h-5 w-5 cursor-pointer " />
            </div>
            <div className="bg-red-200 border text-red-500 border-red-300 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <XCircle className="fill-red-500 text-red-200  h-5 w-5  " />A
                dangerous toast.
              </h1>
              <X className="text-red-500 h-5 w-5 cursor-pointer" />
            </div>
            <div className="bg-indigo-200 border border-indigo-300 text-indigo-500 flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-indigo-500 text-indigo-200 h-5 w-5   " />
                An informational toast.
              </h1>
              <X className="text-indigo-500 h-5 w-5 cursor-pointer" />
            </div>
          </div>
          {/* Toast 3 */}
          <h1 className="text-2xl font-bold pt-2">Toast 3</h1>
          <div className="flex flex-col gap-y-2 w-72 text-slate-500  text-sm ">
            <div className=" border  shadow-md flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-orange-500 text-orange-200 h-5 w-5 " />
                A warning toast.
              </h1>
              <X className=" h-5 w-5 cursor-pointer" />
            </div>
            <div className="border shadow-md flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <CheckCircle2 className="fill-green-500 text-green-200 h-5 w-5 " />
                A successful toast.
              </h1>
              <X className=" h-5 w-5 cursor-pointer " />
            </div>
            <div className=" border shadow-md flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <XCircle className="fill-red-500 text-red-200  h-5 w-5  " />A
                dangerous toast.
              </h1>
              <X className=" h-5 w-5 cursor-pointer" />
            </div>
            <div className=" border  shadow-md flex items-center justify-between p-3 gap-x-3">
              <h1 className="flex gap-x-2 items-center  ">
                <AlertCircle className="fill-indigo-500 text-indigo-200 h-5 w-5   " />
                An informational toast.
              </h1>
              <X className=" h-5 w-5 cursor-pointer" />
            </div>
          </div>
          {/* Notification */}
          <h1 className="text-2xl font-bold pt-2">Notification</h1>
          <div className="flex flex-col gap-4 relative md:w-1/2 border border-slate-300 px-3 pt-3 pb-7 rounded-sm shadow-md text-slate-500  text-sm ">
            <div className="flex justify-between">
              <div className="flex gap-x-3">
                <AlertCircle className="fill-orange-500 text-orange-100 h-5 w-5 " />
                <div>
                  <h1 className="text-black font-semibold">
                    Merged Pull Request
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </div>
              </div>
              <X className=" h-5 w-5 cursor-pointer hover:text-slate-600" />
            </div>
            <p className="text-indigo-500 iconflex hover:text-indigo-600 font-medium hover:underline cursor-pointer absolute right-2 pt-5 bottom-2">
              Action <ArrowRight className="h-4 w-5" />
            </p>
          </div>

          <div className="flex flex-col gap-4 md:w-1/2 relative w-fit border border-slate-300 px-3 pt-3 pb-7 rounded-sm shadow-md text-slate-500  text-sm ">
            <div className="flex justify-between">
              <div className="flex gap-x-3">
                <AlertCircle className="fill-indigo-500 text-indigo-200 h-5 w-5   " />

                <div>
                  <h1 className="text-black font-semibold">
                    Merged Pull Request
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </div>
              </div>
              <X className=" h-5 w-5 cursor-pointer hover:text-slate-600" />
            </div>
            <p className="text-indigo-500 iconflex hover:text-indigo-600 font-medium hover:underline cursor-pointer absolute right-2 pt-5 bottom-2">
              Action <ArrowRight className="h-4 w-5 " />
            </p>
          </div>
          <div className="flex flex-col gap-4 relative md:w-1/2 w-fit border border-slate-300 px-3 pt-3 pb-7 rounded-sm shadow-md text-slate-500  text-sm ">
            <div className="flex justify-between">
              <div className="flex gap-x-3">
                <XCircle className="fill-red-500 text-red-200  h-5 w-5  " />
                <div>
                  <h1 className="text-black font-semibold">
                    Merged Pull Request
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </div>
              </div>
              <X className=" h-5 w-5 cursor-pointer hover:text-slate-600" />
            </div>
            <p className="text-indigo-500 iconflex hover:text-indigo-600 font-medium hover:underline cursor-pointer absolute right-2 pt-5 bottom-2">
              Action <ArrowRight className="h-4 w-5" />
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 relative w-fit border border-slate-300 px-3 pt-3 pb-7 rounded-sm shadow-md text-slate-500  text-sm ">
            <div className="flex justify-between">
              <div className="flex gap-x-3">
                <AlertCircle className="fill-orange-500 text-orange-100 h-5 w-5 " />
                <div>
                  <h1 className="text-black font-semibold">
                    Merged Pull Request
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </div>
              </div>
              <X className=" h-5 w-5 cursor-pointer hover:text-slate-600" />
            </div>
            <p className="text-indigo-500 iconflex  font-medium hover:underline hover:text-indigo-600 cursor-pointer absolute right-2 pt-5 bottom-2">
              Action <ArrowRight className="h-4 w-5" />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default alertbanner;
