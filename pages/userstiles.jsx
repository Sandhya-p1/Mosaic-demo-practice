import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
} from "lucide-react";
const Submenu = ({ isOpen, onClose, options }) => {
  return (
    isOpen && (
      <div className="absolute top-10 right-4 pr-16 cursor-pointer transition-transform duration-75 ease-linear rounded-md p-2 space-y-2 bg-white shadow-md border">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => onClose()}
            className={index === options.length - 1 ? "text-red-500" : ""}
          >
            {option}
          </div>
        ))}
      </div>
    )
  );
};

function userstiles() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (index) => {
    setOpenMenu((prev) => (prev === index ? null : index));
    setTimeout(() => {
      setOpenMenu(false);
    }, 3000);
  };
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        <div className="px-4 py-7 lg:px-7 space-y-6   text-gray-800">
          {/* header part */}
          <div className="lg:flex items-center lg:justify-between  space-y-5">
            <h1 className="text-black font-bold text-3xl">Acme Inc. ✨</h1>
            <div className="flex gap-x-2">
              <div className="px-2 py-1 flex items-center gap-x-2 bg-white rounded-sm border border-gray-200 shadow-md ">
                <Search className="h-4 w-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="bg-white outline-none
                "
                />
              </div>
              <button className="bg-indigo-500 font-medium text-white flex gap-x-1 p-2 rounded-sm hover:bg-indigo-600">
                <Plus className="h-6 text-indigo-300" /> Add Member
              </button>
            </div>
          </div>
          {/* contents part */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* --------------box1--------------------- */}
            <box1 key={1} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-4">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(0)}
                />
                <Submenu
                  isOpen={openMenu === 0}
                  onClose={() => handleMenuClick(0)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-4 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box1>
            {/* --------------box2--------------------- */}
            <box2 key={2} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-4">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(1)}
                />
                <Submenu
                  isOpen={openMenu === 1}
                  onClose={() => handleMenuClick(1)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-4 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box2>
            {/* --------------box3--------------------- */}
            <box3 key={3} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-4">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(2)}
                />
                <Submenu
                  isOpen={openMenu === 2}
                  onClose={() => handleMenuClick(2)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-4 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box3>
            {/* --------------box4--------------------- */}
            <box4 key={4} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-4">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(3)}
                />
                <Submenu
                  isOpen={openMenu === 3}
                  onClose={() => handleMenuClick(3)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-4 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box4>
            {/* --------------box5--------------------- */}
            <box5 key={5} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-4">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(4)}
                />
                <Submenu
                  isOpen={openMenu === 4}
                  onClose={() => handleMenuClick(4)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-4 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box5>
            {/* --------------box6--------------------- */}
            <box6 key={6} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-4">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(5)}
                />
                <Submenu
                  isOpen={openMenu === 5}
                  onClose={() => handleMenuClick(5)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-4 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box6>
            {/* --------------box7--------------------- */}
            <box7 key={7} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-6">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(6)}
                />
                <Submenu
                  isOpen={openMenu === 6}
                  onClose={() => handleMenuClick(6)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-6 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box7>
            {/* --------------box8--------------------- */}
            <box8 key={8} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-6">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(7)}
                />
                <Submenu
                  isOpen={openMenu === 7}
                  onClose={() => handleMenuClick(7)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-6 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box8>
            {/* --------------box9--------------------- */}
            <box9 key={9} className={`box flex flex-col  pt-6 relative`}>
              <div className="flex space-x-4 px-6">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Dominik McNeail
                  </h1>
                  <p className="flex gap-x-1  items-center text-xs font-medium text-gray-500">
                    <ArrowRight className="h-4 w-5" />
                    IT
                  </p>
                </div>
              </div>

              <div>
                <MoreHorizontal
                  className="h-6 w-5 hover:text-black absolute top-4 right-4 cursor-pointer text-gray-400 more-horizontal"
                  onClick={() => handleMenuClick(8)}
                />
                <Submenu
                  isOpen={openMenu === 8}
                  onClose={() => handleMenuClick(8)}
                  options={["Option 1", "Option 2", "Remove"]}
                />
              </div>

              <h2 className="py-5 px-6 text-[15px]">
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </h2>
              <div className="border border-gray-100 w-full " />
              {/* footer */}
              <div className="flex space-x-4 justify-between cursor-pointer px-14 ">
                <h2 className="text-indigo-500 flex py-4 hover:text-indigo-600 items-center font-medium gap-x-1">
                  <MessageCircle className="h-4 w-4 " />
                  Send Email
                </h2>
                <div className="h-full border border-gray-100 " />
                <h2 className="  flex items-center font-medium gap-x-2">
                  <Pencil className="h-5 w-4 text-gray-400 hover:text-gray-500" />
                  Edit Profile
                </h2>
              </div>
            </box9>
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

export default userstiles;
