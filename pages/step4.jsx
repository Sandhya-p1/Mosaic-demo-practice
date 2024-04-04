import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, User, Users } from "lucide-react";

function step4() {
  const [color, setColor] = useState();
  const handleClick = () => {
    setColor(!color);
  };
  return (
    <div className="flex justify-between h-screen ">
      {/* left side */}
      <div className="w-full px-5 pt-5 h-fit  ">
        {/* nav */}
        <div className="flex  justify-between items-center">
          <Link href="./main">
            <img
              src="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-blue-circle-watercolor-png-image_11601564.png"
              className="profile "
            />
          </Link>
          <Link href="./signin">
            <h1 className="font-medium">
              Have an account?
              <span className="text-indigo-500 hover:text-indigo-600 ">
                Sign In
              </span>
            </h1>
          </Link>
        </div>
        {/* body */}
        <div className="  h-full   flex flex-col items-center gap-y-3 px-14 pt-14">
          <div className="flex items-center py-2 w-full ">
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              1
            </h1>
            <div className="border w-full  border-slate-300" />
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              2
            </h1>
            <div className="border w-full border-slate-300" />
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              3
            </h1>
            <div className="border w-full border-slate-300" />
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              4
            </h1>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/256/5290/5290058.png"
            className="h-20 w-20 mt-20"
          />
          <h1 className="text-3xl font-bold  pb-4 text-nowrap text-black">
            Company information ✨
          </h1>

          <Link href="./main">
            <button className="bg-indigo-500 hover:bg-indigo-600 px-2 py-[6px] rounded-md text-white iconflex font-medium">
              Go To Dashboard <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="h-full overflow-hidden hidden md:inline w-full">
        <img
          src="https://media.istockphoto.com/id/1285962627/photo/schoolgirl-studying-with-video-online-lesson-at-home.jpg?s=612x612&w=0&k=20&c=_FFhUCHU6-tgcGPd3nAu18DbkGFyrleL3JLBwkiJ0z0="
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
}

export default step4;
