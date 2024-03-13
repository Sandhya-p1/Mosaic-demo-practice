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
        className={`flex w-11 h-6  cursor-pointer rounded-full transition-all
duration-500 
${isToggled ? "bg-indigo-500" : "bg-gray-400"}

`}
      >
        <span
          onClick={handleToggle}
          className={`h-6 w-6 top-1 bg-white le  rounded-full transition-all duration-150
      ${isToggled ? "ml-[19px]" : "ml-[1px]"}`}
        />
      </div>
      {isToggled ? (
        <h1 className=" text-base italic text-gray-400">On</h1>
      ) : (
        <h1 className=" text-base italic text-gray-400">Off</h1>
      )}
    </div>
  );
}

export default ToggleSwitcher;
