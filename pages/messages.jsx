import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ArrowRight,
  Check,
  CheckCheck,
  ChevronDown,
  Dot,
  Import,
  Octagon,
  Pencil,
  Plus,
  Search,
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
            <div className="p-3 space-y-3  ">
              <div className="p-3 inputbox flex items-center gap-x-2">
                <Search className="icon" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="outline-none border-none w-full"
                />
              </div>
              <h1 className="uppercase text-slate-400 text-xs font-semibold">
                Direct messages
              </h1>
              <div className="flex items-center justify-between bg-indigo-200 rounded-md p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Dominik Lamakani
                </h1>
                <p className="text-white px-2 bg-blue-400 rounded-full">2</p>
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Tisha Yanchev
                </h1>
                <p className="text-white px-2 bg-blue-400 rounded-full">4</p>
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Jery Wierzy
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                  className="profilebox"
                />
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Adrian Przetocki
                </h1>
                <Check className="icon" />
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Simona Lurwer
                </h1>
                <Check className="icon" />
              </div>
              <div className="flex items-center justify-between p-2">
                <h1 className="flex items-center gap-x-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                    className="profilebox"
                  />
                  Mary Roszczewski
                </h1>
              </div>
              <h1 className="pt-2 text-xs uppercase text-slate-400 font-bold">
                Channels
              </h1>
              <p className="flex items-center text-sm justify-between">
                #New Leads
                <span>
                  <Dot className="h-10 w-10 text-indigo-500" />
                </span>
              </p>
              <p>#Development Team</p>
              <p className="pb-6">#Product Tips</p>
            </div>
          </div>
          {/* right side */}
          <div className="w-full ">
            <div className="flex justify-between items-center p-5 bg-slate-50">
              <div className="flex cursor-pointer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                  className="profilebox"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                  className="profilebox -ml-3"
                />
              </div>
              <div className="flex space-x-1 cursor-pointer">
                <Octagon className="h-7 w-7 text-slate-400 fill-slate-400 border p-1 rounded-md" />
                <Check className="h-7 w-7 text-indigo-700 border rounded-md" />
              </div>
            </div>
            <hr />
            {/* message part */}
            <div className="p-5 bg-slate-100 h-fit space-y-3 ">
              <div className="flex  gap-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                  className="profilebox"
                />
                <div>
                  <h1 className="bg-white p-4 rounded-md rounded-tl-none shadow-md">
                    Can anyone help? I have a question about Acme Professional
                  </h1>
                  <p className="text-xs text-slate-500 font-medium py-1">
                    2:40 PM
                  </p>
                </div>
              </div>
              <div className="flex  gap-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                  className="profilebox"
                />
                <div>
                  <h1 className="bg-indigo-500 text-white p-4 rounded-md rounded-tl-none shadow-md">
                    Hey Dominik Lamakani 👋 <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                    <br /> mollit anim id est 🙌
                  </h1>
                  <p className="text-xs text-slate-500 font-medium py-1 flex items-center justify-between">
                    2:40 PM
                    <span>
                      <CheckCheck className="h-4 w-4 text-green-600" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex  gap-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                  className="profilebox"
                />
                <div>
                  <div className="flex items-center gap-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                      className="h-36 w-44 rounded-md"
                    />
                    <Import className="h-7 w-7 text-slate-500 cursor-pointer rounded-full p-1 border hover:bg-white" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium py-1 ">
                    2:40 PM
                  </p>
                </div>
              </div>
              <div className="flex  gap-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                  className="profilebox"
                />
                <div>
                  <h1 className="bg-white p-4 rounded-md rounded-tl-none shadow-md">
                    What do you think? Duis aute irure dolor in reprehenderit 🔥
                  </h1>
                  <p className="text-xs text-slate-500 font-medium py-1">
                    2:48 PM
                  </p>
                </div>
              </div>
              <div className="flex  gap-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                  className="profilebox"
                />
                <div>
                  <h1 className="bg-indigo-500 text-white p-4 rounded-md rounded-tl-none shadow-md">
                    Sed euismod nisi porta lorem mollis. Tellus elementum
                    sagittis vitae et leo duis.
                    <br /> Viverra justo nec ultrices dui.
                    <br />
                    Sed lectus vestibulum mattis ullamcorper velit sed. Ut sem
                    nulla pharetra diam sit
                    <br /> amet 🎁
                  </h1>
                  <p className="text-xs text-slate-500 font-medium py-1 flex items-center justify-between">
                    2:55 PM
                    <span>
                      <Check className="h-4 w-4 text-green-600" />
                    </span>
                  </p>
                </div>
              </div>
              <h1 className="bg-white text-xs font-medium rounded-full p-2 shadow-sm w-fit text-center mx-auto mt-5">
                Tuesday, 20 January
              </h1>
              <div className="flex  gap-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                  className="profilebox"
                />
                <div>
                  <h1 className="bg-indigo-500 text-white p-4 rounded-md rounded-tl-none shadow-md">
                    Can you join @dominik? https://meet.google.com/haz-r3gt-idj
                  </h1>
                  <p className="text-xs text-slate-500 font-medium py-1 flex items-center justify-between">
                    10:15 AM
                    <span>
                      <Check className="h-4 w-4 text-green-600" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex  gap-x-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcnPLvVSvA455Gsci_0NkKAa5OMEFFy64dFPOgw05Hw&s"
                  className="profilebox"
                />

                <h1 className="bg-white text-center px-4 rounded-md rounded-tl-none shadow-md">
                  ...
                </h1>
              </div>
            </div>
            <hr />
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
