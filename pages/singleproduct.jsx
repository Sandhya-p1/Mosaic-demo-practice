import React from "react";
import Sidebar from "./components/Sidebar";

import Nav from "./components/Nav";
import { ArrowLeft, Dot, Star } from "lucide-react";

function singleproduct() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />

        <div className="lg:flex px-4 py-9  md:px-48 gap-x-24 space-y-4 scroll-smooth">
          {/* --------left side ---------------------------- */}
          <div className=" space-y-3 lg:w-2/3 ">
            <h1 className="text-blue-500 flex items-center pr-1">
              <ArrowLeft className="w-5" />
              Back To Listing
            </h1>
            <h2 className="font-bold text-4xl text-gray-800">
              Front-End Learning: Hands-On HTML & CSS In Real Web Apps ✨
            </h2>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam.
            </p>
            <div className="flex text-black items-center gap-x-2">
              <img
                src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?b=1&s=612x612&w=0&k=20&c=3qahdCVthwy9Q1lCY96GQHh8DipUWt7H7fJaVaRXsFs="
                className="rounded-full h-9 w-9 shrink-0 "
              />
              <p>Simona Lurwer</p>
            </div>
            <div className="flex items-center gap-x-1">
              <p className="text-white bg-gray-400 rounded-xl  px-2 mr-3">
                Special Offer
              </p>
              <Star className="starorange" />
              <Star className="starorange" />
              <Star className="starorange" />
              <Star className="starorange" />
              <Star className="stargray" />
              <h2 className="text-orange-500 px-1">4.2</h2>
            </div>
            <div className="text-gray-600 space-y-4 text-lg">
              <img src="https://miro.medium.com/v2/resize:fit:1400/1*YZ2fsT9k1CmlMil-Fda0Zg.png" />
              <h2 className="text-black text-2xl font-bold">Overview</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua u t
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <div className="space-y-2">
                <li>E-commerce: Better lorem ipsum generator.</li>
                <li>Booking: Lorem ipsum post generator.</li>
                <li>Retail: Better lorem ipsum generator.</li>
                <li>Services: Better lorem ipsum generator.</li>
              </div>
              <p className="italic pb-2">
                “Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.”
              </p>
              <div className="border border-gray-200 " />
              {/* --------reveiw part------------- */}
              <h1 className="py-2 font-bold text-xl">Featured Reviews(44)</h1>
              {/* ------Review 1-------------- */}

              <div className="text-gray-500 space-y-3 py-3">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg/800px-Young_girl_smiling_in_sunshine_%282%29.jpg"
                    className="rounded-full h-12 w-12"
                  />
                  <div className="space-y-1">
                    <h1 className="text-black font-semibold">Danielle Mark</h1>
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray" />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                    </div>
                  </div>
                </div>
                <p className="italic">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.”
                </p>
              </div>
              {/* ------------Review2--------------- */}
              <div className="text-gray-500 space-y-3 py-3">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg/800px-Young_girl_smiling_in_sunshine_%282%29.jpg"
                    className="rounded-full h-12 w-12"
                  />
                  <div className="space-y-1">
                    <h1 className="text-black font-semibold">Marija Urkjulz</h1>
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray" />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                    </div>
                  </div>
                </div>
                <p className="italic">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.”
                </p>
              </div>
              {/* --------------Review3 */}
              <div className="text-gray-500 space-y-3 py-3">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg/800px-Young_girl_smiling_in_sunshine_%282%29.jpg"
                    className="rounded-full h-12 w-12"
                  />
                  <div className="space-y-1">
                    <h1 className="text-black font-semibold">
                      Rodrigo Pantoja
                    </h1>
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray" />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                    </div>
                  </div>
                </div>
                <p className="italic">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.”
                </p>
              </div>
              {/* -----------Review4--------------- */}
              <div className="text-gray-500 space-y-3 py-3">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg/800px-Young_girl_smiling_in_sunshine_%282%29.jpg"
                    className="rounded-full h-12 w-12"
                  />
                  <div className="space-y-1">
                    <h1 className="text-black font-semibold">Juan Johnson</h1>
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray " />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                    </div>
                  </div>
                </div>
                <p className="italic ">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.”
                </p>
              </div>
              <div className="flex items-center justify-center py-2 ">
                <button className="text-blue-500 font-semibold p-2 hover:border hovereffect  rounded-md bg-white">
                  Load More Reviews
                </button>
              </div>
              <div className="border border-gray-200" />
              {/* ----------COURSES---------- */}
              <h1 className="font-bold text-2xl text-black pb-2">
                Frequently Bought Together
              </h1>
              <div className="space-y-6">
                {/* -------------course 1------------ */}
                <div className="lg:flex gap-x-4 space-y-4 lg:items-center">
                  <img
                    src="https://images.unsplash.com/photo-1441015401724-70d16b783f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                    className=" lg:w-4/12 w-2/5  rounded-sm"
                  />
                  <div className="space-y-3 ">
                    <h1 className="font-semibold text-xl text-black">
                      The Complete Front-End Development Course!
                    </h1>
                    <p className="text-slate-500 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </p>
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray " />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                      <Dot />
                      <h1 className="py-1 px-2 text-green-700 bg-green-200 rounded-3xl">
                        $89.00
                      </h1>
                    </div>
                  </div>
                </div>
                {/* -----------course2--------------- */}
                <div className="lg:flex gap-x-4 space-y-4 lg:items-center">
                  <img
                    src="https://images.unsplash.com/photo-1441015401724-70d16b783f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                    className=" lg:w-4/12  w-2/5 rounded-sm"
                  />
                  <div className="space-y-3 ">
                    <h1 className="font-semibold text-xl text-black">
                      Web Development Ultimate Course 2021{" "}
                    </h1>
                    <p className="text-slate-500 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </p>
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray " />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                      <Dot />
                      <h1 className="py-1 px-2 text-green-700 bg-green-200 rounded-3xl">
                        $89.00
                      </h1>
                    </div>
                  </div>
                </div>
                {/* --------------course3-------------- */}
                <div className="lg:flex gap-x-4 space-y-4 lg:items-center">
                  <img
                    src="https://images.unsplash.com/photo-1441015401724-70d16b783f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                    className=" lg:w-4/12 w-2/5 rounded-sm"
                  />
                  <div className="space-y-3 ">
                    <h1 className="font-semibold text-xl text-black">
                      Full-Stack JavaScript Course!{" "}
                    </h1>
                    <p className="text-slate-500 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </p>
                    <div className="flex gap-1 items-center">
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="starorange" />
                      <Star className="stargray " />
                      <h2 className="text-orange-500 px-1">4.6</h2>
                      <Dot />
                      <h1 className="py-1 px-2 text-green-700 bg-green-200 rounded-3xl">
                        $89.00
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-2 ">
                  <button className="text-blue-500 font-semibold p-2 hover:border hovereffect  rounded-md bg-white">
                    Load More Stuff
                  </button>
                </div>
                <div className="border border-gray-200" />
              </div>
            </div>
          </div>

          {/* --------------right side-------------- */}
          <div className="box p-5 space-y-2 text-gray-500 h-fit">
            <h1 className="text-black font-semibold pb-2">Select a Package</h1>
            {/* --------Essential-------------- */}
            <div className="shadow-sm border rounded-md p-3">
              <div className="flex justify-between text-lg">
                <h1 className="text-black font-semibold">Essential</h1>
                <p className="text-green-500">$39.00</p>
              </div>
              <p>Lorem ipsum dolor sit amet elit sed do eiusmod.</p>
            </div>
            {/* ---------------Premium-------------- */}
            <div className="shadow-sm p-3 border-2 rounded-md border-blue-500">
              <div className="flex justify-between items-center">
                <h1 className="text-black font-semibold flex text-lg">
                  Premium
                  <span className="text-blue-500 italic text-sm px-1">
                    Best Value
                  </span>
                </h1>
                <p className="text-green-500">$69.00</p>
              </div>
              <p>Lorem ipsum dolor sit amet elit sed do eiusmod.</p>
            </div>
            {/* -----------Complete----------- */}
            <div className="shadow-sm p-3  border rounded-md ">
              <div className="flex justify-between items-center">
                <h1 className="text-black font-semibold  text-lg">Complete</h1>
                <p className="text-green-500">$89.00</p>
              </div>
              <p>Lorem ipsum dolor sit amet elit sed do eiusmod.</p>
            </div>
            {/* -----------Buy button----------- */}
            <div className="py-4">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white w-full flex justify-center p-2 font-semibold rounded-md ">
                Buy Now - $69.00
              </button>
            </div>
            <p className="text-sm italic   text-center justify-center">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do
              <button className="underline hover:no-underline px-1 italic">
                Terms.
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default singleproduct;
