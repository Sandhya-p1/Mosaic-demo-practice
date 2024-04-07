import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { Dot } from "lucide-react";
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
          <div className="flex items-center gap-x-4  ">
            <div className="relative">
              <img
                src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
                className="h-6 w-6 object-cover rounded-full  "
              />
              <span className="h-2 w-2 border border-white bg-red-600 rounded-full absolute top-0 right-0"></span>
            </div>
            <div className="relative">
              <img
                src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
                className="profilebox"
              />
              <span className="h-2 w-2 border border-white bg-green-600 rounded-full absolute top-0 right-0"></span>
            </div>
            <div className="relative">
              <img
                src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
                className="profile"
              />
              <span className="h-2 w-2 border border-white bg-red-600 rounded-full absolute top-0 right-1"></span>
            </div>
            <div className="relative">
              <img
                src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="h-[10px] w-[10px] border border-white bg-green-600 rounded-full absolute top-0 right-2"></span>
            </div>
            <div className="relative">
              <img
                src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
                className="h-16 w-16 rounded-full object-cover"
              />
              <span className="h-[10px] w-[10px] border border-white bg-red-600 rounded-full absolute top-0 right-2"></span>
            </div>
          </div>
          {/* with placeholder */}
          <h1 className="text-2xl font-bold">Avatars with Placeholder Icon</h1>
          <div className="flex items-center gap-x-4 text-slate-500 font-medium">
            <p className="p-1 bg-slate-200 rounded-full text-xs ">MS</p>
            <p className="p-2 bg-slate-200 rounded-full text-sm ">MS</p>
            <p className="p-3 bg-slate-200 rounded-full text-base ">MS</p>
            <p className="p-4 bg-slate-200 rounded-full  ">MS</p>
            <p className="p-5 bg-slate-200 rounded-full  ">MS</p>
          </div>
          {/* Avatars groups */}
          <h1 className="text-2xl font-bold"> Avatars Groups </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-7 w-7 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-7 w-7 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-7 w-7 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-7 w-7 border-2 border-white rounded-full object-cover"
              />
            </div>
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-9 w-9 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-9 w-9 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-9 w-9 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-9 w-9 border-2 border-white rounded-full object-cover"
              />
            </div>
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-11 w-11 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-11 w-11 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-11 w-11 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-11 w-11 border-2 border-white rounded-full object-cover"
              />
            </div>
            <div className="flex -space-x-5 rtl:space-x-reverse">
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-14 w-14 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-14 w-14 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-14 w-14 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-14 w-14 border-2 border-white rounded-full object-cover"
              />
            </div>
            <div className="flex -space-x-6 rtl:space-x-reverse">
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-16 w-16 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-16 w-16 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://st3.depositphotos.com/2024219/31793/i/450/depositphotos_317939792-stock-photo-young-woman-isolated-yellow-background.jpg"
                className="h-16 w-16 border-2 border-white rounded-full object-cover"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xexRkB2oRGhkw70cmFbw1HeAwG3oc36f1dDwwKgjNg&s"
                className="h-16 w-16 border-2 border-white rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default avatar;
