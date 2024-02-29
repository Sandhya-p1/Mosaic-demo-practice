import React, { useState } from "react";
import Link from "next/link";
function SubMenu({ item }) {
  const [openSubMenus, setOpenSubMenus] = useState(false);
  const showSubMenu = () => setOpenSubMenus(!openSubMenus);

  return (
    <div className="hover:bg-slate-900 p-2 m-4 rounded-sm">
      <div
        className="flex items-center justify-between "
        onClick={item.subMenus && showSubMenu}
      >
        {/* This is the part of main menus  */}
        <div className="flex items-center space-x-2 text-base ">
          <h5 className="text-slate-400  "> {item.icon}</h5>
          <p>{item.title}</p>
        </div>

        {item.subMenus && openSubMenus
          ? item.iconOpened
          : item.subMenus
          ? item.iconClosed
          : null}
      </div>
      {/* submenus are shown from here  */}
      {openSubMenus &&
        item.subMenus.map((subItem, index) => (
          <Link href={`/${subItem.path}`} key={index}>
            <h1 className="px-12 py-1  text-sm font-[500] text-slate-400">
              {subItem.title}
            </h1>
          </Link>
        ))}
    </div>
  );
}

export default SubMenu;
