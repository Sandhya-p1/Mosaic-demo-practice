import { ArrowRight } from "lucide-react";
import React from "react";

function JobPostBox() {
  return (
    <div className="box px-4 py-5 space-y-2 w-full">
      <img
        src="https://www.pngall.com/wp-content/uploads/2017/05/Copyright-Symbol-R-Free-Download-PNG.png"
        className="h-14  w-14 rounded-full object-cover mx-auto"
      />
      <div className="pb-3   text-center">
        <h1 className="text-black font-bold text-lg">Revolut Ltd</h1>
        <p className="italic text-sm text-gray-400">179 Jobs Posted</p>
      </div>
      <button className="text-white font-medium text-sm flex items-center justify-center gap-x-1 py-2 w-full bg-indigo-500 hover:bg-indigo-600 rounded-md ">
        Apply Today <ArrowRight className="h-3 w-3" />
      </button>
      <button className="text-center w-full font-medium bg-white border hover:border-gray-300 text-gray-500 py-2 rounded-md">
        Company Profile
      </button>
    </div>
  );
}

export default JobPostBox;
