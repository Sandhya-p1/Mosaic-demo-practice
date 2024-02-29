import React from "react";
import { Menus } from "./SidebarData";
import SubMenu from "./SubMenu";
function Sidebar() {
  return (
    <div className="bg-slate-800 w-1/5 h-full overflow-auto hidden lg:inline-block no-scrollbar">
      <p className="mt-16 ml-7 -mb-4 text-base text-slate-500 font-semibold">
        PAGES
      </p>
      <div>
        {Menus &&
          Menus.map((item, index) => <SubMenu item={item} key={index} />)}
      </div>
    </div>
  );
}

export default Sidebar;
