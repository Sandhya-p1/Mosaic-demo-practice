import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { ChevronDown, ChevronUp, RefreshCcw } from "lucide-react";
function accordion() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-6 py-8 flex flex-col gap-y-7">
          <h1 className="text-3xl font-bold"> Accordion ✨ </h1>
          <hr />
          <h1 className="text-2xl font-bold"> Accordion Types </h1>
          {/* First box */}
          <div className="border rounded-md border-slate-200  p-5">
            <div className="flex items-center justify-between">
              <h1 className="font-medium">Accordion Title</h1>
              {show ? (
                <ChevronDown
                  className="icon cursor-pointer "
                  onClick={handleShow}
                />
              ) : (
                <ChevronUp
                  className="icon cursor-pointer"
                  onClick={handleShow}
                />
              )}
            </div>
            {show && (
              <p className="text-slate-500 pt-2 transition-all ease-in-out duration-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>
          {/* Second box */}
          <h1 className="text-2xl font-bold">Table Row with Accordion</h1>
          <div className="border border-slate-300 overflow-x-scroll  rounded-sm px-4 py-3 flex md:justify-between gap-x-9  items-center md:gap-x-5  w-full">
            <div className="iconflex ">
              <img
                src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
                className="profile"
              />
              <h1 className="text-nowrap">Mark Cameron</h1>
            </div>
            <p className="text-green-600 ">$129.00</p>
            <p className="bg-yellow-100 rounded-full px-2 text-yellow-600">
              Refund
            </p>
            <div className="flex items-center gap-x-4">
              <p>1</p>
              <p className="text-nowrap">
                <span className="text-xs">MX </span> New Mexico, MX
              </p>
            </div>
            <p className="iconflex">
              <RefreshCcw className="icon" />
              Subscription
            </p>
            <ChevronDown className="" />
          </div>
          {/* Third */}
          <h1 className="text-2xl font-bold">Rich Table Row with Accordion</h1>
          <div className="overflow-x-auto  border-slate-300  border">
            <table className=" text-auto overflow-scroll w-full text-slate-500">
              <thead>
                <tr>
                  <th className="iconflex font-normal text-nowrap  w-44 text-black px-4 py-2 ">
                    <img
                      src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
                      className="profile"
                    />
                    Mark Cameron
                  </th>
                  <th className="text-green-500 font-normal px-4 py-2 ">
                    $129.00
                  </th>
                  <th className="font-normal px-4 py-2">
                    mark.cameron@app.com
                  </th>
                  <th className="font-normal px-4 py-2 text-nowrap">
                    🇬🇧 London, UK
                  </th>
                  <th className="font-normal px-4 py-2">22/01/2021</th>
                  <th className="font-normal text-green-500 px-4 py-2">
                    +249.88
                  </th>
                  <th className="cursor-pointer">
                    {show ? (
                      <ChevronDown
                        className="px-4 py-2 h-12 w-12"
                        onClick={handleShow}
                      />
                    ) : (
                      <ChevronUp
                        className="px-4 py-2 h-12 w-12"
                        onClick={handleShow}
                      />
                    )}
                  </th>
                </tr>
              </thead>
            </table>
            {show && (
              <div className="space-y-3 m-4 ">
                <h1 className="text-black font-medium text-sm">
                  Excepteur sint occaecat cupidatat.
                </h1>
                <p className="text-slate-500 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam quis. Ut enim ad minim veniam quis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="rounded-md  px-2 py-1 text-white bg-indigo-500 hover:bg-indigo-600 font-medium">
                  Approve
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default accordion;
