import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { Check, ChevronDown, Dot, Octagon, Pencil, Search } from "lucide-react";
function messages() {
  return (
    <main className="flex h-screen ">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="flex">
          {/* left side */}
          <div className="w-full md:w-1/4 border">
            <div className="px-6 py-4 text-black  bg-blue-white ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <img
                    src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-blue-circle-png-image_2381949.jpg"
                    className="profilebox"
                  />
                  <h1 className="flex items-center font-semibold">
                    #Marketing
                    <span>
                      <ChevronDown className="icon" />
                    </span>
                  </h1>
                </div>
                <Pencil className="border p-1 h-7 cursor-pointer hover:border-slate-300 w-7 rounded-md" />
              </div>
            </div>
            <hr />
            <div className="p-5 space-y-3 ">
              <div className="p-3 inputbox flex items-center gap-x-2">
                <Search className="icon" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="outline-none border-none w-full"
                />
              </div>
              <h1 className="uppercase text-slate-400 text-xs font-semibold">
                Direct messages
              </h1>
              <div className="flex items-center justify-between bg-indigo-200 rounded-md p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Dominik Lamakani
                </h1>
                <p className="text-white px-2 bg-blue-400 rounded-full">2</p>
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Tisha Yanchev
                </h1>
                <p className="text-white px-2 bg-blue-400 rounded-full">4</p>
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Jery Wierzy
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                  className="profilebox"
                />
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Adrian Przetocki
                </h1>
                <Check className="icon" />
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Simona Lurwer
                </h1>
                <Check className="icon" />
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Mary Roszczewski
                </h1>
              </div>
              <h1 className="pt-2 text-xs uppercase text-slate-400 font-bold">
                Channels
              </h1>
              <p className="flex items-center text-sm justify-between">
                #New Leads
                <span>
                  <Dot className="h-10 w-10 text-indigo-500" />
                </span>
              </p>
              <p>#Development Team</p>
              <p className="pb-6">#Product Tips</p>
            </div>
          </div>
          {/* right side */}
          <div className="w-full ">
            <div className="flex justify-between items-center p-5">
              <div className="flex ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                  className="profilebox"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                  className="profilebox -ml-3"
                />
              </div>
              <div className="flex space-x-1">
                <Octagon className="h-7 w-7 text-slate-400 fill-slate-400 border p-1 rounded-md" />
                <Check className="h-7 w-7 text-indigo-700 border rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default messages;
