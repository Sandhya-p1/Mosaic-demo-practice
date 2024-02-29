import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  Home,
  List,
  Heart,
  LineChart,
  Circle,
  Dot,
  Pin,
  MousePointer2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

function forum() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        {/* hero page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 py-6 md:px-7 text-gray-700">
          {/* left side part */}
          <div className="space-y-6">
            <div className=" flex justify-between items-center ">
              <h1 className="text-black  text-2xl font-bold md:text-3xl">
                Forum ✨
              </h1>
              <button className="bg-indigo-500 md:hidden hover:bg-indigo-600 font-medium rounded-md p-2 text-white text-base">
                Create Post
              </button>
            </div>
            <div className="flex  md:inline-block md:space-y-3 overflow-x-scroll no-scrollbar scroll-smooth gap-x-10 ">
              <div>
                <h1 className="uppercase text-xs text-slate-400 font-bold">
                  Menu
                </h1>
                <div className="cursor-pointer flex gap-x-3 md:gap-y-2 items-center py-2 md:inline-block">
                  <h1 className="flex t items-center gap-x-2  font-medium p-2 text-indigo-500 rounded-md bg-white w-full ">
                    <Home className="h-4 w-4 text-indigo-500" />
                    Home
                  </h1>

                  <h1 className="menulist flex-shrink-0">
                    <Heart className="icon" />
                    Reading List
                  </h1>
                  <h1 className="menulist">
                    <List className="icon" />
                    Listings
                  </h1>
                  <h1 className="menulist">
                    <LineChart className="icon" />
                    Podcasts
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="uppercase text-xs text-slate-400 font-bold">
                  Groups
                </h1>
                <div className="cursor-pointer flex gap-x-3 items-center py-2 md:gap-y-2 md:inline-block  ">
                  <h1 className="menulist">
                    <Circle className="h-4 w-4 text-green-600" />
                    Startups
                  </h1>
                  <h1 className="menulist flex-shrink-0">
                    <Circle className="h-4 w-4 text-red-600" />
                    Javascript
                  </h1>
                  <h1 className="menulist flex-shrink-0">
                    <Circle className="h-4 w-4 text-orange-600" />
                    Productivity
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* MIDDLE PART */}
          <div className="col-span-2 overflow-y-scroll no-scrollbar space-y-5 mt-3 md:mt-0">
            {/* box1 */}

            <div className="box grid grid-cols-3 w-full items-center cursor-pointer font-medium text-lg text-center ">
              <h1 className="text-blue-500  border-r-2  py-2 ">Popular</h1>
              <h1>Newest</h1>

              <h1 className=" border-l-2 py-2 ">Following</h1>
            </div>
            {/* box2 */}
            <div className="box px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  Share Your Startup - December 2021 - Upvote This For Maximum
                  Visibility! <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 flex items-center ">
                      <Pin className="h-4 w-4" />
                      ekuplu89
                    </span>
                    <Dot className="icon " /> 7d
                    <Dot className="icon" /> 688 Comments
                  </span>
                </h1>
              </div>
              <div className=" p-[2px] bg-blue-50  rounded-md">
                <div className="px-4 py-2 border-blue-600 border bg-white space-y-1 text-sm   rounded-md ">
                  <MousePointer2 className="text-blue-600 fill-blue-600 h-3 ml-1 w-4" />

                  <h1>499</h1>
                </div>
              </div>
            </div>
            {/* box3 */}
            <div className="box px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  Failed for the past 12 years as a tech entrepreneur. My key
                  takeaways.
                  <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 flex items-center ">
                      <Pin className="h-4 w-4" />
                      ekuplu89
                    </span>
                    <Dot className="icon " /> 4h
                    <Dot className="icon" /> 14 Comments
                  </span>
                </h1>
              </div>
              <div className=" p-[2px] bg-blue-50  rounded-md">
                <div className="px-4 py-2 border-blue-600 border bg-white space-y-1 text-sm   rounded-md ">
                  <MousePointer2 className="text-blue-600 fill-blue-600 h-3 ml-1 w-4" />

                  <h1>217</h1>
                </div>
              </div>
            </div>
            {/* box4 */}
            <div className="box px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  Besides Product Hunt, where else should I promote my new
                  project? 🤔
                  <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 ">katemerlu</span>
                    <Dot className="icon " /> 2h
                    <Dot className="icon" /> 17 Comments
                  </span>
                </h1>
              </div>
              <div className=" p-[2px] bg-blue-50  rounded-md">
                <div className="px-4 py-2 border-blue-600 border bg-white space-y-1 text-sm   rounded-md ">
                  <MousePointer2 className="text-gray-600 fill-gray-600 h-3 ml-1 w-4" />

                  <h1>44</h1>
                </div>
              </div>
            </div>
            {/* box5 */}
            <div className="box px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA. <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 flex items-center ">
                      <Pin className="h-4 w-4" />
                      markusj
                    </span>
                    <Dot className="icon " /> 2d
                    <Dot className="icon" /> 298 Comments
                  </span>
                </h1>
              </div>
              <div className=" p-[2px] bg-blue-50  rounded-md">
                <div className="px-4 py-2 border-blue-600 border bg-white space-y-1 text-sm   rounded-md ">
                  <MousePointer2 className="text-gray-600 fill-gray-600 h-3 ml-1 w-4" />

                  <h1>217</h1>
                </div>
              </div>
            </div>
            {/* box6 */}
            <div className="box px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  Had a full-time job, bootstrapped a side project to 7 digit
                  ARR, now building another side project—AMA <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 flex items-center ">
                      <Pin className="h-4 w-4" />
                      davidp1
                    </span>
                    <Dot className="icon " /> 2d
                    <Dot className="icon" /> 312 Comments
                  </span>
                </h1>
              </div>
              <div className=" p-[2px] bg-blue-50  rounded-md">
                <div className="px-4 py-2 border-blue-600 border bg-white space-y-1 text-sm   rounded-md ">
                  <MousePointer2 className="text-blue-600 fill-blue-600 h-3 ml-1 w-4" />

                  <h1>399</h1>
                </div>
              </div>
            </div>
            {/* box7 */}
            <div className="border border-orange-400 rounded-md bg-orange-50 px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  💸 Trade crypto, fiat, and stablecoins with Crypto.io. Low
                  fees and incredible performance! <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 flex items-center ">
                      <Pin className="h-4 w-4" />
                      crypto.io
                    </span>
                    <Dot className="icon " /> Promoted
                  </span>
                </h1>
              </div>
            </div>
            {/* box8 */}
            <div className="box px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  Which are the main channels you use to drive traffic to your
                  website? 📈 <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 flex items-center ">
                      <Pin className="h-4 w-4" />
                      sophiestar
                    </span>
                    <Dot className="icon " /> 3d
                    <Dot className="icon" /> 66 Comments
                  </span>
                </h1>
              </div>
              <div className=" p-[2px] bg-blue-50  rounded-md">
                <div className="px-4 py-2 border-gray-600 border bg-white space-y-1 text-sm   rounded-md ">
                  <MousePointer2 className="text-gray-600 fill-gray-600 h-3 ml-1 w-4" />

                  <h1>31</h1>
                </div>
              </div>
            </div>
            {/* box9 */}
            <div className="box px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  How to build a following on Twitter as a founder - A guide to
                  growing your audience 🚀 <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 flex items-center ">
                      <Pin className="h-4 w-4" />
                      molliehacks
                    </span>
                    <Dot className="icon " /> 3d
                    <Dot className="icon" /> 27 Comments
                  </span>
                </h1>
              </div>
              <div className=" p-[2px] bg-blue-50  rounded-md">
                <div className="px-4 py-2 border-blue-600 border bg-white space-y-1 text-sm   rounded-md ">
                  <MousePointer2 className="text-blue-600 fill-blue-600 h-3 ml-1 w-4" />

                  <h1>22</h1>
                </div>
              </div>
            </div>
            {/* box10 */}
            <div className="box px-4 py-6 flex justify-between items-center space-x-1">
              <div className="flex gap-x-3">
                <img
                  src="https://logodix.com/logo/1255376.png"
                  className="h-12 w-10 object-cover"
                />
                <h1 className="text-black font-medium text-xl space-y-2">
                  How important is customer feedback for the improvement of a
                  product? <br />
                  <span className="text-base text-gray-400 flex items-center font-normal">
                    <span className="text-blue-600 flex items-center ">
                      <Pin className="h-4 w-4" />
                      elenmisk
                    </span>
                    <Dot className="icon " /> 5d
                    <Dot className="icon" /> 61 Comments
                  </span>
                </h1>
              </div>
              <div className=" p-[2px] bg-blue-50  rounded-md">
                <div className="px-4 py-2 border-gray-600 border bg-white space-y-1 text-sm   rounded-md ">
                  <MousePointer2 className="text-gray-600 fill-gray-600 h-3 ml-1 w-4" />

                  <h1>34</h1>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 justify-end items-center">
              <button className="text-gray-300 btn flex items-center cursor-text">
                <ArrowLeft className="h-5 w-6 px-1 " />
                Previous
              </button>
              <button className="text-blue-500 btn flex items-center hover:border-gray-300">
                Next
                <ArrowRight className="h-5 w-6 px-1" />
              </button>
            </div>
          </div>
          {/* right part */}
          <div className="pl-6 space-y-5">
            <button className="py-2 text-center w-full bg-indigo-500 hover:bg-indigo-600 text-white text-base font-medium rounded-md">
              Create Post
            </button>
            {/* box1 */}
            <div className="box p-4 space-y-4 ">
              <h1 className="uppercase text-slate-400 text-sm font-bold">
                forum meetups
              </h1>

              <li>
                <div className="px-6 space-y-1 text-sm font-semibold">
                  <h1 className="uppercase text-indigo-500 ">Mon 27 dec</h1>
                  <p className="text-base">
                    Silicon Valley Bootstrapper Breakfast Online for 2021
                  </p>
                  <div className=" flex items-center py-1">
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full -ml-4 border border-white "
                    />
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full -ml-4"
                    />
                    <p className="px-2 text-slate-400 font-semibold "> +22</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="px-6 space-y-1 text-sm font-medium">
                  <h1 className="uppercase text-indigo-500 ">Mon 27 dec</h1>
                  <p className="text-base">
                    New York & New Jersey Virtual Retreat
                  </p>
                  <div className=" flex items-center py-1">
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full -ml-4 border border-white "
                    />
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full -ml-4"
                    />
                    <p className="px-2 text-slate-400 font-semibold "> +132</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="px-6 space-y-1 text-sm font-semibold">
                  <h1 className="uppercase text-indigo-500 ">Mon 29 dec</h1>
                  <p className="text-base">
                    The World of AI and Machine Learning - Open Chat
                  </p>
                  <div className=" flex items-center py-1">
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full -ml-4 border border-white "
                    />
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full -ml-4"
                    />
                    <p className="px-2 text-slate-400 font-semibold "> +12</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="px-6 space-y-1 text-sm font-semibold">
                  <h1 className="uppercase text-indigo-500 ">Mon 29 dec</h1>
                  <p className="text-base">
                    NYC Code & Coffee 2.0 @ Freehold Brooklyn
                  </p>
                  <div className=" flex items-center">
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full -ml-4 border border-white "
                    />
                    <img
                      src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                      className="h-8 w-8 rounded-full -ml-4"
                    />
                    <p className="px-2 text-slate-400 font-semibold "> +17</p>
                  </div>
                </div>
              </li>
              <button className="py-1 rounded-sm border text-blue-500 w-full hover:border-gray-300">
                View All
              </button>
            </div>
            {/* box2 */}
            <div className="box p-4 space-y-4">
              <h1 className="uppercase text-slate-400 text-xs font-bold">
                Popular stories
              </h1>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <button className="py-1 rounded-sm border text-blue-500 w-full hover:border-gray-300">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default forum;
