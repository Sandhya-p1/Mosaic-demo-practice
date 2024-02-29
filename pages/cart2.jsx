import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { ArrowRight, Star, Dot, ArrowLeft } from "lucide-react";

function cart2() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="lg:flex lg:gap-x-16 h-full flex-grow ">
          {/* -------------left side---------------- */}
          <div className=" px-4 py-9 lg:px-12 space-y-3 overflow-auto  lg:w-[65%]  no-scrollbar  text-gray-500">
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

          {/* ----------right side---------------- */}
          <div className="border-l shadow-md lg:w-[30%] w-full   space-y-5 overflow-auto no-scrollbar text-gray-500 bg-white p-7 mt-10 lg:mt-0">
            <h1 className="text-black font-bold text-3xl ">Reveiw & Pay</h1>
            <p className="font-medium text-xl text-black ">Order Summary</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h1>Subtotal</h1>
                <p className="text-gray-800 font-medium">$205</p>
              </div>
              <div className="border border-gray-100" />
              <div className="flex justify-between items-center">
                <h1>Total due (including taxes)</h1>
                <p className="text-green-700 font-medium">$253</p>
              </div>
              <div className="border border-gray-100" />
            </div>
            <h1 className="font-semibold text-lg text-black">
              Payment Details
            </h1>
            <div className="space-y-1">
              <h2 className="flex gap-x-1 text-gray-800">
                Card Number
                <Star className="text-red-500 fill-red-500 w-2  " />
              </h2>
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                className="p-2 outline-none rounded-md border border-gray-200 hover:border-slate-300 shadow-md placeholder:text-gray-400 bg-white w-full"
              />
            </div>
            <div className="space-x-4 flex items-center">
              <div className="space-y-1">
                <h1 className="flex gap-x-1 text-gray-800">
                  Expiry Date <Star className="text-red-500 fill-red-500 w-2" />
                </h1>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="p-2 border border-gray-200 bg-white shadow-sm hover:border-slate-300 outline-none rounded-md placeholder:text-gray-400 w-full"
                />
              </div>
              <div className="space-y-1">
                <h1 className="flex gap-x-1 text-gray-800">
                  CVC <Star className="text-red-500 fill-red-500 w-2" />
                </h1>
                <input
                  type="text"
                  placeholder="CVC"
                  className="p-2 border border-gray-200 bg-white shadow-sm hover:border-slate-300 outline-none rounded-md placeholder:text-gray-400 w-full"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-gray-800 flex gap-x-1">
                Name on Card <Star className="text-red-500 fill-red-500 w-2" />
              </h1>
              <input
                type="text"
                placeholder="Sandhya Pandey"
                className="p-2 border bg-white shadow-sm border-gray-200 outline-none w-full rounded-md hover:border-slate-300"
              />
            </div>
            <h1>Additional Details</h1>
            <div className="space-y-1">
              <h1 className="text-gray-800 flex gap-x-1">
                Email <Star className="text-red-500 fill-red-500 w-2" />
              </h1>
              <input
                type="email"
                placeholder="sandhya@company.com"
                className="p-2 border bg-white shadow-sm border-gray-200 outline-none w-full rounded-md hover:border-slate-300"
              />
            </div>
            <div className="space-y-1">
              <h1 className="text-gray-800 flex gap-x-1">
                Country <Star className="text-red-500 fill-red-500 w-2" />
              </h1>
              <select className="bg-white text-black p-2 pr-4 w-full rounded-md border border-gray-200 outline-none hover:border-slate-300">
                <option selected>Italy</option>
                <option>USA</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <button className="p-2 text-center bg-indigo-500 w-full hover:bg-indigo-600 rounded-md text-white font-medium">
              Pay $253.00
            </button>
            <p className="text-center italic text-sm">
              You'll be charged $253, including $48 for VAT in Italy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default cart2;
