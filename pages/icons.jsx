import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function icons() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-6 py-8 flex flex-col gap-y-7">
          <h1 className="text-3xl font-bold"> Icons ✨ </h1>
          <hr />
          <p className="text-sm text-slate-500">
            If you need more icons than what we currently support in Mosaic,
            check out these great packs 👇
          </p>
          <h1 className="flex items-center gap-x-3 text-2xl font-bold">
            Nucleo
            <span className="bg-indigo-100 font-medium py-1  text-indigo-500 px-2 rounded-full text-xs">
              Recommended
            </span>
          </h1>
          <div className="md:flex space-y-4 rounded-md w-full bg-slate-800 md:space-y-0 p-5 justify-between items-center text-center">
            <p className="text-slate-300">
              99% of the icons used in Mosaic come from Nucleo; a huge library
              of 3K+ vector icons!
            </p>
            <div className="flex items-center justify-center gap-x-2">
              <button className="p-2 rounded-md text-white font-medium hover:bg-indigo-600 bg-indigo-500">
                Buy Nucleo
              </button>
              <button className="p-2 rounded-md text-white font-medium hover:bg-slate-400 bg-slate-500">
                Download Free Pack
              </button>
            </div>
          </div>
          <h1 className="flex items-center gap-x-3 text-2xl font-bold">
            Tabler Icons
            <span className="bg-green-100 font-medium py-1  text-green-500 px-2 rounded-full text-xs">
              Free Alternative
            </span>
          </h1>
          <div className="md:flex space-y-4 rounded-md w-full bg-slate-800 md:space-y-0 p-5 justify-between items-center text-center">
            <p className="text-slate-300">
              A set of 1250+ icons that are visually consistent with the style
              used in Mosaic!
            </p>

            <button className="p-2 rounded-md text-white font-medium hover:bg-indigo-500 bg-indigo-600">
              Download Tabler Icons
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default icons;
