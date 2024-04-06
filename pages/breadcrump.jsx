import { ChevronRight, Dot } from "lucide-react";
import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";

function breadcrump() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-4 py-7 flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold"> Breadcrumb ✨ </h1>
          <hr />
          {/* WITH SLASHES */}
          <h1 className="text-2xl font-bold">With Slashes</h1>
          <div className="box p-8 space-x-2 text-slate-500 flex items-center w-full justify-center ">
            <h1>Home </h1>
            <h1>/ </h1>

            <h1>Settings</h1>
            <h1>/ </h1>

            <h1>Notifications</h1>
          </div>
          {/* option2 */}
          <h1 className="text-2xl font-bold">With Dots</h1>
          <div className="box p-8 space-x-2 text-slate-500 flex items-center w-full justify-center ">
            <h1>Home </h1>
            <Dot className="h-4 w-4" />

            <h1>Settings</h1>
            <Dot className="h-4 w-4" />

            <h1>Notifications</h1>
          </div>
          {/* option3 */}
          <h1 className="text-2xl font-bold">With Chevrons</h1>
          <div className="box p-8 space-x-2 text-slate-500 flex items-center w-full justify-center ">
            <h1>Home </h1>
            <ChevronRight className="h-4 w-4" />

            <h1>Settings</h1>
            <ChevronRight className="h-4 w-4" />

            <h1>Notifications</h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default breadcrump;
