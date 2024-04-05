import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
function modal() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-4 py-7 flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold">Modal ✨ </h1>
          <hr />
          {/* basic */}
          <h1 className="text-2xl font-bold">Basic</h1>
          <div className="flex items-center gap-x-3">
            <button className="bluebtn">Basic Modal</button>
            <button className="bluebtn">Modal w/ Scroll Bar</button>
            <button className="bluebtn">Cookies</button>
          </div>
          {/* feedback */}
          <h1 className="text-2xl font-bold pt-2">Feedback</h1>
          <div className="flex items-center gap-x-3">
            <button className="bluebtn">Success Modal </button>
            <button className="bluebtn"> Danger Modal </button>
            <button className="bluebtn">Info Modal</button>
          </div>
          {/* product */}
          <h1 className="text-2xl font-bold pt-2">Product</h1>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="bluebtn">Send Feedback </button>
            <button className="bluebtn">Newsletter</button>
            <button className="bluebtn">Announcement</button>
            <button className="bluebtn">Integration</button>
            <button className="bluebtn">What's New</button>
            <button className="bluebtn">Change your plan</button>
            <button className="bluebtn">Quick Find</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default modal;
