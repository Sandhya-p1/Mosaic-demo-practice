import {
  ArrowRight,
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
} from "lucide-react";
import React from "react";

import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { useState } from "react";

import { useRouter } from "next/router";
import ToggleSwitcher from "./components/ToggleSwitcher";

function listing() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCLick = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const handleRouter = () => {
    router.push("./jobpost");
  };

  return (
    <main className="flex h-screen bg-slate-50 ">
      <Sidebar />
      <div className="w-full  overflow-auto ">
        <Nav />
        <div className="py-5 px-3 md:px-9 text-gray-500">
          <div className="md:flex md:justify-between py-3 items-center space-y-3">
            <h1 className="text-black font-medium text-2xl">
              Search For Jobs ✨
            </h1>
            <button className=" p-2 text-white bg-indigo-500 hover:bg-indigo-600 flex items-center gap-x-1 rounded-md">
              <Plus className="h-6 w-6 text-indigo-300" />
              Post a Job
            </button>
          </div>
          <div className="md:flex md:gap-x-6 space-y-4 ">
            {/* left side */}
            <div className="space-y-4 md:w-[30%] ">
              <div className="p-4 bg-indigo-200 w-full rounded-sm space-y-4">
                <h1 className="text-sm text-black">
                  Remember to keep track of your job research.
                </h1>
                <p className="text-sm text-indigo-600 flex gap-x-1 cursor-pointer hover:underline items-center justify-end">
                  Create Alert
                  <ArrowRight className="h-4 w-4 " />
                </p>
              </div>
              <div className="rounded-sm border p-4 w-full space-y-4 shadow-md bg-white">
                {/* job types */}
                <h1 className="text-black font-medium">Job Types</h1>
                <div className="space-y-2">
                  <div>
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <label className="px-2 ">Programming</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <label className="px-2 ">Design</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <label className="px-2 ">Management / Finance</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <label className="px-2 ">Customer Support</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label className="px-2 ">Sales / Marketing</label>
                  </div>
                </div>
                {/* company culture */}
                <h1 className="text-black font-medium">Company Culture</h1>
                <ToggleSwitcher />
                <div className="space-y-2">
                  <p className="italic">
                    Only show companies that are creating a positive culture
                  </p>
                  {/* <label
                htmlFor="check"
                className="flex bg-gray-500  cursor-pointer relative w-11 h-6 rounded-full"
              >
                <input type="checkbox" id="check" className="sr-only peer " />
                <span className="h-5 w-5 bg-white  absolute rounded-full left-1 top-1 peer-checked:left-5 transition-all duration-500" />
              </label> */}
                </div>
                {/* Salary Range */}
                <h1 className="text-black font-medium">Salary Range</h1>
                <div className="space-y-2">
                  <div>
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <label className="px-2 ">$20K - $50K</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <label className="px-2 ">$50K - $100K</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <label className="px-2 "> $100K</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <label className="px-2 ">Drawing / Painting</label>
                  </div>
                </div>
                {/* immigration */}
                <h1 className="text-black font-medium">Immigration</h1>
                <ToggleSwitcher />{" "}
                <div className="space-y-2">
                  <p className="italic">
                    Only show companies that can sponsor a visa
                  </p>
                </div>
              </div>
            </div>
            {/* rightside */}
            <div className="space-y-3 text-gray-500 w-full">
              <div className="inputbox flex items-center gap-x-1">
                <Search className="icon" />
                <input
                  type="search"
                  placeholder="Search job title or keyword..."
                  className="border-none w-full bg-white outline-none"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="italic ">Showing 289 Jobs </p>
                <h1 className="text-black flex gap-x-1">
                  Sort by
                  <span
                    className="text-indigo-500 cursor-pointer relative hover:text-indigo-600 flex items-end gap-x-1"
                    onClick={handleCLick}
                  >
                    Newest
                    <ChevronDown className="h-3 w-3" />
                    {isOpen && (
                      <div className="p-2 space-y-2 transition-all ease-out duration-500 text-black border rounded-sm shadow-md right-0 top-6 bg-white absolute">
                        <p>Oldest</p>
                        <p>Featured</p>
                      </div>
                    )}
                  </span>
                </h1>
              </div>
              {/* list of jobs */}
              <div className="space-y-3">
                {/* box1 */}
                <div className="bg-yellow-50 shadow-md border-yellow-300 border rounded-sm px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg cursor-pointer "
                      onClick={handleRouter}
                    >
                      Senior Web App Designer <br />
                      <span className="text-gray-500 text-base font-normal  cursor-text">
                        Contract / Remote / New York, NYC
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 4
                    <span className="bg-yellow-100 mx-2 not-italic text-yellow-600  px-2 rounded-3xl">
                      Featured
                    </span>
                    <Bookmark className="icon" />
                  </p>
                </div>
                {/* box2 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg cursor-pointer "
                      onClick={handleRouter}
                    >
                      Senior Full Stack Engineer <br />
                      <span className="text-gray-500 text-base font-normal cursor-text">
                        Contract / Remote / New York, NYC
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-orange-600 text-orange-600" />
                  </p>
                </div>
                {/* box3 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      onClick={handleRouter}
                    >
                      Ruby on Rails Engineer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Contract / Remote / New York, NYC
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box4 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      onClick={handleRouter}
                    >
                      Senior Software Engineer Backend <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / Anywhere
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box5 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      onClick={handleRouter}
                    >
                      React.js Software Developer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / London, Uk
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 6
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-orange-600 text-orange-600" />
                  </p>
                </div>
                {/* box6 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      onClick={handleRouter}
                    >
                      Senior Full Stack Rails Developer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Part-time / Remote / Milan, IT
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box7 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1 className="text-black   font-medium text-lg ">
                      Principal Software Engineer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Freelance / Remote / London, UK
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 6
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box8 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      onClick={handleRouter}
                    >
                      Contract React Native Engineer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Contract / Remote / Milami,FL
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box9 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      onClick={handleRouter}
                    >
                      Senior Client Engineer (React & React Native) <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / Lincoln,NE
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box10 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      onClick={handleRouter}
                    >
                      QA Automation Engineer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Contract / Remote / Anywhere
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 5
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
              </div>
              {/* footer */}
              <div className="flex items-center justify-center space-x-2 py-4">
                <button className="border cursor-default  text-center border-r-gray-200 p-2 ">
                  <ChevronLeft className="h-5 w-4 text-gray-300" />
                </button>
                <div className="flex items-center">
                  <button className="footerbtn text-indigo-500 cursor-text">
                    1
                  </button>
                  <button className="footerbtn hover:bg-indigo-600 hover:text-white  ">
                    2
                  </button>
                  <button className="footerbtn  hover:bg-indigo-600 hover:text-white ">
                    3
                  </button>
                  <button className="footerbtn ">...</button>
                  <button className="footerbtn  hover:bg-indigo-600 hover:text-white ">
                    9
                  </button>
                </div>
                <button className=" border text-center hover:bg-indigo-600 hover:text-white  border-gray-200 p-2">
                  <ChevronRight className="h-5 w-4 " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default listing;
