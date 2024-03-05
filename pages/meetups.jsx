import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Plus,
  Search,
  Video,
} from "lucide-react";
import { useRouter } from "next/router";

function meetups() {
  const router = useRouter();
  const handleClick = () => {
    router.push("./meetupspost");
  };
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        <div className="bg-slate-10 text-gray-500 space-y-3 md:p-6 py-6 px-4">
          {/* top section */}
          <div className="md:flex md:justify-between md:items-center space-y-3">
            <h1 className="text-3xl text-black font-bold">
              Discover Meetups ✨
            </h1>
            <div className="flex space-x-3 items-center">
              <div className="p-2 border border-gray-200 bg-white shadow-sm hover:border-slate-300 outline-none rounded-md placeholder:text-gray-500 flex items-center space-x-1">
                <Search className="h-6 w-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="border-none outline-none bg-white"
                />
              </div>
              <button className="bg-indigo-500 flex space-x-2 rounded-md p-2 font-medium items-center  text-white hover:bg-indigo-600">
                <Plus className="h-6 w-6 text-slate-300" />
                Add Meetup
              </button>
            </div>
          </div>
          {/* list of options */}

          <div className="gap-x-4 space-y-2 flex flex-wrap">
            <button className=" text-white border mt-2 border-indigo-500 shadow-md bg-indigo-500 px-3 py-1 rounded-2xl font-medium text-sm hover:bg-indigo-600 transition transform duration-100">
              View All
            </button>
            <button className=" optionmenu">Online</button>
            <button className="optionmenu">Local</button>
            <button className="optionmenu">This Week</button>
            <button className="optionmenu">This Month</button>
            <button className="optionmenu ">Following</button>
          </div>
          {/* ------------------------------------- */}
          <p className="italic  text-base pt-2 ">289 Meetups</p>
          {/* Middle part */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6">
            {/* box1 */}
            <box1 className="rounded-sm shadow-md flex border space-x-4 ">
              <div className="relative md:w-2/5 w-1/3 ">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/XCHI9BrROCPLJyRBbmtM8PO5xCs=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg"
                  className="object-cover h-full md:w-full  w-full "
                />
                <Heart className="absolute text-white bg-opacity-55  h-6 w-7 top-3 right-2  bg-black p-1 rounded-full" />
              </div>
              <div className="py-4 space-y-3 px-3">
                <h1 className="uppercase text-indigo-500 font-semibold text-sm">
                  mon 27 dec, 2021
                </h1>
                <h2
                  className="text-black text-xl font-semibold cursor-pointer"
                  onClick={handleClick}
                >
                  Silicon Valley Bootstrapper Breakfast Online for 2021
                </h2>
                <p className="text-base">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="bg-slate-200 text-sm rounded-2xl p-2 gap-x-1 flex items-center">
                    <Video className="icon" />
                    Online Event
                  </h1>
                  <div className="flex items-center ">
                    <img
                      src="https://i.pinimg.com/564x/87/7b/01/877b01f7092146efb33a6848e786d892.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://www.ellwoodcityledger.com/gcdn/presto/2022/05/04/NECL/31766c5e-852f-49d9-aab0-38f7a7d18b39-ezgif-4-7526b52a77.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                      className="h-9 w-9  border-white border-2 rounded-full -ml-5"
                    />

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9TYkK4u3hjbKeXCKxXUzDcbP8x290wuO7NftDJfDO_oTHlR-6N6d2bD_ReklWG-jc4A&usqp=CAU"
                      className="h-9 w-9 border-white border-2 rounded-full -ml-5"
                    />
                    <p className="text-gray-400 text-xs font-medium pl-1 italic">
                      +22
                    </p>
                  </div>
                </div>
              </div>
            </box1>
            {/* box2 */}
            <box2 className="rounded-sm shadow-md flex border space-x-4 ">
              <div className="relative md:w-2/5 w-1/3 ">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/XCHI9BrROCPLJyRBbmtM8PO5xCs=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg"
                  className="object-cover h-full md:w-full  w-full "
                />
                <Heart className="absolute text-white bg-opacity-55  h-6 w-7 top-3 right-2  bg-black p-1 rounded-full" />
              </div>
              <div className="py-4 space-y-3 px-3">
                <h1 className="uppercase text-indigo-500 font-semibold text-sm">
                  mon 27 dec, 2021
                </h1>
                <h2
                  className="text-black text-xl font-semibold cursor-pointer"
                  onClick={handleClick}
                >
                  Silicon Valley Bootstrapper Breakfast Online for 2021
                </h2>
                <p className="text-base">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="bg-slate-200 text-sm rounded-2xl p-2 gap-x-1 flex items-center">
                    <Video className="icon" />
                    Online Event
                  </h1>
                  <div className="flex items-center ">
                    <img
                      src="https://i.pinimg.com/564x/87/7b/01/877b01f7092146efb33a6848e786d892.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://www.ellwoodcityledger.com/gcdn/presto/2022/05/04/NECL/31766c5e-852f-49d9-aab0-38f7a7d18b39-ezgif-4-7526b52a77.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                      className="h-9 w-9  border-white border-2 rounded-full -ml-5"
                    />

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9TYkK4u3hjbKeXCKxXUzDcbP8x290wuO7NftDJfDO_oTHlR-6N6d2bD_ReklWG-jc4A&usqp=CAU"
                      className="h-9 w-9 border-white border-2 rounded-full -ml-5"
                    />
                    <p className="text-gray-400 text-xs font-medium pl-1 italic">
                      +22
                    </p>
                  </div>
                </div>
              </div>
            </box2>
            {/* box3 */}
            <box3 className="rounded-sm shadow-md flex border space-x-4 ">
              <div className="relative md:w-2/5 w-1/3 ">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/XCHI9BrROCPLJyRBbmtM8PO5xCs=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg"
                  className="object-cover h-full md:w-full  w-full "
                />
                <Heart className="absolute text-white bg-opacity-55  h-6 w-7 top-3 right-2  bg-black p-1 rounded-full" />
              </div>
              <div className="py-4 space-y-3 px-3">
                <h1 className="uppercase text-indigo-500 font-semibold text-sm">
                  mon 27 dec, 2021
                </h1>
                <h2
                  className="text-black text-xl font-semibold cursor-pointer"
                  onClick={handleClick}
                >
                  Silicon Valley Bootstrapper Breakfast Online for 2021
                </h2>
                <p className="text-base">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="bg-slate-200 text-sm rounded-2xl p-2 gap-x-1 flex items-center">
                    <Video className="icon" />
                    Online Event
                  </h1>
                  <div className="flex items-center ">
                    <img
                      src="https://i.pinimg.com/564x/87/7b/01/877b01f7092146efb33a6848e786d892.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://www.ellwoodcityledger.com/gcdn/presto/2022/05/04/NECL/31766c5e-852f-49d9-aab0-38f7a7d18b39-ezgif-4-7526b52a77.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                      className="h-9 w-9  border-white border-2 rounded-full -ml-5"
                    />

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9TYkK4u3hjbKeXCKxXUzDcbP8x290wuO7NftDJfDO_oTHlR-6N6d2bD_ReklWG-jc4A&usqp=CAU"
                      className="h-9 w-9 border-white border-2 rounded-full -ml-5"
                    />
                    <p className="text-gray-400 text-xs font-medium pl-1 italic">
                      +22
                    </p>
                  </div>
                </div>
              </div>
            </box3>
            {/* box4 */}
            <box4 className="rounded-sm shadow-md flex border space-x-4 ">
              <div className="relative md:w-2/5 w-1/3 ">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/XCHI9BrROCPLJyRBbmtM8PO5xCs=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg"
                  className="object-cover h-full md:w-full  w-full "
                />
                <Heart className="absolute text-white bg-opacity-55  h-6 w-7 top-3 right-2  bg-black p-1 rounded-full" />
              </div>
              <div className="py-4 space-y-3 px-3">
                <h1 className="uppercase text-indigo-500 font-semibold text-sm">
                  mon 27 dec, 2021
                </h1>
                <h2
                  className="text-black text-xl font-semibold cursor-pointer"
                  onClick={handleClick}
                >
                  Silicon Valley Bootstrapper Breakfast Online for 2021
                </h2>
                <p className="text-base">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="bg-slate-200 text-sm rounded-2xl p-2 gap-x-1 flex items-center">
                    <Video className="icon" />
                    Online Event
                  </h1>
                  <div className="flex items-center ">
                    <img
                      src="https://i.pinimg.com/564x/87/7b/01/877b01f7092146efb33a6848e786d892.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://www.ellwoodcityledger.com/gcdn/presto/2022/05/04/NECL/31766c5e-852f-49d9-aab0-38f7a7d18b39-ezgif-4-7526b52a77.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                      className="h-9 w-9  border-white border-2 rounded-full -ml-5"
                    />

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9TYkK4u3hjbKeXCKxXUzDcbP8x290wuO7NftDJfDO_oTHlR-6N6d2bD_ReklWG-jc4A&usqp=CAU"
                      className="h-9 w-9 border-white border-2 rounded-full -ml-5"
                    />
                    <p className="text-gray-400 text-xs font-medium pl-1 italic">
                      +22
                    </p>
                  </div>
                </div>
              </div>
            </box4>
            {/* box5 */}
            <box5 className="rounded-sm shadow-md flex border space-x-4 ">
              <div className="relative md:w-2/5 w-1/3 ">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/XCHI9BrROCPLJyRBbmtM8PO5xCs=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg"
                  className="object-cover h-full md:w-full  w-full "
                />
                <Heart className="absolute text-white bg-opacity-55  h-6 w-7 top-3 right-2  bg-black p-1 rounded-full" />
              </div>
              <div className="py-4 space-y-3 px-3">
                <h1 className="uppercase text-indigo-500 font-semibold text-sm">
                  mon 27 dec, 2021
                </h1>
                <h2
                  className="text-black text-xl font-semibold cursor-pointer"
                  onClick={handleClick}
                >
                  Silicon Valley Bootstrapper Breakfast Online for 2021
                </h2>
                <p className="text-base">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="bg-slate-200 text-sm rounded-2xl p-2 gap-x-1 flex items-center">
                    <Video className="icon" />
                    Online Event
                  </h1>
                  <div className="flex items-center ">
                    <img
                      src="https://i.pinimg.com/564x/87/7b/01/877b01f7092146efb33a6848e786d892.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://www.ellwoodcityledger.com/gcdn/presto/2022/05/04/NECL/31766c5e-852f-49d9-aab0-38f7a7d18b39-ezgif-4-7526b52a77.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                      className="h-9 w-9  border-white border-2 rounded-full -ml-5"
                    />

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9TYkK4u3hjbKeXCKxXUzDcbP8x290wuO7NftDJfDO_oTHlR-6N6d2bD_ReklWG-jc4A&usqp=CAU"
                      className="h-9 w-9 border-white border-2 rounded-full -ml-5"
                    />
                    <p className="text-gray-400 text-xs font-medium pl-1 italic">
                      +22
                    </p>
                  </div>
                </div>
              </div>
            </box5>
            {/* box6 */}
            <box6 className="rounded-sm shadow-md flex border space-x-4 ">
              <div className="relative md:w-2/5 w-1/3 ">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/XCHI9BrROCPLJyRBbmtM8PO5xCs=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg"
                  className="object-cover h-full md:w-full  w-full "
                />
                <Heart className="absolute text-white bg-opacity-55  h-6 w-7 top-3 right-2  bg-black p-1 rounded-full" />
              </div>
              <div className="py-4 space-y-3 px-3">
                <h1 className="uppercase text-indigo-500 font-semibold text-sm">
                  mon 27 dec, 2021
                </h1>
                <h2
                  className="text-black text-xl font-semibold cursor-pointer"
                  onClick={handleClick}
                >
                  Silicon Valley Bootstrapper Breakfast Online for 2021
                </h2>
                <p className="text-base">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="bg-slate-200 text-sm rounded-2xl p-2 gap-x-1 flex items-center">
                    <Video className="icon" />
                    Online Event
                  </h1>
                  <div className="flex items-center ">
                    <img
                      src="https://i.pinimg.com/564x/87/7b/01/877b01f7092146efb33a6848e786d892.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://www.ellwoodcityledger.com/gcdn/presto/2022/05/04/NECL/31766c5e-852f-49d9-aab0-38f7a7d18b39-ezgif-4-7526b52a77.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                      className="h-9 w-9  border-white border-2 rounded-full -ml-5"
                    />

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9TYkK4u3hjbKeXCKxXUzDcbP8x290wuO7NftDJfDO_oTHlR-6N6d2bD_ReklWG-jc4A&usqp=CAU"
                      className="h-9 w-9 border-white border-2 rounded-full -ml-5"
                    />
                    <p className="text-gray-400 text-xs font-medium pl-1 italic">
                      +22
                    </p>
                  </div>
                </div>
              </div>
            </box6>
          </div>
          {/* -------------------- */}
          {/* footer section */}
          <div className="flex items-center justify-center rounded-sm py-3 ">
            <button className="p-1 bg-white border">
              <ChevronLeft className="h-8 w-4 text-slate-300" />
            </button>

            <button className="footerbtn text-blue-500">1</button>
            <button className="footerbtn hover:bg-indigo-600 hover:text-white">
              2
            </button>
            <button className="footerbtn hover:bg-indigo-600 hover:text-white">
              3
            </button>
            <button className="footerbtn">...</button>
            <button className="footerbtn hover:bg-indigo-600 hover:text-white">
              9
            </button>
            <button className="p-1 bg-white border hover:bg-indigo-600 hover:text-white">
              <ChevronRight className="h-8 w-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default meetups;
