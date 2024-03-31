import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRightIcon,
  Dot,
  Import,
  Octagon,
  Pencil,
  Plus,
  Search,
  Star,
  Trash2,
} from "lucide-react";
function messages() {
  return (
    <main className="flex h-screen ">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="flex">
          {/* left side */}
          <div className="w-full md:w-1/3 border">
            <div className="px-6 py-4 text-black  bg-blue-white ">
              <div className="flex   justify-between items-center ">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <img
                    src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-blue-circle-png-image_2381949.jpg"
                    className="profilebox"
                  />
                  <h1 className="flex items-center font-semibold">
                    #Marketing
                    <span>
                      <ChevronDown className="icon" />
                    </span>
                  </h1>
                </div>
                <Pencil className="border p-1 h-7 cursor-pointer hover:border-slate-300 w-7 rounded-md" />
              </div>
            </div>
            <hr />
            {/* body */}
            <div className="p-3 space-y-3  ">
              <div className="p-3 inputbox flex items-center gap-x-2">
                <Search className="icon" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="outline-none border-none w-full"
                />
              </div>
              <div className="flex items-center text-slate-500 text-sm font-medium gap-x-4">
                <h1 className="text-indigo-400">Primary</h1>
                <h1>Social</h1>
                <h1>Promotions</h1>
              </div>
              <div className="flex">
                <div className="border border-blue-700 w-14" />
                <div className="border w-full " />
              </div>
              <h1 className="uppercase text-slate-400 text-sm font-medium">
                inbox (44)
              </h1>
              <div className="flex justify-between bg-indigo-50 rounded-md p-2">
                <div className="flex gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  <div className="space-y-2 ">
                    <h1 className="font-medium">Dominik Lamakani </h1>
                    <p className="text-xs font-medium text-ellipsis">
                      Chill your mind with this amazing offer 🎉
                    </p>
                    <p className="text-slate-400 text-xs">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit aute
                      irure dolor...
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-xs text-nowrap">
                  4 Aug
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="flex gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  <div className="space-y-2 ">
                    <h1 className="font-medium">Dominik Lamakani </h1>
                    <p className="text-xs font-medium text-ellipsis">
                      Chill your mind with this amazing offer 🎉
                    </p>
                    <p className="text-slate-400 text-xs">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit aute
                      irure dolor...
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-xs text-nowrap">
                  4 Aug
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="flex gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  <div className="space-y-2 ">
                    <h1 className="font-medium">Dominik Lamakani </h1>
                    <p className="text-xs font-medium text-ellipsis">
                      Chill your mind with this amazing offer 🎉
                    </p>
                    <p className="text-slate-400 text-xs">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit aute
                      irure dolor...
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-xs text-nowrap">
                  4 Aug
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="flex gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  <div className="space-y-2 ">
                    <h1 className="font-medium">Dominik Lamakani </h1>
                    <p className="text-xs font-medium text-ellipsis">
                      Chill your mind with this amazing offer 🎉
                    </p>
                    <p className="text-slate-400 text-xs">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit aute
                      irure dolor...
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-xs text-nowrap">
                  4 Aug
                </p>
              </div>
              <div className="flex justify-between p-2">
                <div className="flex gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  <div className="space-y-2 ">
                    <h1 className="font-medium">Dominik Lamakani </h1>
                    <p className="text-xs font-medium text-ellipsis">
                      Chill your mind with this amazing offer 🎉
                    </p>
                    <p className="text-slate-400 text-xs">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit aute
                      irure dolor...
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-xs text-nowrap">
                  4 Aug
                </p>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full hidden md:inline  pb-3 overflow-y-scroll no-scrollbar ">
            <div className="flex justify-between items-center p-5 bg-slate-50">
              <div className="flex cursor-pointer gap-x-2">
                <Trash2 className="iconbox text-slate-400" />

                <Star className="iconbox text-orange-500 fill-orange-500" />
                <AlertCircle className="iconbox text-white fill-slate-400" />
                <Check className="iconbox text-blue-700" />
              </div>
              <div className="flex space-x-2 items-center cursor-pointer">
                <h1 className="text-sm">10 of 467</h1>
                <ChevronLeft className="iconbox" />
                <ChevronRightIcon className="iconbox" />
              </div>
            </div>
            <hr />
            {/* message part */}
            <div className="p-5 bg-slate-100 h-fit space-y-3 ">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl">
                  Chill your mind with this amazing offer 🎉
                </h1>
                <button className="text-sm text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
                  Exciting news
                </button>
              </div>
              <div className="bg-white border rounded-sm shadow-md p-5 space-y-4">
                <div className="flex justify-between">
                  <div className="flex gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                      className="profilebox"
                    />
                    <div className="">
                      <h1 className="font-medium text-lg">Dominik Lamakani </h1>
                      <p className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore…
                      </p>
                    </div>
                  </div>
                  <p className="font-medium text-xs text-nowrap text-slate-500">
                    Sep 3, 3:18 PM
                  </p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                      className="profilebox"
                    />
                    <div className="">
                      <h1 className="font-medium text-lg">Dominik Lamakani </h1>
                      <p className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore…
                      </p>
                    </div>
                  </div>
                  <p className="font-medium text-xs text-nowrap text-slate-500">
                    Sep 3, 3:18 PM
                  </p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                      className="profilebox"
                    />
                    <div>
                      <h1 className="font-medium text-lg ">Dominik Lamakani</h1>
                      <p className="text-slate-500 text-xs inline-grid">
                        dominiklama@acme.com
                        <span className="font-medium ">To me, Carolyn</span>
                      </p>
                    </div>
                  </div>
                  <p className="font-medium text-xs text-nowrap text-slate-500">
                    Sep 3, 3:18 PM
                  </p>
                </div>
                <h1>Hey Acme 👋</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur
                </p>
                <h2>
                  Consectetur adipiscing elit, sed do eiusmod tempor magna
                  aliqua? Check below:
                </h2>
                <img
                  src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                  className="h-44 w-60"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <h2>Cheers,</h2>
                <h1 className="font-medium">Dominik Lamakani</h1>
              </div>
            </div>

            <div className="p-3 flex items-center gap-x-3">
              <Plus className="h-7 w-7 p-1 bg-slate-400 text-white rounded-full cursor-pointer hover:bg-slate-600" />
              <input
                type="text"
                placeholder="Aa"
                className="bg-slate-100 border-none rounded-md w-full p-2 outline-slate-200"
              />
              <button className="iconflex bg-indigo-500 hover:bg-indigo-600 text-white font-medium p-2 cursor-pointer rounded-md">
                Send <ArrowRight className="h-4 w-5" />
              </button>
            </div>
            {/* message part ends here */}
          </div>
          {/* right side ends here */}
        </div>
      </div>
    </main>
  );
}

export default messages;
