import React, { useState } from "react";
import Footer from "./components/Footer";

import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { DateRangePicker } from "rsuite";
import subDays from "date-fns/subDays";

import { Plus, ListFilter, PlusIcon } from "lucide-react";
function HomePage() {
  const ranges = [
    {
      label: "today",
      value: [new Date(), new Date()],
    },
    {
      label: "yesterday",
      value: [subDays(new Date(), 1), subDays(new Date(), 1)],
    },
  ];

  return (
    <main className="flex h-screen bg-gray-100 ">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-5 py-32 bg-gray-100 ">
          <div className="bg-indigo-200 px-5 py-3 rounded-sm ">
            <h1 className=" text-black text-3xl font-bold">
              Good afternoon, Acme Inc.
            </h1>
            <p className="text-gray-600 py-2 text-lg">
              Here is what's happening with your project today:
            </p>
          </div>
          <div className="md:flex md:justify-between py-8">
            {/* profile pictures of everyone left*/}
            <div className=" text-center flex justify-center -space-x-4 cursor-pointer">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="profile"
              />
              <img
                src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                className="profile "
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nDH-ACqKxCE7-sVLFgpnwZpDFykPNufEOjxfzoI9nQ&s"
                className="profile"
              />
              <img
                src="https://www.shutterstock.com/image-photo/photo-portrait-lovely-young-lady-260nw-2269863981.jpg"
                className="profile"
              />
              <PlusIcon className="h-12 w-12 text-blue-700 border hover:border-blue-200 rounded-full text-center p-2 bg-white" />
            </div>
            {/* date and add file-right */}

            <div className=" flex space-x-4 items-center py-5 md:py-0 text-gray-500 ">
              <ListFilter className="h-9 w-9 cursor-pointer p-1 bg-white border rounded-sm hover:border-gray-300 " />
              <DateRangePicker
                oneTap
                showOneCalendar
                hoverRange="week"
                ranges={[]}
                className="bg-white"
              />

              <button className="flex items-center  bg-indigo-500 hover:bg-indigo-700 rounded-lg px-3 py-2 ">
                <Plus className="h-5 text-indigo-400" />
                <p className="text-white ml-1 font-medium">Add View</p>
              </button>
            </div>
            {/* footer part */}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
