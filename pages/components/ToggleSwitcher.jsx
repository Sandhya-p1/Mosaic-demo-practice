import React from "react";
import { useState } from "react";
function ToggleSwitcher() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="flex gap-x-1 items-center">
      <div
        onClick={handleToggle}
        className={`flex w-12 h-6  cursor-pointer rounded-full transition-all
duration-500 
${isToggled ? "bg-indigo-500" : "bg-slate-400"}

`}
      >
        <span
          onClick={handleToggle}
          className={`h-6 w-6 top-1 bg-white   rounded-full transition-all ease-linear duration-150
      ${isToggled ? "ml-[19px]" : "ml-[1px]"}`}
        />
      </div>
      {isToggled ? (
        <h1 className=" text-base  text-gray-400">ON</h1>
      ) : (
        <h1 className=" text-base  text-gray-400">OFF</h1>
      )}
    </div>
  );
}

export default ToggleSwitcher;
