import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
// import { Alert } from "lucide-react";

function tooltip() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-6 py-8 flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold"> ToolTip ✨ </h1>
          <hr />
          <h1 className="text-2xl font-bold"> ToolTip Types </h1>

          <div className="flex flex-wrap gap-6 items-center text-slate-400 font-medium">
            <h1>Label White</h1>
            <h1>Label Dark</h1>
            <h1>Basic White</h1>
            <h1>Basic Dark</h1>
            <h1>Large White</h1>
            <h1>Large Dark</h1>
            <h1>Rich White</h1>
            <h1>Rich Dark</h1>
          </div>
          <h1 className="text-2xl font-bold"> ToolTip Types </h1>
          <div className="flex flex-wrap gap-6 items-center text-slate-400 font-medium">
            <h1>Top</h1>
            <h1>Bottom</h1>
            <h1>Left</h1>
            <h1>Right</h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default tooltip;
