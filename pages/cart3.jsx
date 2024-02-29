import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { ArrowRight, Star, Dot, ArrowLeft } from "lucide-react";
function cart3() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="lg:flex lg:gap-x-16 h-full flex-grow ">
          {/* -------------left side---------------- */}
          <div className=" px-4 py-9 lg:px-16 space-y-3 overflow-auto  lg:w-[65%]  no-scrollbar  text-gray-600">
            <div className="flex space-x-2 text-base">
              <h1>Review</h1>
              <ArrowRight className="w-4" />
              <h1>Payment</h1>
              <ArrowRight className="w-4" />
              <h1 className="text-indigo-500">Confirm</h1>
            </div>
            <h2 className="font-bold text-3xl text-gray-800 ">
              Thank you for your order ✨
            </h2>
            <p className="text-lg">
              You will soon receive a confirmation email with details of your
              order and a link to download the files.
            </p>
            <h2 className="font-semibold text-lg text-black py-2">
              Billing Information
            </h2>
            <div className="space-y-1">
              <h1>Name</h1>
              <input type="text" placeholder="Sandhya" className="inputbox" />
            </div>
            <div className="space-y-1">
              <h1>Surname</h1>
              <input type="text" placeholder="Pandey" className="inputbox" />
            </div>
            <div className="space-y-1">
              <h1>Address</h1>
              <input type="text" placeholder="" className="inputbox" />
            </div>
            <div className="space-y-1">
              <h1>Town/City</h1>
              <input type="text" placeholder="" className="inputbox" />
            </div>
            <div className="space-y-1">
              <h1>State/Country</h1>
              <input type="text" placeholder="Sandhya" className="inputbox" />
            </div>
            <div className="space-y-1">
              <h1 className="text-gray-800 flex gap-x-1">
                Country <Star className="text-red-500 fill-red-500 w-2" />
              </h1>
              <select className="bg-white text-black p-2 pr-4 w-full rounded-md border border-gray-200 outline-none hover:border-slate-300">
                <option selected>Italy</option>
                <option>USA</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div className="space-y-1">
              <h1>Postcode</h1>
              <input type="text" placeholder="" className="inputbox" />
            </div>
            <div className="space-y-1">
              <h1>VAT ID</h1>
              <input type="text" placeholder="Sandhya" className="inputbox" />
            </div>
            <div className="text-end">
              <button className="p-2 bg-white shadow-md rounded-md text-indigo-500 font-medium">
                Download invoice
              </button>
            </div>
            <div className="border border-gray-200" />
            <div className="box p-3 space-y-2 flex flex-col items-center justify-center xl:flex-row xl:justify-between">
              <h1 className="flex items-center gap-x-1">
                Enjoy a <span className="text-black font-medium"> 20% OFF</span>
                discount on your next order 🎉
              </h1>
              <p className="bg-green-600 text-white font-medium  p-2 w-fit rounded-md ">
                XMAS22
              </p>
            </div>
          </div>

          {/* ----------right side---------------- */}
          <div className="border-l shadow-md lg:w-[35%] w-full h-fit  space-y-5 overflow-auto no-scrollbar text-black bg-white p-7 mt-10 lg:mt-0">
            <h1 className=" text-2xl font-semibold">Order Summary</h1>
            <p className="font-medium text-lg">Order Details</p>
            <div className="space-y-3">
              <div className="flex justify-between items-center ">
                <img
                  src="https://keystoneacademic-res.cloudinary.com/image/upload/element/18/181461_photo-1519337265831-281ec6cc8514.jpg"
                  className="h-16 w-24"
                />
                <p className="pr-5 pl-3">
                  The Complete Front-End Development Course!
                </p>
                <h2>$69</h2>
              </div>
              <div className="border border-gray-200" />
              <div className="flex justify-between items-center ">
                <img
                  src="https://keystoneacademic-res.cloudinary.com/image/upload/element/18/181461_photo-1519337265831-281ec6cc8514.jpg"
                  className="h-16 w-24"
                />
                <p className="pr-3 pl-5">
                  Web Development Ultimate Course 2021
                </p>
                <h2>$69</h2>
              </div>
              <div className="border border-gray-200" />
              <div className="flex  items-center justify-between">
                <div className="flex gap-x-4 items-center">
                  <img
                    src="https://keystoneacademic-res.cloudinary.com/image/upload/element/18/181461_photo-1519337265831-281ec6cc8514.jpg"
                    className="h-16 w-24"
                  />
                  <p>Full-Stack JavaScript Course!</p>
                </div>
                <h2 className="text-end">$69</h2>
              </div>
              <div className="border border-gray-200" />
              <div className="flex items-center justify-between">
                <h1 className="text-gray-600">Subtotal</h1>
                <p className="text-black">$205</p>
              </div>
              <div className="border border-gray-200" />
              <div className="flex items-center justify-between">
                <h1 className="text-gray-600">Taxes</h1>
                <p className="text-black">$48</p>
              </div>
              <div className="border border-gray-200" />
              <div className="flex items-center justify-between">
                <h1 className="text-gray-600 flex items-center gap-x-2">
                  Discount
                  <span className="py-1 px-2 bg-slate-200 rounded-3xl text-slate-500">
                    XMAS22
                  </span>
                </h1>
                <p className="text-black">-$25</p>
              </div>
              <div className="border border-gray-200" />
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600">Total</h1>
              <p className="text-green-600">$205</p>
            </div>
            <div className="border border-gray-200" />
            <h1 className=" text-lg font-medium">Payment Details</h1>
            <div className="p-3 flex justify-between items-center box border text-gray-800 border-gray-100">
              <h1 className="gap-x-1 flex items-center">
                <span>
                  <img
                    src="https://png.pngtree.com/png-clipart/20190826/ourmid/pngtree-abstract-colorful-circle-png-image_1695185.jpg"
                    className="h-5 w-6"
                  />
                </span>
                Ending with 2478
              </h1>
              <p className="italic">Expires 12/23</p>
            </div>
            <button className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-md p-2 w-full">
              View Your Order
            </button>
            <p className="text-sm italic text-center px-4 text-gray-500">
              Should you ever change your mind, we offer a 14-day,
              no-questions-asked refund policy.
            </p>
          </div>
        </div>

        {/* ------------------------------- */}
      </div>
    </main>
  );
}

export default cart3;
