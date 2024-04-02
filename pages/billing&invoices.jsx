import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ArrowRight,
  Cable,
  Check,
  File,
  List,
  MessageSquareWarning,
  Power,
  RefreshCcw,
  Star,
  User,
} from "lucide-react";

function bilingandinvoices() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="text-black py-9 px-4 space-y-4">
          <h1 className="font-bold text-3xl">Account Settings ✨</h1>
          <div className="box rounded-md  w-full md:flex ">
            {/* left side */}
            <div className=" md:space-y-6 px-3 py-7 md:w-1/4 md:space-x-0  scroll-smooth  overflow-scroll no-scrollbar space-x-4 flex justify-between items-center md:inline">
              {/* business settings */}
              <div className=" space-y-5 ">
                <h2 className="uppercase text-gray-400 md:pb-3 text-xs font-bold">
                  business settings
                </h2>
                <div className="flex gap-x-3  font-medium text-nowrap items-center md:inline md:space-y-4">
                  <p className="text-indigo-400 w-3/4  cursor-pointer iconflex bg-indigo-100 rounded-md p-2">
                    <User className="h-4 w-4" />
                    My Account
                  </p>
                  <p className="iconflex cursor-pointer">
                    <Power className="icon" />
                    My Notifications
                  </p>
                  <p className="iconflex cursor-pointer">
                    <Cable className="icon" />
                    Connected Apps
                  </p>
                  <p className="iconflex cursor-pointer">
                    <List className="icon" />
                    Plans
                  </p>
                  <p className="iconflex cursor-pointer">
                    <File className="icon" />
                    Billing & Invoices
                  </p>
                </div>
              </div>
              {/* experience */}
              <div className="space-y-3">
                <h1 className="uppercase text-gray-400 text-xs font-bold">
                  experience
                </h1>
                <div className="text-nowrap font-medium">
                  <p className="iconflex cursor-pointer">
                    <MessageSquareWarning className="icon" />
                    Give Feedback
                  </p>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="box w-full px-3 py-7 space-y-6 text-slate-600">
              <h1 className="text-3xl font-bold text-black">
                Billing & Invoices
              </h1>
              <p>
                This workspace’s Basic Plan is set to $34 per month and will
                renew on July 9, 2021.
              </p>
              <h1 className="font-bold text-2xl text-black">
                Billing Information
              </h1>
              <div className="md:flex justify-between items-center space-y-2">
                <h1>Payment Method</h1>
                <p className="mx-2">
                  Mastercard ending 9879
                  <span className="text-indigo-500 px-2">Edit</span>
                </p>
              </div>
              <hr />
              <div className="md:flex justify-between items-center space-y-2">
                <h1>Payment Method</h1>
                <p className="mx-2">
                  Billing Interval
                  <span className="text-indigo-500 px-2">Edit</span>
                </p>
              </div>
              <hr />
              <div className="md:flex justify-between items-center space-y-2">
                <h1>Payment Method</h1>
                <p className="mx-2">
                  VAT/GST Number
                  <span className="text-indigo-500 px-2">Edit</span>
                </p>
              </div>
              <hr />
              <div className="md:flex justify-between items-center space-y-2">
                <h1> Your Address</h1>
                <p className="mx-2">
                  Your Address
                  <span className="text-indigo-500 px-2">Edit</span>
                </p>
              </div>
              <hr />
              <div className="md:flex justify-between items-center space-y-2">
                <h1> Billing Address</h1>
                <p className="mx-2">
                  Billing Address
                  <span className="text-indigo-500 px-2">Edit</span>
                </p>
              </div>
              <hr />
              <h1 className="text-black text-2xl font-bold">Invoices</h1>
              <div className="flex justify-between items-center">
                <h1 className="uppercase font-semibold ">year</h1>
                <h1 className="uppercase font-semibold md:inline hidden">
                  plan
                </h1>
                <h1 className="uppercase font-semibold md:inline hidden">
                  amount
                </h1>
                <h1 className="uppercase font-semibold"></h1>
              </div>
              <div className="space-y-1 md:flex justify-between items-center">
                <h1>2021</h1>
                <p>Basic Plan - Annualy</p>
                <p>$349.00</p>
                <p className="text-indigo-500 cursor-pointer">HTML | PDF</p>
              </div>
              <hr />
              <div className="space-y-1 md:flex justify-between items-center">
                <h1>2021</h1>
                <p>Basic Plan - Annualy</p>
                <p>$349.00</p>
                <p className="cursor-pointer text-indigo-500">HTML | PDF</p>
              </div>
              <hr />
              <div className="flex justify-end items-center gap-x-3">
                <button className="text-slate-600 border hover:border-slate-300 rounded-md p-2">
                  Cancel
                </button>
                <button className="text-white bg-indigo-500 hover:bg-indigo-600 rounded-md p-2 font-medium">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default bilingandinvoices;
