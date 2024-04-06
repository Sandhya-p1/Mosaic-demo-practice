import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
function avatar() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-4 py-7 flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold"> Avatar ✨ </h1>
          <hr />
          {/* basic */}
          <h1 className="text-2xl font-bold">Basic Avatars</h1>
          <div className="flex items-center gap-x-4">
            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="h-6 w-6 object-cover rounded-full"
            />
            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="profilebox"
            />
            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="profile"
            />
            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="h-14 w-14 rounded-full object-cover"
            />

            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
          {/* with notifications */}
          <h1 className="text-2xl font-bold"> Avatars with Notification </h1>
          <div className="flex items-center gap-x-4">
            <div className="relative">
              <img
                src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
                className="h-6 w-6 object-cover rounded-full"
              />
            </div>
            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="profilebox"
            />
            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="profile"
            />
            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="h-14 w-14 rounded-full object-cover"
            />

            <img
              src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default avatar;
