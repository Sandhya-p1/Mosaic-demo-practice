import Sidebar from "./components/Sidebar";
import React from "react";
import Nav from "./components/Nav";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Circle,
  Dot,
  RefreshCcw,
  Square,
  StarsIcon,
} from "lucide-react";

function analytics() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        <div>
          <div className="text-slate-800 flex justify-between p-8 item-center text-4xl ">
            <p className=" flex gap-x-1 font-bold  items-center">
              Analytics <StarsIcon />
            </p>
            <h1>Date And Time</h1>
          </div>
          {/* here goes all thr graph part  */}
          <div className="grid grid-cols-6   text-slate-800 gap-4 p-5">
            {/*Box 1   */}
            <box1 className="box col-span-4">
              <p className="font-semibold p-5 text-xl">Analytics </p>
              <div className="border border-gray-200 " />
              {/* box inside elements  */}
              <div className="px-5 py-3 flex items-center space-x-6">
                <div className="items-center space-y-2">
                  <h1 className="text-4xl font-bold flex items-center">
                    24.7K
                    <span className="text-green-500 text-lg font-semibold ml-2 ">
                      +49%
                    </span>
                  </h1>
                  <p className="text-base text-gray-600">Unique Visitors</p>
                </div>
                <div className="h-9  border border-gray-200" />
                <div className="items-center space-y-2">
                  <h1 className="text-4xl font-bold flex items-center">
                    56.9K
                    <span className="text-green-500 text-lg font-semibold ml-2 ">
                      +7%
                    </span>
                  </h1>
                  <p className="text-base text-gray-600">Total Pageviews</p>
                </div>
                <div className="h-9  border border-gray-200" />
                <div className="items-center space-y-2">
                  <h1 className="text-4xl font-bold flex items-center">
                    54%
                    <span className="text-red-500 text-lg font-semibold ml-2 ">
                      -7%
                    </span>
                  </h1>
                  <p className="text-base text-gray-600">Bounce Rate</p>
                </div>
                <div className="h-9  border border-gray-200" />
                <div className="items-center space-y-2">
                  <h1 className="text-4xl font-bold flex items-center">
                    2m 56s
                    <span className="text-red-500 text-lg font-semibold ml-2 ">
                      +7%
                    </span>
                  </h1>
                  <p className="text-base text-gray-600">Visit Durations</p>
                </div>
              </div>
            </box1>

            {/* box2 */}
            <box2 className="box col-span-2 ">
              <p className="font-semibold p-5 text-xl">
                Active Users Right Now
              </p>
              <div className="border border-gray-200 " />
              <div className="px-7 py-3">
                <h1 className="flex  font-bold text-4xl">
                  <Dot className="text-red-500 mt-3 h-6 w-6" />
                  347
                </h1>
                <p className="text-gray-500 px-6 py-2">Live Visitors</p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbFFwa9QUEhoc_Ic_1oH_lbr_1c1Fxdid9hg&usqp=CAU"
                  className="h-12 w-full"
                />
                <div className="flex text-gray-400 py-4 text-base font-semibold justify-between">
                  <h1>TOP PAGES</h1>
                  <h2>ACTIVE USERS</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p>preview.cruip.com/open-pro/</p>
                    <h2 className="font-semibold">94</h2>
                  </div>
                  <div className="border border-gray-100 " />
                  <div className="flex justify-between">
                    <p>preview.cruip.com/open-pro/</p>
                    <h2 className="font-semibold">42</h2>
                  </div>
                  <div className="border border-gray-100 " />
                  <div className="flex justify-between">
                    <p>preview.cruip.com/open-pro/</p>
                    <h2 className="font-semibold">12</h2>
                  </div>
                  <div className="border border-gray-100 " />
                  <div className="flex justify-between">
                    <p>preview.cruip.com/open-pro/</p>
                    <h2 className="font-semibold">4</h2>
                  </div>
                  <div className="border border-gray-100 " />
                </div>
                <p className="text-blue-600 pt-9 font-semibold justify-end flex cursor-pointer">
                  Real-Time Report <ArrowRight className="w-5" />
                </p>
              </div>
            </box2>
            <box3 className="box col-span-3  ">
              <h1 className="p-4 font-semibold text-xl">Acquisition Channel</h1>
              <div className="border border-gray-200 w-full" />
              <div className="flex space-x-1 px-4 py-3 items-center text-gray-500 font-semibold">
                <Circle className="h-3 text-blue-800 " />
                <p>Direct</p>
                <Circle className="h-3 text-blue-700" />
                <p>Referral</p>
                <Circle className="h-3 text-blue-600" />
                <p>Organic Search</p>
                <Circle className="h-3 text-blue-500" />
                <p>Social</p>
              </div>
            </box3>
            <box4 className=" col-span-3 analyticsbox ">
              <h1 className="p-4 font-semibold text-xl">Audience Overview</h1>
              <div className="border border-gray-200 w-full" />
              <div className="flex space-x-1 px-4 py-3 items-center text-gray-500 font-semibold">
                <Circle className="h-3 text-blue-800 " />
                <p>New Visitors </p>
                <Circle className="h-3 text-blue-700" />
                <p>Returning Visitors</p>
              </div>
            </box4>
            <box5 className="box col-span-2">
              <h1 className="p-4 font-semibold text-xl">Top Countries</h1>
              <div className="border border-gray-200 " />
              <div className="px-4 py-3">
                <div className=" flex justify-between pb-4 text-gray-400 font-bold text-sm">
                  <h1>SOURCE</h1>
                  <p>SESSIONS</p>
                </div>
                <div className="space-y-1 font-semibold ">
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-5/6 rounded-sm">
                      🇨🇮 Ireland
                    </p>
                    <h1>4.2k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-4/5 rounded-sm">
                      🇺🇸 United States
                    </p>
                    <h1>3.4k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-3/4 rounded-sm">
                      🇩🇪 Germany
                    </p>
                    <h1>1.6k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-2/3 rounded-sm">
                      🇮🇹 Italy
                    </p>
                    <h1>1.2k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-2/4 rounded-sm">
                      🇬🇧 United Kingdom
                    </p>
                    <h1>912</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-2/5 rounded-sm">
                      🇫🇷 France
                    </p>
                    <h1>677</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-1/4 rounded-sm">
                      🇮🇳 India
                    </p>
                    <h1>449</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-[10%] rounded-md">
                      🇸🇬 Singapore
                    </p>
                    <h1>269</h1>
                  </div>
                </div>
                <div className="border border-gray-200 my-3 " />
                <p className="py-2 flex gap-x-1 items-center cursor-pointer justify-center text-blue-500 font-semibold">
                  Countries Report <ArrowRight className="w-4" />
                </p>
              </div>
            </box5>
            <box6 className="box col-span-2">
              <h1 className="p-4 font-semibold text-xl">Top Pages</h1>
              <div className="border border-gray-200 " />
              <div className="px-4 py-3">
                <div className=" flex justify-between pb-4 text-gray-400 font-bold text-sm">
                  <h1>SOURCE</h1>
                  <p>PAGEVIEWS</p>
                </div>
                <div className="space-y-1 font-semibold ">
                  <div className="flex justify-between items-center ">
                    <p className=" bg-green-100 p-2 w-5/6 rounded-sm">
                      cruip.com/
                    </p>
                    <h1>28K</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-green-100 p-2 w-4/5 rounded-sm">
                      preview.cruip.com/open-pro/
                    </p>
                    <h1>12k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-green-100 p-2 w-3/4 rounded-sm">
                      preview.cruip.com/appy/
                    </p>
                    <h1>9.7k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-green-100 p-2 w-2/3 rounded-sm">
                      cruip.com/unlimited/
                    </p>
                    <h1>9.2k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-green-100 p-2 w-2/4 rounded-sm">
                      preview.cruip.com/simple/
                    </p>
                    <h1>7k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-green-100 p-2 w-[42%] rounded-sm">
                      cruip.com/about-us/
                    </p>
                    <h1>6.4k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-green-100 p-2 w-1/4 rounded-sm">
                      docs.cruip.com/
                    </p>
                    <h1>5.4K</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-green-100 p-2 w-[10%] rounded-md">
                      preview.cruip.com/twist/
                    </p>
                    <h1>2.2K</h1>
                  </div>
                </div>
                <div className="border border-gray-200 my-3 " />
                <p className="py-2 flex items-center gap-x-1 cursor-pointer justify-center text-blue-500 font-semibold">
                  Page Report <ArrowRight className="w-4" />
                </p>
              </div>
            </box6>
            <box7 className="box col-span-2">
              <h1 className="p-4 font-semibold text-xl">Top Channels</h1>
              <div className="border border-gray-200 " />
              <div className="px-4 py-3">
                <div className=" flex justify-between pb-4 text-gray-400 font-bold text-sm">
                  <h1>SOURCE</h1>
                  <p>VISITORS</p>
                </div>
                <div className="space-y-1 font-semibold ">
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-5/6 rounded-sm">
                      Google
                    </p>
                    <h1>4.7k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-4/5 rounded-sm">
                      Indihackers.com
                    </p>
                    <h1>4.2k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-3/4 rounded-sm">
                      DuckDuckGo
                    </p>
                    <h1>3.4k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-2/3 rounded-sm">
                      Hacker News
                    </p>
                    <h1>3.1k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-2/4 rounded-sm">
                      Github.com
                    </p>
                    <h1>2.2k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-2/5 rounded-sm">
                      Madewithvuejs.com
                    </p>
                    <h1>1.7k</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-1/4 rounded-sm">
                      ProductHunt.com
                    </p>
                    <h1>924</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <p className=" bg-indigo-100 p-2 w-[10%] rounded-md">
                      Dev.to
                    </p>
                    <h1>696</h1>
                  </div>
                </div>
                <div className="border border-gray-200 my-3 " />
                <p className="py-2 flex items-center cursor-pointer justify-center text-blue-500 font-semibold">
                  Channels Report <ArrowRight className="w-4" />
                </p>
              </div>
            </box7>
            <box8 className=" col-span-2 analyticsbox">
              <h1 className="p-4 font-semibold text-xl">Sessions By Gender</h1>
              <div className="border border-gray-200 " />
              <div className="flex items-center justify-center gap-x-2 py-4">
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer ">
                  <Square className="h-3 fill-indigo-500 text-indigo-500" />
                  <p>Males</p>
                </button>
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer">
                  <Square className="h-3 fill-sky-500 text-sky-500" />
                  <p>Females</p>
                </button>
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer">
                  <Square className="h-3 fill-green-500 text-green-500" />
                  <p>Unknown</p>
                </button>
              </div>
            </box8>
            <box9 className="box col-span-2 ">
              <h1 className="p-4 font-semibold text-xl">Sessions By Device</h1>
              <div className="border border-gray-200 " />
              <div className="flex items-center justify-center gap-x-2 py-4">
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer ">
                  <Square className="h-3 fill-indigo-800 text-indigo-800" />
                  <p>Desktop</p>
                </button>
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer">
                  <Square className="h-3 fill-sky-400 text-sky-400" />
                  <p>Mobile</p>
                </button>
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer">
                  <Square className="h-3 fill-blue-900 text-blue-900" />
                  <p>Tablet</p>
                </button>
              </div>
            </box9>
            <box10 className="box col-span-2 ">
              <h1 className="p-4 font-semibold text-xl">Sessions By Age</h1>
              <div className="border border-gray-200 " />
              <div className="flex items-center justify-center gap-x-2 py-4">
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer ">
                  <Square className="h-3 fill-indigo-700 text-indigo-700" />
                  <p className="flex items-center">
                    <ChevronLeft className="w-4" /> 18
                  </p>
                </button>
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer">
                  <Square className="h-3 fill-blue-400 text-blue-400" />
                  <p>18-24</p>
                </button>
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer">
                  <Square className="h-3 fill-red-500 text-red-500" />
                  <p>24-36</p>
                </button>
                <button className="p-1 border border-gray-300 flex items-center rounded-lg cursor-pointer">
                  <Square className="h-3 fill-green-700 text-green-700" />
                  <p className=" items-center flex">
                    <ChevronRight className="w-4" />
                    35
                  </p>
                </button>
              </div>
            </box10>
            <box11 className="box  col-span-6">
              <h1 className="p-5 font-semibold text-xl">Sessions By Age</h1>
              <div className="border border-gray-200 " />
              <div className="text-gray-400 font-bold flex text-sm  px-5 pt-4">
                <h1>PRODUCT</h1>
                <h1>CREATED BY</h1>
                <h1>CATEGORY</h1>
                <h1>TOTAL IMPRESSIONS</h1>
                <h1>TOP COUNTRY</h1>
                <h1>CR</h1>
                <h1>VALUE</h1>
              </div>
              <div className="px-5 py-3">
                <div className="flex space-x-2 items-center text-gray-700 ">
                  <img
                    src="https://w7.pngwing.com/pngs/598/662/png-transparent-share-it-logo-shareit-computer-icons-android-file-sharing-network-logo-mobile-phones-shareit-thumbnail.png"
                    className="h-5 w-5"
                  />
                  <h1 className="text-lg font-semibold w-full">
                    Form Builder CP
                  </h1>
                  <div className="w-full">
                    <img
                      src="https://w7.pngwing.com/pngs/598/662/png-transparent-share-it-logo-shareit-computer-icons-android-file-sharing-network-logo-mobile-phones-shareit-thumbnail.png"
                      className="h-5 w-5"
                    />
                  </div>
                  <RefreshCcw className="w-[10%]" />
                  <h1 className="w-full">Subscription</h1>
                  <p className="w-full">20,929</p>
                  <h1 className="w-full">US</h1>
                  <p className="w-full">27.4%</p>
                  <p className="w-full">$12,499.77</p>
                </div>
                <div className="border border-gray-200 mt-3" />
              </div>
            </box11>
          </div>
        </div>
      </div>
    </div>
  );
}

export default analytics;
