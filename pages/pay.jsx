import { X } from "lucide-react";
import React from "react";
import Link from "next/link";

function pay() {
  return (
    <div className=" bg-slate-100 h-screen">
      <nav className="flex  justify-between items-center p-5 bg-white shadow-md w-full">
        <Link href="/main">
          <img
            src="https://image.pngaaa.com/506/2124506-small.png"
            className="h-10 w-10"
          />
        </Link>
        <Link href="/cart">
          <X className="h-7 w-7 bg-gray-200 text-gray-700 p-1 rounded-full" />
        </Link>
      </nav>
      <div className="w-full  bg-slate-100  flex flex-col items-center justify-center">
        <img
          src="https://media.sciencephoto.com/f0/15/24/90/f0152490-800px-wm.jpg"
          className="h-48 w-full object-cover   "
        />
        <div className="   rounded-md shadow-md bg-white h-fit mb-6  flex flex-col items-center justify-center  w-[80%] lg:w-[30%]  text-center  -mt-40">
          <img
            src="https://thumbs.dreamstime.com/b/man-analysis-business-accounting-laptop-45719380.jpg"
            className="h-60 w-full object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712620800&semt=ais"
            className="h-16 w-16 object-cover rounded-full -mt-7  "
          />
          <div className="flex-col text-slate-600  items-center justify-center space-y-3 px-7 py-3 ">
            <h1 className="text-black text-3xl font-bold">
              Front-End Learning 🔥
            </h1>
            <p className="text-lg">
              Learn how to create real web apps using HTML & CSS. Code templates
              included.
            </p>
            <div className="flex justify-between items-center bg-slate-100 p-1 text-black font-medium">
              <button className="border rounded-md shadow-md border-slate-300 bg-white text-center w-full p-2 ">
                Pay With Card
              </button>
              <button className="w-full">Pay With PayPal</button>
            </div>
            <form className="space-y-4 py-4">
              <div className="space-y-1 text-start">
                <label className="text-slate-700 text-lg font-medium ">
                  Card Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className="border rounded-md px-3 py-2 placeholder:text-slate-400 border-slate-300 outline-none w-full"
                />
              </div>
              <div className="flex items-center justify-between gap-x-6">
                <div className="space-y-1 text-start">
                  <label className="text-slate-700 font-medium  text-lg">
                    Expiry Date
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    placeholder="MM/YY"
                    className="border rounded-md px-3 py-2 placeholder:text-slate-400 border-slate-300 outline-none w-full"
                  />
                </div>
                <div className="space-y-1 text-start">
                  <label className="text-slate-700 font-medium text-lg ">
                    CVC <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border rounded-md px-3 py-2 placeholder:text-slate-400 border-slate-300 outline-none w-full"
                  />
                </div>
              </div>
              <div className="space-y-1 text-start">
                <label className="text-slate-700 font-medium text-lg ">
                  Name on Card <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border rounded-md px-3 py-2 placeholder:text-slate-400 border-slate-300 outline-none w-full"
                />
              </div>
              <div className="space-y-1 text-start">
                <label className="text-slate-700 font-medium text-lg ">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="border rounded-md px-3 py-2 placeholder:text-slate-400 border-slate-300 outline-none w-full"
                />
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 text-center rounded-md w-full">
                Pay $253.00
              </button>
              <p className="italic text-slate-500 ">
                You'll be charged $253, including $48 for VAT in Italy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pay;
