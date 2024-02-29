import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  Activity,
  ArrowRight,
  ArrowsUpFromLine,
  Calendar,
  File,
  Heart,
  Layers3Icon,
  Pin,
  Search,
  Star,
  Stars,
} from "lucide-react";

function shop() {
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-6 py-8  text-black">
          <div className=" space-y-3 ">
            <h1 className="font-bold gap-x-1 text-black flex items-center text-2xl md:text-3xl">
              Find the right product for you
              <Stars className="fill-yellow-500 h-7 md:h-9" />
            </h1>
            {/* -------search box--------------- */}
            <div className="text-gray-500 p-2 flex items-center rounded-md border border-gray-200 shadow-sm bg-white gap-x-1 w-full md:w-1/2">
              <Search className="h-4 hover:text-gray-700" />
              <input
                type="search"
                placeholder="Search..."
                className="text-gray-500 bg-white border-none w-full outline-none"
              />
            </div>
            {/* ----------list of headings-------------- */}
            <div className="flex no-scrollbar text-base overflow-x-auto  whitespace-nowrap space-x-4 font-semibold text-gray-500 ">
              <h1 className="text-blue-600">View All</h1>
              <h1>Courses</h1>
              <h1>Digital Goods</h1>
              <h1>Online Events</h1>
              <h1>Crowdfunding</h1>
            </div>
            <div className="border border-gray-200 w-full" />
            <h1 className="font-bold text-xl py-3">Video Courses</h1>
            {/* ------------all the boxes elements are here------- */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 scroll-smooth gap-x-5">
              {/* ---------bpx1-------------- */}
              <box1 className="box bg-white">
                <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                <div className="px-3 py-4">
                  <h1 className="text-xl font-semibold">
                    HTML, CSS, JavaScript - Build 6 Creative Projects
                  </h1>
                  <div className="flex justify-between py-4">
                    <div className="flex items-center cursor-pointer ">
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />

                      <Star className="h-4 fill-gray-300 text-gray-300" />
                      <p className="text-orange-600 px-1">4.2</p>
                    </div>
                    <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                      $89.00
                    </h2>
                  </div>
                  <div className="text-gray-600 space-y-2 ">
                    <p className="flex  items-center pr-1">
                      <Pin className="h-4" />
                      23 hours on-demand video
                    </p>
                    <p className="flex items-center pr-1">
                      <File className="h-4" />
                      37 articles
                    </p>
                    <p className="flex items-center pr-1">
                      <ArrowsUpFromLine className="h-4" />
                      Access on mobile and TV
                    </p>
                    <p className="flex items-center gap-x-1">
                      <Activity className="h-5" />
                      8K+ active installations
                    </p>
                  </div>
                  <button className="p-1 mt-5 mb-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Now
                  </button>
                </div>
              </box1>
              {/* ---------box2------------- */}
              <box2 className="box bg-white">
                <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                <div className="px-3 py-4">
                  <h1 className="text-xl font-semibold">
                    HTML, CSS, JavaScript - Build 6 Creative Projects
                  </h1>
                  <div className="flex justify-between py-4">
                    <div className="flex items-center cursor-pointer ">
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />

                      <Star className="h-4 fill-gray-300 text-gray-300" />
                      <p className="text-orange-600 px-1">3.9</p>
                    </div>
                    <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                      $49.00
                    </h2>
                  </div>
                  <div className="text-gray-600 space-y-2 ">
                    <p className="flex  items-center pr-1">
                      <Pin className="h-4" />
                      23 hours on-demand video
                    </p>
                    <p className="flex items-center pr-1">
                      <File className="h-4" />
                      37 articles
                    </p>
                    <p className="flex items-center pr-1">
                      <ArrowsUpFromLine className="h-4" />
                      Access on mobile and TV
                    </p>
                    <p className="flex items-center gap-x-1">
                      <Activity className="h-5" />
                      8K+ active installations
                    </p>
                  </div>
                  <button className="p-1 mt-5 mb-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Now
                  </button>
                </div>
              </box2>
              {/* -------------box3---------------- */}
              <box3 className="box bg-white">
                <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                <div className="px-3 py-4">
                  <h1 className="text-xl font-semibold">
                    HTML, CSS, JavaScript - Build 6 Creative Projects
                  </h1>
                  <div className="flex justify-between py-4">
                    <div className="flex items-center cursor-pointer ">
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />

                      <Star className="h-4 fill-gray-300 text-gray-300" />
                      <p className="text-orange-600 px-1">4.6</p>
                    </div>
                    <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                      $129.00
                    </h2>
                  </div>
                  <div className="text-gray-600 space-y-2 ">
                    <p className="flex  items-center pr-1">
                      <Pin className="h-4" />
                      23 hours on-demand video
                    </p>
                    <p className="flex items-center pr-1">
                      <File className="h-4" />
                      37 articles
                    </p>
                    <p className="flex items-center pr-1">
                      <ArrowsUpFromLine className="h-4" />
                      Access on mobile and TV
                    </p>
                    <p className="flex items-center gap-x-1">
                      <Activity className="h-5" />
                      8K+ active installations
                    </p>
                  </div>
                  <button className="p-1 mt-5 mb-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Now
                  </button>
                </div>
              </box3>
              {/* ---------------box4------------- */}
              <box4 className="box bg-white">
                <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                <div className="px-3 py-4">
                  <h1 className="text-xl font-semibold">
                    HTML, CSS, JavaScript - Build 6 Creative Projects
                  </h1>
                  <div className="flex justify-between py-4">
                    <div className="flex items-center cursor-pointer ">
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />
                      <Star className="h-4 fill-orange-400 text-orange-400" />

                      <Star className="h-4 fill-gray-300 text-gray-300" />
                      <p className="text-orange-600 px-1">4.6</p>
                    </div>
                    <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                      $129.00
                    </h2>
                  </div>
                  <div className="text-gray-600 space-y-2 ">
                    <p className="flex  items-center pr-1">
                      <Pin className="h-4" />
                      23 hours on-demand video
                    </p>
                    <p className="flex items-center pr-1">
                      <File className="h-4" />
                      37 articles
                    </p>
                    <p className="flex items-center pr-1">
                      <ArrowsUpFromLine className="h-4" />
                      Access on mobile and TV
                    </p>
                    <p className="flex items-center gap-x-1">
                      <Activity className="h-5" />
                      8K+ active installations
                    </p>
                  </div>
                  <button className="p-1 mt-5 mb-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Now
                  </button>
                </div>
              </box4>
              <h1 className="font-bold text-xl md:col-span-4 sm:col-span-2">
                Digital Goods
              </h1>
              {/* ------------box 5------------- */}
              <box5 className="box bg-white">
                <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                <div className="px-3 py-3">
                  <h1 className="text-xl font-semibold">Form Builder CP</h1>
                  <p className="text-gray-600">
                    Master Digital Marketing Strategy, Social Media Marketing,
                    Analytics & More!
                  </p>
                  <div className="flex justify-between py-3">
                    <div className="flex items-center cursor-pointer ">
                      <Star className="h-4 fill-orange-400 text-orange-400" />

                      <p className="text-orange-600 px-1">4.7</p>
                      <p className="text-gray-400 ">(478)</p>
                    </div>
                    <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                      $89.00
                    </h2>
                  </div>

                  <button className="p-1  mb-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Now
                  </button>
                </div>
              </box5>
              {/* --------box6------------- */}
              <box6 className="box bg-white">
                <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                <div className="px-3 py-3">
                  <h1 className="text-xl font-semibold">Form Builder CP</h1>
                  <p className="text-gray-600">
                    Master Digital Marketing Strategy, Social Media Marketing,
                    Analytics & More!
                  </p>
                  <div className="flex justify-between py-3">
                    <div className="flex items-center cursor-pointer ">
                      <Star className="h-4 fill-orange-400 text-orange-400" />

                      <p className="text-orange-600 px-1">4.7</p>
                      <p className="text-gray-400 ">(478)</p>
                    </div>
                    <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                      $89.00
                    </h2>
                  </div>

                  <button className="p-1  mb-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Now
                  </button>
                </div>
              </box6>
              {/* ------------box7--------------- */}
              <box7 className="box bg-white">
                <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                <div className="px-3 py-3">
                  <h1 className="text-xl font-semibold">Form Builder CP</h1>
                  <p className="text-gray-600">
                    Master Digital Marketing Strategy, Social Media Marketing,
                    Analytics & More!
                  </p>
                  <div className="flex justify-between py-3">
                    <div className="flex items-center cursor-pointer ">
                      <Star className="h-4 fill-orange-400 text-orange-400" />

                      <p className="text-orange-600 px-1">4.7</p>
                      <p className="text-gray-400 ">(478)</p>
                    </div>
                    <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                      $89.00
                    </h2>
                  </div>

                  <button className="p-1  mb-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Now
                  </button>
                </div>
              </box7>
              {/* -----------box8------------- */}
              <box8 className="box bg-white">
                <img src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg" />
                <div className="px-3 py-3">
                  <h1 className="text-xl font-semibold">Form Builder CP</h1>
                  <p className="text-gray-600">
                    Master Digital Marketing Strategy, Social Media Marketing,
                    Analytics & More!
                  </p>
                  <div className="flex justify-between py-3">
                    <div className="flex items-center cursor-pointer ">
                      <Star className="h-4 fill-orange-400 text-orange-400" />

                      <p className="text-orange-600 px-1">4.7</p>
                      <p className="text-gray-400 ">(478)</p>
                    </div>
                    <h2 className="bg-green-200 text-green-600 py-1 px-2 rounded-xl ">
                      $89.00
                    </h2>
                  </div>

                  <button className="p-1  mb-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Now
                  </button>
                </div>
              </box8>
              <h1 className="font-bold text-xl md:col-span-4 sm:col-span-2">
                Online Events
              </h1>
              {/* ---------------------box9------------------- */}

              <box9 className="bg-white box">
                <div className="relative">
                  <img
                    src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg"
                    className="w-full"
                  />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                </div>
                <div className="px-3 py-3">
                  <h1 className="text-xl font-semibold">
                    Health and Happiness Workshop
                  </h1>
                  <div className="space-y-2 py-3">
                    <h1 className="flex items-center gap-x-2 text-red-500">
                      <Calendar className="h-4 text-gray-400" />
                      Fri 7 Aug 2021 23:00 CEST
                    </h1>
                    <h1 className="flex items-center gap-x-2 text-gray-600">
                      <Layers3Icon className="h-4 text-gray-400 " />
                      Starts at $16.24 / person
                    </h1>
                  </div>

                  <button className="p-1  my-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Tickets
                  </button>
                </div>
              </box9>
              {/* ----------box10------------------- */}
              <box10 className="bg-white box">
                <div className="relative">
                  <img
                    src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg"
                    className="w-full"
                  />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                </div>
                <div className="px-3 py-3">
                  <h1 className="text-xl font-semibold">
                    Health and Happiness Workshop
                  </h1>
                  <div className="space-y-2 py-3">
                    <h1 className="flex items-center gap-x-2 text-red-500">
                      <Calendar className="h-4 text-gray-400" />
                      Fri 7 Aug 2021 23:00 CEST
                    </h1>
                    <h1 className="flex items-center gap-x-2 text-gray-600">
                      <Layers3Icon className="h-4 text-gray-400 " />
                      Starts at $16.24 / person
                    </h1>
                  </div>

                  <button className="p-1  my-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Tickets
                  </button>
                </div>
              </box10>
              {/* ---------------box11------------------------ */}
              <box11 className="bg-white box">
                <div className="relative">
                  <img
                    src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg"
                    className="w-full"
                  />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                </div>
                <div className="px-3 py-3">
                  <h1 className="text-xl font-semibold">
                    Health and Happiness Workshop
                  </h1>
                  <div className="space-y-2 py-3">
                    <h1 className="flex items-center gap-x-2 text-red-500">
                      <Calendar className="h-4 text-gray-400" />
                      Fri 7 Aug 2021 23:00 CEST
                    </h1>
                    <h1 className="flex items-center gap-x-2 text-gray-600">
                      <Layers3Icon className="h-4 text-gray-400 " />
                      Starts at $16.24 / person
                    </h1>
                  </div>

                  <button className="p-1  my-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Tickets
                  </button>
                </div>
              </box11>
              {/* --------------------box12--------------------- */}
              <box12 className="bg-white box">
                <div className="relative">
                  <img
                    src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg"
                    className="w-full"
                  />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                </div>
                <div className="px-3 py-3">
                  <h1 className="text-xl font-semibold">
                    Health and Happiness Workshop
                  </h1>
                  <div className="space-y-2 py-3">
                    <h1 className="flex items-center gap-x-2 text-red-500">
                      <Calendar className="h-4 text-gray-400" />
                      Fri 7 Aug 2021 23:00 CEST
                    </h1>
                    <h1 className="flex items-center gap-x-2 text-gray-600">
                      <Layers3Icon className="h-4 text-gray-400 " />
                      Starts at $16.24 / person
                    </h1>
                  </div>

                  <button className="p-1  my-3 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Buy Tickets
                  </button>
                </div>
              </box12>
              <h1 className="font-bold text-xl md:col-span-4 sm:col-span-2">
                Crowdfunding
              </h1>
              {/* -------box13-------------------------- */}
              <box13 className="bg-white box">
                <div className="relative">
                  <img
                    src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg"
                    className="w-full"
                  />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                </div>
                <div className="px-3 py-4">
                  <h2 className="text-green-500 font-semibold text-sm">
                    FUNDING
                  </h2>
                  <h1 className="text-lg font-semibold">
                    SwiftNight Home Plus
                  </h1>
                  <p className="text-gray-600 text-base">
                    Lorem ipsum is placeholder text commonly used.
                  </p>
                  <div className="flex justify-between pt-4 pb-2">
                    <h2 className="font-semibold text-black ">
                      $789,784
                      <span className="text-gray-600 px-2 font-normal">
                        raised
                      </span>
                    </h2>
                    <p className="text-gray-600">64%</p>
                  </div>
                  <div className="border p-1 rounded-lg bg-gray-400 bg-gradient-to-r from-green-600 to-gray-500  " />
                  <p className="text-gray-700  text-[13px] ">30 Days Left</p>

                  <button className="p-1  mt-4 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Back it
                  </button>
                </div>
              </box13>
              {/* --------------------box14----------------------- */}
              <box14 className="bg-white box">
                <div className="relative">
                  <img
                    src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg"
                    className="w-full"
                  />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                </div>
                <div className="px-3 py-4">
                  <h2 className="text-green-500 font-semibold text-sm">
                    FUNDING
                  </h2>
                  <h1 className="text-lg font-semibold">
                    SwiftNight Home Plus
                  </h1>
                  <p className="text-gray-600 text-base">
                    Lorem ipsum is placeholder text commonly used.
                  </p>
                  <div className="flex justify-between pt-4 pb-2">
                    <h2 className="font-semibold text-black ">
                      $789,784
                      <span className="text-gray-600 px-2 font-normal">
                        raised
                      </span>
                    </h2>
                    <p className="text-gray-600">64%</p>
                  </div>
                  <div className="border p-1 rounded-lg bg-gray-400 bg-gradient-to-r from-green-600 to-gray-500  " />
                  <p className="text-gray-700  text-[13px] ">30 Days Left</p>

                  <button className="p-1  mt-4 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Back it
                  </button>
                </div>
              </box14>
              {/* ----------box15-------------- */}
              <box15 className="bg-white box">
                <div className="relative">
                  <img
                    src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg"
                    className="w-full"
                  />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                </div>
                <div className="px-3 py-4">
                  <h2 className="text-green-500 font-semibold text-sm">
                    FUNDING
                  </h2>
                  <h1 className="text-lg font-semibold">
                    SwiftNight Home Plus
                  </h1>
                  <p className="text-gray-600 text-base">
                    Lorem ipsum is placeholder text commonly used.
                  </p>
                  <div className="flex justify-between pt-4 pb-2">
                    <h2 className="font-semibold text-black ">
                      $789,784
                      <span className="text-gray-600 px-2 font-normal">
                        raised
                      </span>
                    </h2>
                    <p className="text-gray-600">64%</p>
                  </div>
                  <div className="border p-1 rounded-lg bg-gray-400 bg-gradient-to-r from-green-600 to-gray-500  " />
                  <p className="text-gray-700  text-[13px] ">30 Days Left</p>

                  <button className="p-1  mt-4 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Back it
                  </button>
                </div>
              </box15>
              {/* -----------box16--------------- */}
              <box16 className="bg-white box">
                <div className="relative">
                  <img
                    src="https://1721181113.rsc.cdn77.org/data/images/full/48743/enhanced-cybersecurity-using-random-number-generator-based-on-perovskite-led-offers-safer-exchange-of-digital-information.jpg"
                    className="w-full"
                  />
                  <button className="absolute top-0 right-0 p-2 bg-black bg-opacity-45  rounded-full m-3">
                    <Heart
                      className="h-4 w-4 
                         text-white"
                    />
                  </button>
                </div>
                <div className="px-3 py-4">
                  <h2 className="text-green-500 font-semibold text-sm">
                    FUNDING
                  </h2>
                  <h1 className="text-lg font-semibold">
                    SwiftNight Home Plus
                  </h1>
                  <p className="text-gray-600 text-base">
                    Lorem ipsum is placeholder text commonly used.
                  </p>
                  <div className="flex justify-between pt-4 pb-2">
                    <h2 className="font-semibold text-black ">
                      $789,784
                      <span className="text-gray-600 px-2 font-normal">
                        raised
                      </span>
                    </h2>
                    <p className="text-gray-600">64%</p>
                  </div>
                  <div className="border p-1 rounded-lg bg-gray-400 bg-gradient-to-r from-green-600 to-gray-500  " />
                  <p className="text-gray-700  text-[13px] ">30 Days Left</p>

                  <button className="p-1  mt-4 flex justify-center text-white text-base font-sem4 hover:bg-blue-700 bg-blue-500 rounded-lg w-full ">
                    Back it
                  </button>
                </div>
              </box16>
              <h1 className="font-bold text-xl md:col-span-4 sm:col-span-2">
                Popular Categories
              </h1>
              {/* -----------box17----------- */}
              <box17 className="box flex flex-col items-center justify-center py-6 space-y-2 ">
                <img
                  src="https://w7.pngwing.com/pngs/75/287/png-transparent-blue-cube-logo-blue-rubiks-cube-blue-cube-blue-angle-rectangle-thumbnail.png"
                  className="h-12 w-12 p-2 rounded-full bg-gray-300 "
                />
                <h1 className="text-2xl font-semibold">Merchandise</h1>
                <p className="flex gap-x-1 text-blue-600 text-base">
                  Explore <ArrowRight className="w-4" />
                </p>
              </box17>
              {/* -------box18---------------- */}
              <box18 className="box flex flex-col items-center justify-center py-6 space-y-2 ">
                <img
                  src="https://w7.pngwing.com/pngs/75/287/png-transparent-blue-cube-logo-blue-rubiks-cube-blue-cube-blue-angle-rectangle-thumbnail.png"
                  className="h-12 w-12 p-2 rounded-full bg-gray-300 "
                />
                <h1 className="text-2xl font-semibold">Audiobooks</h1>
                <p className="flex gap-x-1 text-blue-600 text-base">
                  Explore <ArrowRight className="w-4" />
                </p>
              </box18>
              {/* --------box19--------- */}
              <box19 className="box flex flex-col items-center justify-center py-6 space-y-2 ">
                <img
                  src="https://w7.pngwing.com/pngs/75/287/png-transparent-blue-cube-logo-blue-rubiks-cube-blue-cube-blue-angle-rectangle-thumbnail.png"
                  className="h-12 w-12 p-2 rounded-full bg-gray-300 "
                />
                <h1 className="text-2xl font-semibold">Design and Tech</h1>
                <p className="flex gap-x-1 text-blue-600 text-base">
                  Explore <ArrowRight className="w-4" />
                </p>
              </box19>
              {/* -----------box20------------ */}
              <box20 className="box flex flex-col items-center justify-center py-6 space-y-2 ">
                <img
                  src="https://w7.pngwing.com/pngs/75/287/png-transparent-blue-cube-logo-blue-rubiks-cube-blue-cube-blue-angle-rectangle-thumbnail.png"
                  className="h-12 w-12 p-2 rounded-full bg-gray-300 "
                />
                <h1 className="text-2xl font-semibold">Apps & Software</h1>
                <p className="flex gap-x-1 text-blue-600 text-base">
                  Explore <ArrowRight className="w-4" />
                </p>
              </box20>
              <h1 className="font-bold text-xl md:col-span-4 sm:col-span-2">
                Trending Now
              </h1>
              {/* -----box21---------- */}
              <box21 className="relative  ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&usqp=CAU"
                  className="w-full h-44"
                />
                <div className=" absolute left-0 bottom-0 p-4 ">
                  <h1 className="text-white font-semibold text-lg">
                    Merchandise
                  </h1>
                  <p className="text-blue-600 flex font-semibold items-center gap-x-1 text-base">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
              </box21>
              {/* -----------box22----------------- */}
              <box22 className="relative  ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&usqp=CAU"
                  className="w-full h-44"
                />
                <div className=" absolute left-0 bottom-0 p-4 ">
                  <h1 className="text-white font-semibold text-lg">
                    Audiobooks
                  </h1>
                  <p className="text-blue-600 flex font-semibold items-center gap-x-1 text-base">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
              </box22>
              {/* -----------box23------------------ */}
              <box23 className="relative  ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&usqp=CAU"
                  className="w-full h-44"
                />
                <div className=" absolute left-0 bottom-0 p-4 ">
                  <h1 className="text-white font-semibold text-lg">
                    Design & Tech
                  </h1>
                  <p className="text-blue-600 flex font-semibold items-center gap-x-1 text-base">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
              </box23>
              {/* ----------------box24----------------- */}
              <box24 className="relative  ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfrT8Vjk9QJrwwSwwBUzizJ2vPTiZ9Y6lcA&usqp=CAU"
                  className="w-full h-44"
                />
                <div className=" absolute left-0 bottom-0 p-4 ">
                  <h1 className="text-white font-semibold text-lg">
                    Merchandise
                  </h1>
                  <p className="text-blue-600 cursor-pointer flex font-semibold items-center gap-x-1 text-base">
                    Apps & Software
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
              </box24>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default shop;
