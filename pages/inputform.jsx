import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { AlertCircle } from "lucide-react";
import ToggleSwitcher from "./components/ToggleSwitcher";
function inputForm() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="text-black px-5 py-7 flex flex-col gap-y-4">
          <h1 className="text-3xl font-bold">Input Form ✨</h1>
          <hr />
          <h1 className="text-2xl font-semibold">Input Types</h1>

          <form className="text-slate-600 items-center grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full inline-block ">
              <label>Default</label>
              <input type="text" className="w-full btnform outline-slate-400" />
            </div>
            <div className="w-full inline-block -mt-1 ">
              <div className="flex justify-between items-center">
                <label>W/ Tooltip</label>
                <AlertCircle className="text-white  p-1 rounded-full h-8 w-8 fill-slate-400" />
              </div>
              <input type="text" className="w-full btnform outline-slate-400" />
            </div>
            <div className="w-full inline-block">
              <label className="">
                Mandatory <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full btnform outline-slate-400" />
            </div>
            <div className="w-full inline-block">
              <label className="">
                Mandatory <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full btnform outline-slate-400" />
            </div>
            <div className="w-full inline-block">
              <label className="">W/ Prefix</label>
              <div className="w-full border px-2 rounded-md hover:border-slate-300 flex items-center gap-x-1 ">
                <p className="text-slate-400 font-medium ">USD</p>
                <input
                  type="text"
                  className="w-full outline-none border-none  "
                />
              </div>
            </div>
            <div className="w-full inline-block">
              <label className="">
                Mandatory <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full btnform outline-slate-400" />
            </div>
          </form>
          <h1 className="text-2xl font-semibold pt-3">Input Sizes</h1>

          <form className="text-slate-600 items-center grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="inline-block w-full">
              <label>Small</label>
              <input
                type="text"
                className="px-2 py-1 rounded-md  border hover:border-slate-300  border-gray-200 bg-white  w-full"
              />
            </div>
            <div className="inline-block w-full">
              <label>Default</label>
              <input type="text" className="btnform w-full" />
            </div>
            <div className="inline-block w-full">
              <label>Large</label>
              <input
                type="text"
                className="px-3 py-3 rounded-md  border hover:border-slate-300  border-gray-200 bg-white  w-full"
              />
            </div>
          </form>
          <h1 className="text-2xl font-semibold pt-3">Input States</h1>
          <form className="text-slate-600 items-center grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" w-full">
              <label>Disabled</label>
              <h1 className="border cursor-not-allowed bg-slate-100 text-slate-300 font-medium rounded-md px-3 py-2 w-full">
                Something cool...
              </h1>
            </div>
            <div className=" w-full">
              <label>
                Error <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border cursor-not-allowed  border-red-500 hover:border-slate-300 font-medium rounded-md px-3 py-2 w-full"
              />
              <p className="text-red-500">This field is required!</p>
            </div>
            <div className=" w-full">
              <label>
                Success <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border cursor-not-allowed  border-green-500 hover:border-slate-300 font-medium rounded-md px-3 py-2 w-full"
              />
              <p className="text-green-500">Sounds good!</p>
            </div>
          </form>
          <h1 className="text-2xl font-semibold pt-3">Select</h1>
          <div className="py-2 grid grid-col ">
            <label>Country</label>
            <select className="w-fit border rounded-md cursor-pointer">
              <option selected>Italy</option>
              <option>USA</option>
              <option>United Kingdom</option>
            </select>
          </div>
          <h1 className="text-2xl font-semibold pt-3">Checkbox</h1>
          <div className="flex items-center gap-x-4">
            <div className="iconflex">
              <input type="checkbox" className="rounded-sm cursor-pointer" />
              <h1>Active</h1>
            </div>
            <div className="iconflex">
              <input
                type="checkbox"
                defaultChecked
                className="rounded-sm cursor-pointer"
              />
              <h1>Selected</h1>
            </div>
            <div className="iconflex">
              <p className="border p-2 border-slate-400 rounded-sm"></p>
              <h1>Disabled</h1>
            </div>
          </div>
          <h1 className="text-2xl font-semibold pt-3">Radio</h1>
          <div className="flex items-center gap-x-4">
            <div className="iconflex">
              <input
                type="radio"
                name="radioGroup"
                className="cursor-pointer"
              />
              <label>Active</label>
            </div>
            <div className="iconflex">
              <input
                type="radio"
                name="radioGroup"
                defaultChecked
                className="cursor-pointer"
              />
              <label>Selected</label>
            </div>
            <div className="iconflex">
              <p className="border border-slate-600 rounded-full p-2"></p>
              <label>Disabled</label>
            </div>
          </div>
          <h1 className="text-2xl font-semibold pt-3">Toggle Switch</h1>
          <div className="flex items-center gap-x-4">
            <ToggleSwitcher />
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default inputForm;
