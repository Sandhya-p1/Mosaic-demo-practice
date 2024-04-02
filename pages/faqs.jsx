import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { ArrowRight, Dot, File, Search } from "lucide-react";
function faqs() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />
      <div className="w-full overflow-y-auto  ">
        <Nav />
        <div className="py-9 px-5 space-y-4 md:w-[65%] mx-auto ">
          <h1 className="text-3xl font-bold">👋 How we can help you today?</h1>
          <div className="inputbox iconflex">
            <Search className="h-6 w-6 text-slate-500 " />
            <input type="search" className="border-none w-full outline-none" />
          </div>
          <div className="flex gap-x-4 items-centers font-semibold text-slate-500">
            <h1 className="text-indigo-500">Popular</h1>
            <h1>Accessibility</h1>
            <h1>Marketing</h1>
            <h1>Development</h1>
            <h1>Account</h1>
          </div>
          <hr />
          <h1 className="text-bold text-3xl py-2">Popular Questions</h1>
          <div className="flex gap-x-3">
            <File className="h-6 w-6 fill-indigo-600 text-indigo-200" />
            <div className="space-y-1">
              <h1 className="font-semibold text-xl">
                How can the widget to my website?
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="flex items-center font-semibold text-indigo-600 cursor-pointer">
                <h1>General</h1>
                <Dot className="h-4 w-4" />
                <h1>Marketing</h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-x-3">
            <File className="h-6 w-6 fill-indigo-600 text-indigo-200" />
            <div className="space-y-1">
              <h1 className="font-semibold text-xl">
                How can the widget to my website?
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="flex items-center font-semibold text-indigo-600 cursor-pointer">
                <h1>General</h1>
                <Dot className="h-4 w-4" />
                <h1>Marketing</h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-x-3">
            <File className="h-6 w-6 fill-indigo-600 text-indigo-200" />
            <div className="space-y-1">
              <h1
                className="font-semibold text-xl
              "
              >
                How can the widget to my website?
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="flex items-center font-semibold text-indigo-600 cursor-pointer">
                <h1>General</h1>
                <Dot className="h-4 w-4" />
                <h1>Marketing</h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-x-3">
            <File className="h-6 w-6 fill-indigo-600 text-indigo-200" />
            <div className="space-y-1">
              <h1 className="font-semibold text-xl">
                How can the widget to my website?
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="flex items-center font-semibold text-indigo-600 cursor-pointer">
                <h1>General</h1>
                <Dot className="h-4 w-4" />
                <h1>Marketing</h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-x-3">
            <File className="h-6 w-6 fill-indigo-600 text-indigo-200" />
            <div className="space-y-1">
              <h1 className="font-semibold text-xl">
                How can the widget to my website?
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="flex items-center font-semibold text-indigo-600 cursor-pointer">
                <h1>General</h1>
                <Dot className="h-4 w-4" />
                <h1>Marketing</h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-end">
            <button className="text-indigo-500  iconflex border hover:border-slate-300 p-2 font-medium rounded-md">
              See All Questions
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default faqs;
