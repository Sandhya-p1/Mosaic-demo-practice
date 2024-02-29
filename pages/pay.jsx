import { X } from "lucide-react";
import React from "react";
import Link from "next/link";

function pay() {
  return (
    <div className="bg-gray-100 h-screen">
      <nav className="flex justify-between items-center p-5 bg-white shadow-md w-full">
        <Link href="/main">
          <img
            src="https://image.pngaaa.com/506/2124506-small.png"
            className="h-10 w-10"
          />
        </Link>
        <Link href="/cart">
          <X className="h-7 w-7 bg-gray-200 text-gray-700 p-1 rounded-full" />
        </Link>
      </nav>
      <div className="">
        <img
          src="https://media.sciencephoto.com/f0/15/24/90/f0152490-800px-wm.jpg"
          className="h-48 w-full object-cover  "
        />
      </div>
    </div>
  );
}

export default pay;
