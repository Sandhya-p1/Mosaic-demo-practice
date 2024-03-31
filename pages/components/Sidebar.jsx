// import React from "react";
// import { Menus } from "./SidebarData";
// import SubMenu from "./SubMenu";
// function Sidebar() {
//   return (
//     <div className="bg-slate-800 w-1/5 h-full overflow-auto hidden lg:inline-block no-scrollbar">
//       <p className="mt-16 ml-7 -mb-4 text-base text-slate-500 font-semibold">
//         PAGES
//       </p>
//       <div>
//         {Menus &&
//           Menus.map((item, index) => <SubMenu item={item} key={index} />)}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
import React, { useState } from "react";
import { Menus } from "./SidebarData";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

function Sidebar(showSidebar) {
  const [openSubmenus, setOpenSubMenus] = useState(false);

  return (
    <div className=" h-full  hidden lg:inline-block overflow-scroll no-scrollbar scroll-smooth  md:w-72  bg-slate-800 px-6 py-4 space-y-12">
      <img
        src="https://i.pinimg.com/originals/7a/b5/b2/7ab5b2fcae9fe6153eb9797b1b1435b7.png"
        className="h-10 w-10 rounded-full"
      />
      {/* list of sidebar menus */}

      {/* top menus */}
      <div>
        <h1 className="uppercase text-slate-500 text-sm font-medium pb-3">
          Pages
        </h1>
        <ul>
          {Menus &&
            Menus.map((menu, index) => (
              <div className="hover:bg-black  p-2 -ml-3 rounded-l-md rounded-r-sm hover:duration-200 relative ">
                <li
                  key={index}
                  className={`text-slate-200 cursor-pointer   flex gap-x-3 items-center
                  ${menu.spacing ? "mt-12" : "mt-2"}
                  `}
                >
                  <span>{menu.icon}</span>
                  <Link href={`/${menu.path}`}>
                    <span className="flex-1 text-base font-medium">
                      {menu.title}
                    </span>
                  </Link>
                  {menu.subMenus && (
                    <ChevronDown
                      className={` h-5 w-5 absolute right-1 ${
                        openSubmenus &&
                        "rotate-180 duration-100 transition-transform ease-in-out"
                      }`}
                      onClick={() => setOpenSubMenus(!openSubmenus)}
                    />
                  )}
                </li>
                {menu.subMenus && openSubmenus && (
                  <ul>
                    {menu.subMenus.map((submenuItems, index) => (
                      <Link href={`/${submenuItems.path}`}>
                        <li
                          key={index}
                          className="px-8 text-white text-sm mt-2 "
                        >
                          {submenuItems.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </ul>
      </div>
      {/* ends here */}
    </div>
  );
}

export default Sidebar;
