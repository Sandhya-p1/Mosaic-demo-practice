import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { ChevronDown, Pencil } from "lucide-react";
function messages() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="text-black">
          {/* left side */}
          <div className="space-y-3">
            {/* nav section */}
            <div className="flex justify-between items-center p-3 fixed top-0">
              <div className="flex gap-x-1 items-center">
                <img src="" />
                <h1 className="font-medium text-xl">#Marketing</h1>
                <ChevronDown className="icon" />
              </div>
              <Pencil className="icon p-1 border rounded-md cursor-pointer hover:border-gray-300" />
            </div>
          </div>
          {/* right side */}
        </div>
      </div>
    </main>
  );
}

export default messages;
