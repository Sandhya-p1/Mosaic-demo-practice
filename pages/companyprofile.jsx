import React from "react";
import Sidebar from "./components/Sidebar";

import Nav from "./components/Nav";
import { Link, MapPin, Bookmark } from "lucide-react";

function companyprofile() {
  return (
    <main className="flex h-screen bg-slate-100 ">
      <Sidebar />
      <div className="w-full  overflow-auto ">
        <Nav />
        <div className="space-y-5 text-gray-600">
          {/* top part */}
          <div className="space-y-6 bg-white  border-b border-gray-200 shadow-sm overflow-scroll no-scrollbar scroll-smooth">
            <div className="h-64 w-full relative flex items-center justify-center">
              <img
                src="https://img.freepik.com/photos-premium/ligne-voitures-electriques-charge-borne-recharge-publique-generation-ia_201606-6687.jpg"
                className="object-cover h-full w-full"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Eo_circle_light-blue_white_letter-r.svg/1024px-Eo_circle_light-blue_white_letter-r.svg.png"
                className="h-20 w-20 bg-white border border-spacing-2 border-white rounded-full absolute -bottom-10  "
              />
            </div>
            <div className="space-y-3 text-center py-6 ">
              <h1 className="text-black font-bold text-3xl">Revolut Ltd</h1>
              <p className="text-base">
                We're building a financial superapp that combines all the best
                tools into one place 🚀
              </p>
              <div className="flex justify-center items-center space-x-4">
                <h1 className="flex items-center gap-x-1">
                  <MapPin className="icon" />
                  London, UK
                </h1>
                <h1 className="flex items-center gap-x-1 font-medium hover:text-indigo-600 cursor-pointer text-indigo-500">
                  <Link className="icon cursor-default " /> revolut.com
                </h1>
              </div>
            </div>
          </div>
          {/* top part ends here */}
          <div className="px-4  md:text-center md:w-3/4 md:mx-auto">
            <h1 className="text-black text-xl text-start py-5 font-bold">
              Open Positions at Revolut Ltd
            </h1>
            {/* footer part */}
            <div className="px-4 space-y-4 pb-7">
              <h1 className="text-black text-start text-lg">Programming</h1>
              <div className="space-y-3">
                {/* box1 */}
                <div className=" border cursor-pointer rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      // onClick={handleRouter}
                    >
                      Senior Software Engineer Backend <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / Anywhere
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box2 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black cursor-pointer  font-medium text-lg "
                      // onClick={handleRouter}
                    >
                      React.js Software Developer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / London, Uk
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 6
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-orange-600 text-orange-600" />
                  </p>
                </div>
                {/* box3 */}
                <div className=" border cursor-pointer rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      // onClick={handleRouter}
                    >
                      Contract React Native Engineer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Contract / Remote / Milami,FL
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
              </div>
              <h1 className="text-black text-start text-lg">Design</h1>
              <div className="space-y-3">
                {/* box1 */}
                <div className=" border cursor-pointer rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      // onClick={handleRouter}
                    >
                      Senior Software Engineer Backend <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / Anywhere
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box2 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black cursor-pointer  font-medium text-lg "
                      // onClick={handleRouter}
                    >
                      React.js Software Developer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / London, Uk
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 6
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-orange-600 text-orange-600" />
                  </p>
                </div>
              </div>
              <h1 className="text-black text-start text-lg">
                Management / Finance
              </h1>
              <div className="space-y-3">
                {/* box1 */}
                <div className=" border cursor-pointer rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black   font-medium text-lg "
                      // onClick={handleRouter}
                    >
                      Senior Software Engineer Backend <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / Anywhere
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 7
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-gray-500 text-gray-500" />
                  </p>
                </div>
                {/* box2 */}
                <div className=" border rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
                  <div className="flex items-center gap-x-3 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                      className="profile"
                    />
                    <h1
                      className="text-black cursor-pointer  font-medium text-lg "
                      // onClick={handleRouter}
                    >
                      React.js Software Developer <br />
                      <span className="text-gray-500 text-base font-normal">
                        Full-time / Remote / London, Uk
                      </span>
                    </h1>
                  </div>
                  <p className="italic flex space-x-2 items-center mx-16 md:mx-0">
                    Jan 6
                    <span className="bg-green-100 mx-2 not-italic text-green-600  px-2 rounded-3xl">
                      New
                    </span>
                    <Bookmark className="h-4 w-4 fill-orange-600 text-orange-600" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default companyprofile;
