import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  ArrowUpToLine,
  ChevronDown,
  MessageSquareWarning,
  Search,
  X,
} from "lucide-react";

function transactiondetails() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="flex h-screen bg-slate-50 ">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        <div className="px-3 py-6 md:px-7 space-y-2 text-slate-600 hidden md:inline-block">
          <div className="md:flex md:justify-between md:items-center space-y-3">
            <h1 className="font-bold text-3xl text-black ">$47,347.09</h1>
            <div className="flex items-center gap-x-2 ">
              <div className="md:flex items-center gap-x-1 inputbox hidden">
                <Search className="icon" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="outline-none border-none w-full bg-white"
                />
              </div>
              <h1 className="bg-indigo-500 w-fit md:w-full px-2 text-center flex-nowrap hover:bg-indigo-600 text-white font-medium py-2 rounded-md ">
                Export Transactions
              </h1>
            </div>
          </div>
          <p className=" flex gap-x-1 relative ">
            Transactions from
            <span
              className="flex items-end  relative font-medium  gap-x-1 text-indigo-500 hover:text-indigo-600 cursor-pointer"
              onClick={handleClick}
            >
              My Personal Account <ChevronDown className="h-5 w-4 " />
              {isOpen && (
                <div className="p-2 absolute  space-y-2 top-7 left-5 bg-white opacity-100 border w-full transition-all ease-in-out duration-200 font-normal rounded-sm shadow-md text-black text-base">
                  <p>Business Account</p>
                  <p>Family Account</p>
                </div>
              )}
            </span>
          </p>
          {/* list of headings */}
          <div className="menulist">
            <button className="text-white text-sm font-medium px-3 shadow-md py-1 bg-indigo-500 rounded-2xl">
              View All
            </button>

            <button className="optionmenu">Completed</button>
            <button className="optionmenu">Pending</button>
            <button className="optionmenu">Canceled</button>
          </div>
          {/* table part goes here [PENDING] */}
          {/* footer section */}
          <div className="md:flex md:justify-between md:items-center  space-y-2">
            <p className="text-sm text-gray-500 hidden md:inline">
              Showing <span className="text-black">1</span> to
              <span className="text-black"> 10</span> of
              <span className="text-black"> 467 </span> results
            </p>
            <div className="flex justify-center items-center gap-x-2">
              <button
                className="   px-2 py-1 rounded-md text-center border border-gray-200 bg-white font-medium;
 text-gray-300 gap-x-1 flex items-center"
              >
                <ArrowLeft className="h-3 w-3" />
                Previous
              </button>
              <button
                className="  px-2 py-1 rounded-md text-center hover:border-gray-300 border border-gray-200 bg-white font-medium;
 flex gap-x-1 items-center text-indigo-500"
              >
                Next
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center md:hidden ">
              Showing <span className="text-black">1</span> to
              <span className="text-black"> 10</span> of
              <span className="text-black"> 467 </span> results
            </p>
          </div>
          {/* footer section ends here */}
        </div>

        {/* Bank Transfer card */}
        <div className="md:border-l border space-y-4 border-gray-200 shadow-sm bg-gray-50  p-4 h-full scroll-smooth no-scrollbar overflow-y-auto w-full">
          <div className="flex justify-between items-center py-5">
            <p></p>
            <h1 className="font-medium text-sm text-center text-black ">
              Bank Transfer
              <span className="italic block text-gray-500 font-normal">
                22/01/2022, 8:56 PM
              </span>
            </h1>
            <X className="h-6 w-6 text-gray-500" />
          </div>
          <div className=" mx-16 md:mx-4 space-y-5">
            {/* pending box */}
            <div className=" shadow-lg px-4 rounded-lg  text-center text-black bg-white">
              <img src="" className="profile " />
              <h1 className="text-2xl text-green-600 font-bold">+$2,179.36</h1>
              <p className="text-sm">Acme LTD UK</p>
              <h2 className="text-gray-400 my-4  font-medium py-1 px-2 text-xs bg-gray-100 w-fit mx-auto rounded-2xl">
                Pending
              </h2>
              <div className="border-dashed border-gray-300 border  w-full" />
              <div className="py-3 space-y-3">
                <h1
                  className="flex items-center justify-between italic text-gray-500
              "
                >
                  IBAN:
                  <span className="not-italic text-black font-medium">
                    IT17 2207 1010 0504 0006 88
                  </span>
                </h1>
                <h1
                  className="flex items-center justify-between italic text-gray-500
              "
                >
                  BIC:
                  <span className="not-italic text-black font-medium">
                    BARIT22
                  </span>
                </h1>
                <h1
                  className="flex items-center justify-between italic text-gray-500
              "
                >
                  Reference:
                  <span className="not-italic text-black font-medium">
                    Freelance Work
                  </span>
                </h1>

                <h1
                  className="flex items-center justify-between italic text-gray-500
              "
                >
                  Emitter:
                  <span className="not-italic text-black font-medium">
                    Acme LTD UK
                  </span>
                </h1>
              </div>
            </div>
            {/* pending box ends here */}
            {/* receipts box */}
            <div className="space-y-2">
              <h1 className="text-black font-medium">Receipts</h1>
              <div className="rounded-lg border space-y-2 border-slate-400  border-dashed text-gray-500 py-10 text-center bg-slate-200 ">
                <ArrowUpToLine className="icon mx-auto" />
                <p className="italic">We accept PNG, JPEG, and PDF files.</p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="font-medium text-black">Notes</h1>

              <textarea
                rows={3}
                placeholder="Write a note..."
                className="bg-white w-full border p-3 text-black text-base rounded-md outline-none border-gray-200"
              ></textarea>
            </div>
            <div className="flex gap-x-3 items-center justify-center">
              <button className="text-gray-700 text-base justify-center hover:border-gray-300 w-full bg-white p-1 border rounded-md flex items-center gap-x-1">
                <ArrowDownToLine className="icon" /> Download
              </button>
              <button
                className="text-red-500 bg-white border py-1  justify-center  hover:border-gray-300 w-full rounded-md
              text-base flex items-center gap-x-1"
              >
                <MessageSquareWarning className="h-4 w-5" />
                Report
              </button>
            </div>
          </div>
        </div>
        {/* card section ends here */}
      </div>
    </main>
  );
}

export default transactiondetails;
