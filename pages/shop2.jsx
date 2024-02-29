import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { Stars, Star, Heart } from "lucide-react";
function shop2() {
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-6 py-8  text-black">
          <h1 className="font-bold gap-x-1 text-black flex items-center text-2xl md:text-3xl">
            Find the right product for you
            <Stars className="fill-yellow-500 h-7 md:h-9" />
          </h1>
          <div className="py-7  xl:flex space-y-6 xl:gap-x-4 ">
            {/* ------------leftside---------------- */}
            <div className="shadow-lg p-3 space-y-2">
              <h1 className="text-base">Discover</h1>
            </div>
            {/* ------------rightside---------------- */}
            <div className=" gap-4">
              {/* ----list of hedings */}
              <div className="flex gap-x-5 flex-wrap gap-y-2 overflow-x-auto">
                <h1 className="shadow-sm py-1 px-3 rounded-2xl bg-blue-700 text-white">
                  View All
                </h1>
                <h1 className="shadow-sm py-1 px-3 rounded-2xl bg-white text-gray-600">
                  Featured
                </h1>
                <h1 className="shadow-sm py-1 px-3 rounded-2xl bg-white text-gray-600">
                  Newest
                </h1>
                <h1 className="shadow-sm py-1 px-3 rounded-2xl bg-white text-gray-600">
                  Price-Low To High
                </h1>
                <h1 className="shadow-sm py-1 px-3 rounded-2xl bg-white text-gray-600">
                  Price-High To Low
                </h1>
              </div>
              <h1 className="text-gray-500 italic pt-4 pb-3">67.975 Items</h1>
              <div className="grid lg:grid-cols-3 gap-x-4 gap-y-4 grid-cols-1  overflow-x-hidden ">
                {/* ----------all the boxes according to grid------ */}
                {/* ----box1------------ */}
                <box1 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-red-200 text-red-600 py-1 px-2 rounded-xl ">
                        $39.00
                      </h2>
                    </div>
                  </div>
                </box1>
                {/* -----------box2--------------- */}
                <box2 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>

                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                        $69.00
                      </h2>
                    </div>
                  </div>
                </box2>
                {/* ---------------box3----------------- */}
                <box3 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-red-200 text-red-600 py-1 px-2 rounded-xl ">
                        $39.00
                      </h2>
                    </div>
                  </div>
                </box3>
                {/* -------------box4--------------- */}
                <box4 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>

                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                        $69.00
                      </h2>
                    </div>
                  </div>
                </box4>
                {/* ---------box5-------------- */}
                <box5 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>

                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                        $69.00
                      </h2>
                    </div>
                  </div>
                </box5>
                {/* --------------box6-------------------- */}
                <box6 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-red-200 text-red-600 py-1 px-2 rounded-xl ">
                        $39.00
                      </h2>
                    </div>
                  </div>
                </box6>
                {/* ----------box7------ */}
                <box7 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>

                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                        $69.00
                      </h2>
                    </div>
                  </div>
                </box7>
                {/* -------------------------box8------------- */}
                <box8 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>

                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                        $69.00
                      </h2>
                    </div>
                  </div>
                </box8>
                {/* ---------box9----------- */}
                <box9 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>

                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                        $69.00
                      </h2>
                    </div>
                  </div>
                </box9>
                {/* ---box10---------- */}
                <box10 className="col-span-3 bg-slate-800 space-y-2 p-7 flex flex-col items-center justify-center text-white xl:flex-row xl:justify-between">
                  <div className="gap-y-2 text-center">
                    <h1 className="font-semibold">
                      Excepteur sint occaecat
                      <span className="text-blue-500"> cupidatat </span> 🎁
                    </h1>
                    <p className="text-base text-slate-600">
                      Excepteur sint occaecat cupidatat non proidentsunt in
                      culpa qui officia deserunt mollit!
                    </p>
                  </div>
                  <button className="bg-blue-500 p-2 rounded-md font-semibold text-white">
                    Reedem Now!
                  </button>
                </box10>
                {/* ------------box11-------------- */}
                <box11 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>

                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                        $69.00
                      </h2>
                    </div>
                  </div>
                </box11>
                {/* ---------box12----------- */}
                <box12 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-red-200 text-red-600 py-1 px-2 rounded-xl ">
                        $39.00
                      </h2>
                    </div>
                  </div>
                </box12>
                {/* ----------box13---------- */}
                <box13 className="box bg-white relative">
                  <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                  <div className="px-3 py-3">
                    <h1 className="text-xl font-semibold">Form Builder CP</h1>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet adipiscing elit, sed do
                      eiusmod.
                    </p>
                    <div className="flex justify-between py-3">
                      <div className="flex items-center cursor-pointer ">
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-orange-400 text-orange-400" />
                        <Star className="h-4 fill-gray-400 text-gray-400" />

                        <p className="text-orange-600 px-1">4.7</p>
                      </div>
                      <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                        $39.00
                      </h2>
                    </div>
                  </div>
                </box13>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default shop2;
