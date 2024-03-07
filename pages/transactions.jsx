import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Search } from "lucide-react";

function transactions() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="flex h-screen bg-slate-50 ">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        <div className="px-3 py-6 md:px-7 space-y-2 text-slate-600">
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
      </div>
    </main>
  );
}

export default transactions;
