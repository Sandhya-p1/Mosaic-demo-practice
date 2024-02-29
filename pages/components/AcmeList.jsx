import React from "react";

function AcmeList() {
  return (
    <div className="bg-white py-3  z-10 px-2 border min-w-40 border-gray-200 space-y-2 rounded-lg  right-5  absolute top-3/4 ">
      <h1 className="font-semibold">Acme Inc.</h1>
      <p className="text-gray-400 text-sm ">Administrator</p>
      <div className="border w-full  text-gray-500 my-2 " />
      <h2 className="text-blue-600 font-medium cursor-pointer ">Settings</h2>
      <h3 className="text-blue-600 font-medium cursor-pointer">SignOut</h3>
    </div>
  );
}

export default AcmeList;
