import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { ArrowRight, Circle, Hand, Plus, Stars } from "lucide-react";
function fintech() {
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className=" p-8 text-black">
          <div className="flex justify-between">
            <h1 className="font-bold text-4xl flex items-center gap-x-1">
              Fintech
              <Stars className="h-8 " />
            </h1>
            <div className="flex space-x-2 items-center">
              <h1>Date</h1>
              <button className="flex py-2 px-3 bg-blue-600 text-white rounded-md font-semibold cursor-pointer hover:bg-blue-700  items-center gap-x-1">
                <Plus className="h-6 text-gray-300" />
                Add Account
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg p-4 flex justify-between items-center my-7">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                className="h-20 w-[70px] shrink-0 rounded-full"
              />
              <div>
                <h1 className="text-gray-500 flex items-center">
                  Hey <span className="text-black ml-1"> Mary </span>
                  <Hand className="h-4 fill-yellow-400" />
                  ,this is your current balance:
                </h1>
                <p className="text-4xl font-bold text-green-600">$47,347.09</p>
              </div>
            </div>
            <div>
              <h1>users</h1>
            </div>
          </div>

          {/* ------here is the box section-------------------- */}
          <div className="grid lg:grid-cols-6 gap-y-3 gap-x-4 py-3 grid-cols-1 md:grid-col-2 ">
            {/* --------------box1---------------------------- */}
            <box1 className="box col-span-4">
              <p className="font-semibold p-3 text-xl">Portfolio Returns</p>
              <div
                className="border border-gray-200
              "
              />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <h1 className="font-bold text-3xl ">244.7%</h1>
                  <h2 className="text-base font-medium text-gray-800 ">
                    17.4%
                  </h2>
                  <p className="text-sm text-gray-500">AVG</p>
                </div>
                <div className="flex space-x-1 items-center text-gray-600">
                  <Circle className="h-3 text-blue-900" />
                  <p>Mossaic Portfolio</p>
                  <Circle className="h-3 text-orange-600" />
                  <p>Expected Return</p>
                  <Circle className="h-3 text-gray-500" />
                  <p>Competitors</p>
                </div>
              </div>
            </box1>
            {/* ------------------box 2----------------------- */}
            <box2 className="bg-slate-800 shadow-lg border text-white border-slate-200 col-span-2">
              <p className="font-semibold p-4 text-xl">Active Cards</p>
              <div className="w-full border-gray-700 border " />
              <div className="bg-black  rounded-lg m-4 p-3">
                <div className="bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-800 rounded-lg p-3 ">
                  <ArrowRight className="h-4" />
                  <div className="flex py-5 justify-between text-lg font-semibold">
                    <h1>* * * *</h1>
                    <h1>* * * *</h1>
                    <h1>* * * *</h1>
                    <h1>7328</h1>
                  </div>
                  <div className="flex justify-between font-semibold py-4">
                    <h1>EXP 12/24</h1>
                    <p>
                      CVC <span>* * *</span>
                    </p>
                    <img
                      src="https://1000logos.net/wp-content/uploads/2021/11/logo-Mastercard-500x281.png"
                      className="h-5 "
                    />
                  </div>
                </div>
              </div>
              <div className="px-5 space-y-3 pb-5">
                <p className="text-gray-400  font-semibold text-sm">DETAILS</p>
                <div className="flex justify-between text-gray-400">
                  <p className="font-semibold">Payment Limits</p>
                  <h1>$780,00 / $1,500.00</h1>
                </div>
                <div className=" p-2  bg-gradient-to-r from-green-600  to-slate-600" />
                <div className="flex justify-between text-gray-400">
                  <p className="font-semibold">ATM Limits</p>
                  <h1>$179,00 / $1,000.00</h1>
                </div>
                <div className=" p-2  bg-gradient-to-r from-green-600 via-slate-600  to-slate-600" />
              </div>
            </box2>
            <box3 className="box col-span-3">
              <p className="font-semibold p-3 text-xl">Cash Flow </p>
              <div className="border border-gray-200 " />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <h1 className="font-bold text-3xl ">244.7%</h1>

                  <p className="text-sm text-gray-500">NET</p>
                </div>
                <div className="flex space-x-1 items-center text-gray-600">
                  <Circle className="h-3 text-blue-900" />
                  <p>Inflow</p>
                  <Circle className="h-3 text-blue-600" />
                  <p>Out Flow</p>
                </div>
              </div>
            </box3>
            <box4 className="box col-span-3">
              <p className="font-semibold p-3 text-xl">Cash Flow by Account</p>
              <div className="border border-gray-200 " />
              <div className="flex space-x-1 items-center text-gray-600">
                <Circle className="h-3 text-blue-900" />
                <p>Inflow</p>
                <Circle className="h-3 text-blue-600" />
                <p>Out Flow</p>
              </div>
            </box4>
            <box5 className="box col-span-3">
              <p className="font-semibold p-3 text-xl">Recent Expenses</p>
              <div className="border border-gray-200 " />
            </box5>
            <box6 className="box col-span-3">
              <p className="font-semibold p-3 text-xl">Recent Earnings</p>
              <div className="border border-gray-200 " />
            </box6>
            <box7 className="box col-span-2">
              <p className="font-semibold p-2 text-lg">Portfolio Returns </p>
              <div className="border border-gray-200 " />
              <div className="px-3 text-gray-600">
                <p className="text-base pb-2">
                  Hey Mark, you're very close to your goal:
                </p>
                <h1 className="text-3xl font-bold flex items-center gap-x-1  text-black ">
                  $5,247.09
                  <span className="text-sm text-orange-400 text-center font-medium">
                    97.4%
                  </span>
                </h1>
                <p className="text-base text-gray-500">Out of $6,000</p>
              </div>
            </box7>

            {/* =-------------------box8-------------- */}
            <box8 className="box col-span-2">
              <p className="font-semibold p-2 text-lg">Growth Portfolio</p>
              <div className="border border-gray-200 " />
              <div className="px-3 text-gray-600">
                <p className="text-base pb-2">
                  Hey Mark, by age 65 you could have:
                </p>
                <h1 className="text-3xl font-bold flex items-center gap-x-1  text-black ">
                  $2M - $3.5M
                </h1>
                <p className="text-base text-gray-500">Risk level 8</p>
              </div>
            </box8>

            {/* -------------------box9---------------------------- */}
            <box9 className="box col-span-2">
              <p className="font-semibold p-2 text-lg">Portfolio Value</p>
              <div className="border border-gray-200 " />
              <div className="px-3 text-gray-600">
                <p className="text-base pb-2">
                  Hey Mark,here is the value of your portfolio:
                </p>
                <h1 className="text-3xl font-bold flex items-center gap-x-1  text-black ">
                  $224,807.27
                </h1>
              </div>
            </box9>
          </div>
          <div className="grid grid-col-4 gap-y-3 gap-x-4">
            <box10 className="box space-y-2 ">
              <h1>
                GOOGLE <span className="text-gray-500">- ALPHABET</span>
              </h1>
              <h2 className="font-bold text-3xl">$2,860.96</h2>
              <p className="text-base text-red-500">
                -$49 (4,7%) <span className="text-gray-600"> - Today </span>
              </p>
            </box10>
            <box11 className="box space-y-2 ">
              <h1>
                AMZN <span className="text-gray-500">- AMAZON INC.</span>
              </h1>
              <h2 className="font-bold text-3xl">$3,400.35</h2>
              <p className="text-base text-green-600">
                +$142 (3,7%) <span className="text-gray-600"> - Today </span>
              </p>
            </box11>

            <box12 className="box ">
              <h1>
                TWTR <span className="text-gray-500">- TWITTER INC</span>
              </h1>
              <h2 className="font-bold text-3xl">$43.07</h2>
              <p className="text-base text-green-600">
                +$4,20 (9,2%) <span className="text-gray-600"> - Today </span>
              </p>
            </box12>
            <box13 className="box ">
              <h1>
                FACEBOOK <span className="text-gray-500">- META INC.</span>
              </h1>
              <h2 className="font-bold text-3xl">$333.79</h2>
              <p className="text-base text-green-600">
                +$19,70 (4%) <span className="text-gray-600"> - Today </span>
              </p>
            </box13>
            <box14 className="box col-span-4">
              <p className="font-semibold p-5 text-xl">Market Trends</p>
              <div className="border border-gray-200 " />
            </box14>
          </div>
        </div>
      </div>
    </main>
  );
}

export default fintech;
