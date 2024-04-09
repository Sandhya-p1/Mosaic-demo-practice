import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";

function userstabs() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-auto   ">
        <Nav />
        <div className="px-4 py-7 lg:px-7 space-y-6  text-gray-600">
          <div className="lg:flex items-center lg:justify-between  space-y-5">
            <h1 className="text-black font-bold text-3xl">Acme Inc. ✨</h1>
            <div className="flex gap-x-2">
              <div className=" px-2 flex items-center gap-x-2 bg-white rounded-sm border border-gray-200 shadow-md ">
                <Search className="h-4 w-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="bg-white outline-none border-none
                "
                />
              </div>
              <button className="bg-indigo-500 font-medium  text-white iconflex px-2 py-1 rounded-md hover:bg-indigo-600">
                <Plus className="h-6 text-indigo-300" /> Add Member
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-x-3 gap-y-3">
            {/* --------------box1--------------------- */}
            <box1 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box1>
            {/* -----------box2-------------------- */}
            <box2 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box2>
            {/* -----------box3-------------------- */}
            <box3 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box3>
            {/* -----------box4-------------------- */}
            <box4 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box4>
            {/* -----------box5-------------------- */}
            <box5 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box5>
            {/* -----------box6-------------------- */}
            <box6 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box6>
            {/* -----------box7-------------------- */}
            <box7 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box7>
            {/* -----------box8-------------------- */}
            <box8 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box8>
            {/* -----------box9-------------------- */}
            <box9 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box9>
            {/* -----------box10-------------------- */}
            <box10 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box10>
            {/* -----------box11-------------------- */}
            <box11 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box11>
            {/* -----------box12-------------------- */}
            <box12 className="box flex flex-col items-center justify-center py-3 relative space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="">
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400"
                  onClick={handleClick}
                />
                {isOpen && (
                  <div className="absolute top-10 right-4 pr-16 transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option className="text-red-600">Remove</option>
                  </div>
                )}
              </div>
              <div className=" flex flex-col items-center justify-center px-2 space-y-4">
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1 justify-center items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-3 w-3" />
                    IT
                  </p>
                </div>
                <h2 className="text-center">
                  Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                  PHP Lover.
                </h2>
              </div>
              <div className="border border-gray-200 w-full" />
              <h2 className="text-indigo-500 flex items-center font-medium gap-x-1">
                <MessageCircle className="h-4 w-4 " />
                Send Message
              </h2>
            </box12>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <button className="p-2 rounded-sm border text-gray-300 border-gray-200 shadow-sm">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center text-black font-medium border-gray-200 border rounded-sm">
              <button className="py-2 px-3 text-sm text-blue-400 border border-r-gray-300">
                1
              </button>
              <button className="py-2 px-3 text-sm hover:text-white hover:bg-blue-600 border border-r-gray-300 ">
                2
              </button>
              <button className="py-2 px-3 text-sm hover:text-white border border-r-gray-300  hover:bg-blue-600 ">
                3
              </button>
              <button className="py-2 px-3 text-sm hover:text-white  hover:bg-blue-600  border border-r-gray-300 ">
                ...
              </button>
              <button className="py-2 px-3 text-sm hover:text-white  hover:bg-blue-600   ">
                9
              </button>
            </div>
            <button className="p-2 rounded-sm border text-gray-800 hover:bg-blue-600 hover:text-white border-gray-200 shadow-sm">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default userstabs;
