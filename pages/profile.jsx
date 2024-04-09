import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ArrowRight,
  Check,
  Link2,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Stars,
} from "lucide-react";
function profile() {
  return (
    <main className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        <div className="md:flex h-full  ">
          {/* left side */}
          <div className="md:w-1/3  md:border border-gray-200 text-gray-800">
            <div className="flex justify-between text-center px-6 py-4   ">
              <div className="flex space-x-3">
                <img
                  src="https://toppng.com/uploads/preview/blue-right-arrow-icon-blue-arrow-png-ico-11562953197kqrddqm8rv.png"
                  className="h-8 rounded-full"
                />
                <h1 className="text-lg font-semibold">Acme Inc.</h1>
              </div>
              <Plus className=" text-indigo-600 font-semibold h-8 w-8 p-1 border rounded-md" />
            </div>
            <div className="border w-full border-slate-200" />
            <div className="px-5  py-4">
              <div className="flex space-x-1 items-center shadow-sm font-medium px-3 text-slate-400 bg-white border rounded-md w-full">
                <Search className="h-4 w-5 font-bold" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="bg-white outline-none border-none w-full"
                />
              </div>
              <h1 className="uppercase text-xs py-4 font-semibold text-slate-400">
                TEAM Members
              </h1>
              <div className="profile-name bg-indigo-200 rounded-md ">
                <img src=" " />
                <p>Carolyn McNeail</p>
              </div>
              <div className="profile-name ">
                <img src=" " />
                <p>Mary Roszczewski</p>
              </div>
              <div className="profile-name ">
                <img src=" " />
                <p>Jerzy Wierzy</p>
              </div>
              <div className="profile-name ">
                <img src=" " />
                <p>Tisha Yanchev</p>
              </div>
              <div className="profile-name ">
                <img src=" " />
                <p>Sandhya Pandey</p>
              </div>
              <div className="profile-name ">
                <img src=" " />
                <p>Nisha Bhandari</p>
              </div>
              <div className="profile-name  ">
                <img src=" " />
                <p>Ashmita Khatri</p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className=" w-full hidden md:inline-block overflow-y-auto    ">
            {/* cover and profile pic */}
            <div className="relative h-48 ">
              <img
                src="https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=i3R3cbE94hdu6PRWT7cQBStY_wknVzl2pFCjQppzTBg="
                className="w-full h-full object-center "
              />

              <img
                src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                className="h-28 w-28 rounded-full absolute left-5 transform object-cover border-4 border-white   -mt-14 z-30"
              />
              <div className="flex cursor-pointer space-x-2 py-4 items-center justify-end px-4 ">
                <MoreHorizontal className=" h-7 w-7 text-gray-400 p-1 rounded-md border hover:border-gray-300 " />
                <MessageCircle className="text-blue-600 p-1 h-7 w-7 rounded-md border hover:border-gray-300" />
                <h2 className="px-2 py-1 flex items-center text-white  bg-indigo-500 hover:bg-indigo-600 rounded-md">
                  <Check className="h-4 " />
                  Following
                </h2>
              </div>
            </div>
            <div className="px-6 pt-16 space-y-2 text-gray-600">
              <h1 className="text-2xl flex gap-x-2  font-bold text-black">
                Carolyn McNeail
                <Stars className="text-orange-300 h-5 fill-orange-300" />
              </h1>
              <p>
                Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer &
                PHP Lover.
              </p>
              <div className="flex text-gray-600 items-center gap-x-4">
                <h1 className="flex items-center ">
                  <MapPin className="h-5 text-gray-400" />
                  Milan, IT
                </h1>
                <p className="flex items-center text-blue-600  cursor-pointer">
                  <Link2 className="cursor-none text-gray-400 h-5  " />
                  carolinmcneail.com
                </p>
              </div>
              {/* feed list */}
              <div className="flex items-center space-x-4 font-medium cursor-pointer text-base text-gray-800 py-2 ">
                <h1 className="text-blue-700 ">General</h1>
                <h1>Connections</h1>
                <h1>Contributions</h1>
              </div>
              <div
                className="border w-full border-gray-200 
            "
              />
              {/* feed */}
              <div className="flex py-4 space-x-6">
                <div className="w-[85%] space-y-3 px-2">
                  <h1 className="font-medium text-lg">About Me</h1>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor magna
                    aliqua.
                  </p>
                  <h1 className="pt-2 text-lg font-medium text-black">
                    Departments
                  </h1>
                  <div className="flex space-x-3">
                    <box1 className="box p-4 space-y-3">
                      <h1 className="text-black font-medium">Acme Marketing</h1>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore.
                      </p>
                      <div className="flex justify-between items-center ">
                        <div className="flex relative ">
                          <img
                            src="https://thumbs.dreamstime.com/b/attractive-young-african-american-woman-looking-camera-close-up-portrait-54731570.jpg"
                            className="h-8 w-8 object-cover rounded-full"
                          />
                          <img
                            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                            className="h-8 w-8 border-2 border-white object-cover rounded-full absolute left-4 top-0 "
                          />
                          <img
                            src="https://thumbs.dreamstime.com/b/attractive-young-african-american-woman-looking-camera-close-up-portrait-54731570.jpg"
                            className="h-8 w-8 border-2 border-white object-cover rounded-full absolute left-8 top-0 "
                          />
                          <img
                            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                            className="h-8 w-8 border-2 border-white object-cover rounded-full absolute left-12 top-0 "
                          />
                        </div>
                        <p className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                          View <ArrowRight className="h-4 px-1" />
                        </p>
                      </div>
                    </box1>
                    <box2 className="box p-4 space-y-3">
                      <h1 className="text-black font-medium">Acme Product</h1>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex relative ">
                          <img
                            src="https://thumbs.dreamstime.com/b/attractive-young-african-american-woman-looking-camera-close-up-portrait-54731570.jpg"
                            className="h-8 w-8 object-cover rounded-full"
                          />
                          <img
                            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                            className="h-8 w-8 border-2 border-white object-cover rounded-full absolute left-4 top-0 "
                          />
                          <img
                            src="https://thumbs.dreamstime.com/b/attractive-young-african-american-woman-looking-camera-close-up-portrait-54731570.jpg"
                            className="h-8 w-8 border-2 border-white object-cover rounded-full absolute left-8 top-0 "
                          />
                          <img
                            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                            className="h-8 w-8 border-2 border-white object-cover rounded-full absolute left-12 top-0 "
                          />
                        </div>
                        <p className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer">
                          View <ArrowRight className="h-4 px-1" />
                        </p>
                      </div>
                    </box2>
                  </div>
                  <h1 className="text-black font-medium text-lg">
                    Work History
                  </h1>
                  {/* work history */}
                  <div className="box py-6 space-y-4 px-3">
                    <div className="flex justify-between items-center text-gray-600">
                      <div className="flex items-center space-x-3">
                        <Stars className=" text-white fill-white bg-orange-500 p-2 rounded-full h-9 w-9" />
                        <div>
                          <h1 className="text-black">
                            Senior Product Designer
                          </h1>
                          <p className="text-base">Remote April,2020 - Today</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 cursor-pointer ">
                        <h1 className="rounded-xl px-2 py-1 shadow-sm hover:border-gray-300 text-sm border">
                          Marketing
                        </h1>
                        <p className="rounded-xl px-2 py-1 text-sm shadow-sm hover:border-gray-300 border">
                          +4
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <div className="flex items-center space-x-3">
                        <Stars className=" text-white fill-white bg-blue-500 p-2 rounded-full h-9 w-9" />
                        <div>
                          <h1 className="text-black">Product Designer</h1>
                          <p className="text-base">Remote April,2020 - Today</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 cursor-pointer ">
                        <h1 className="rounded-xl px-2 py-1 shadow-sm hover:border-gray-300 text-sm border">
                          Marketing
                        </h1>
                        <p className="rounded-xl px-2 py-1 text-sm shadow-sm hover:border-gray-300 border">
                          +4
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <div className="flex items-center space-x-3">
                        <Stars className=" text-white fill-white bg-blue-500 p-2 rounded-full h-9 w-9" />
                        <div>
                          <h1 className="text-black">Product Designer</h1>
                          <p className="text-base">Remote April,2020 - Today</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 cursor-pointer ">
                        <h1 className="rounded-xl px-2 py-1 shadow-sm hover:border-gray-300 text-sm border">
                          Marketing
                        </h1>
                        <p className="rounded-xl px-2 py-1 text-sm shadow-sm hover:border-gray-300 border">
                          +4
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right side last  */}
                <div className="w-[30%] space-y-3 py-2 text-gray-500 text-base px-4">
                  <div>
                    <h1 className="text-black">Title</h1>
                    <p>Senior Product Designer</p>
                  </div>
                  <div>
                    <h1 className=" text-gray-900">Location</h1>
                    <p>Milan,IT - Remote</p>
                  </div>
                  <div>
                    <h1 className=" text-gray-900">Email</h1>
                    <p>carolinmcneail@acme.com</p>
                  </div>
                  <div>
                    <h1 className=" text-gray-900">Birthdate</h1>
                    <p>4 April, 1987</p>
                  </div>
                  <div>
                    <h1 className=" text-gray-900">Joined Acme</h1>
                    <p>7 April,2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default profile;
