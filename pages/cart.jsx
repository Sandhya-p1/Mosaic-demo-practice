import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { ArrowRight, Star, Dot, ArrowLeft } from "lucide-react";

function cart() {
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />

        <div className="lg:flex px-4 py-9 lg:px-44 gap-x-24 space-y-4 text-gray-500">
          {/* -------------left side---------------- */}
          <div className="space-y-3 lg:w-2/3">
            <div className="flex space-x-2 text-base">
              <h1 className="text-indigo-500">Review</h1>
              <ArrowRight className="w-4" />
              <h1>Payment</h1>
              <ArrowRight className="w-4" />
              <h1>Confirm</h1>
            </div>
            <h2 className="font-bold text-4xl text-gray-800 pb-5">
              Shopping Cart (3) ✨
            </h2>
            <div className="space-y-6">
              {/* ---------Complete Front-end Course--------- */}
              <div className="lg:flex gap-x-4 space-y-4 lg:items-center">
                <img
                  src="https://images.unsplash.com/photo-1441015401724-70d16b783f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                  className=" lg:w-4/12 w-2/5  rounded-sm"
                />
                <div className="space-y-3 ">
                  <h1 className="font-semibold text-xl text-black">
                    The Complete Front-End Development Course!
                  </h1>
                  <p className="text-slate-500 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray " />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                      <Dot />
                      <h1 className="py-1 px-2 text-green-700 bg-green-200 rounded-3xl">
                        $89.00
                      </h1>
                    </div>
                    <p className="underline hover:no-underline">Remove</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200" />
              {/* --------web develoopment course------ */}
              <div className="lg:flex gap-x-4 space-y-4 lg:items-center">
                <img
                  src="https://images.unsplash.com/photo-1441015401724-70d16b783f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                  className=" lg:w-4/12 w-2/5  rounded-sm"
                />
                <div className="space-y-3 ">
                  <h1 className="font-semibold text-xl text-black">
                    Web Development Ultimate Course 2021
                  </h1>
                  <p className="text-slate-500 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray " />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                      <Dot />
                      <h1 className="py-1 px-2 text-green-700 bg-green-200 rounded-3xl">
                        $89.00
                      </h1>
                    </div>
                    <p className="underline hover:no-underline">Remove</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200" />
              {/* ---------Full-Stack Course--------- */}
              <div className="lg:flex gap-x-4 space-y-4 lg:items-center">
                <img
                  src="https://images.unsplash.com/photo-1441015401724-70d16b783f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                  className=" lg:w-4/12 w-2/5  rounded-sm"
                />
                <div className="space-y-3 ">
                  <h1 className="font-semibold text-xl text-black">
                    Full-Stack JavaScript Course!{" "}
                  </h1>
                  <p className="text-slate-500 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray " />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                      <Dot />
                      <h1 className="py-1 px-2 text-green-700 bg-green-200 rounded-3xl">
                        $89.00
                      </h1>
                    </div>
                    <p className="underline hover:no-underline">Remove</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200" />
              <p className="text-indigo-500 gap-x-1 leading-tight lg:justify-start cursor-pointer flex justify-center font-semibold items-center ">
                <ArrowLeft className="w-4 " /> Back To Shopping
              </p>
            </div>
          </div>

          {/* -----------------right side----------------- */}
          <div className="box p-4 h-fit space-y-5">
            <h1 className="text-lg font-semibold pb-2">Order Summary</h1>
            <div className="flex justify-between items-center">
              <h1>Products & Subscriptions</h1>
              <p className="font-semibold">$205</p>
            </div>
            <div className="border border-gray-200" />
            <div className="flex justify-between items-center">
              <h1>Shipping</h1>
              <p className="font-semibold">-</p>
            </div>
            <div className="border border-gray-200" />
            <div className="flex justify-between items-center">
              <h1>Taxes</h1>
              <p className="font-semibold">$48</p>
            </div>
            <div className="border border-gray-200" />

            <div className="flex justify-between items-center">
              <h1>Total due (including taxes)</h1>
              <p className="font-semibold text-green-700">$253</p>
            </div>
            <div className="border border-gray-200" />

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h1 className="text-gray-700 font-medium">Promo Code</h1>
                <p className="text-gray-400 italic">optional</p>
              </div>
              <input
                type="text"
                placeholder=""
                className="p-2 rounded-md border-gray-200 outline-none  border bg-white w-full"
              />
              <button className="p-2 cursor-not-allowed  w-full justify-center bg-gray-100 text-gray-400 font-medium border border-gray-200 outline-none rounded-md">
                Apply Code
              </button>
            </div>
            <button className="bg-indigo-500 text-white font-medium rounded-md text-center p-2 w-full hover:bg-indigo-600">
              Buy Now - $253.00
            </button>
            <h1 className="text-sm italic text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <p className="underline hover:no-underline italic text-sm cursor-pointer">
                Terms
              </p>
            </h1>
          </div>

          {/* --------------------------------------------------------------------- */}
        </div>
      </div>
    </main>
  );
}

export default cart;
