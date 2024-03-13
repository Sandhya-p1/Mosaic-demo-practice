import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  Activity,
  Calendar,
  Check,
  Heart,
  Link,
  MessageCircle,
  Plus,
} from "lucide-react";
function kanban() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="px-4 md:px-7 py-6 text-gray-500 space-y-4">
          <div className="md:flex md:justify-between space-y-2 md:space-y-0 items-center">
            <h1 className="text-black text-xl font-semibold md:text-3xl md:font-bold">
              Acme Inc.Tasks ✨
            </h1>
            <button className="flex items-center p-2 gap-x-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm rounded-md">
              <Plus className="h-4 w-4 text-indigo-300" />
              Add Board
            </button>
          </div>
          {/* list of title */}
          <div className="flex items-center space-x-4 font-medium text-base">
            <h1 className="text-indigo-500  cursor-pointer">View All</h1>
            <h1 className="cursor-pointer">Web Sprint</h1>
            <h1 className="cursor-pointer">Marketing</h1>
            <h1 className="cursor-pointer">Development</h1>
          </div>
          <div className="w-full border border-gray-200" />
          {/* all the contents  */}
          <div className="md:grid md:grid-cols-4 md:space-x-3 space-y-5 md:space-y-0">
            {/* 1st grid */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h1 className="boxheading">To Do's 🖋️</h1>
                <Plus className="iconhover blueicon" />
              </div>
              {/* box1 */}
              <div className=" box p-3 space-y-2 ">
                <h1 className="boxheading">Managing Teams(book)</h1>
                <p className="text-sm">
                  #7764 created by
                  <span className="text-black font-medium"> markus-james</span>
                </p>
                <div className="flex justify-between items-center pt-3">
                  <div className="flex items-center">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="profilebox"
                    />
                    <img
                      src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
                      className="h-9 w-9 rounded-full -ml-4  border-white border-2 "
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="iconflex">
                      <Heart className="icon hover:text-indigo-500 cursor-pointer" />
                      4
                    </p>
                    <p className="iconflex">
                      <MessageCircle className="icon hover:text-indigo-500 cursor-pointer" />
                      7
                    </p>
                    <Link className="icon hover:text-indigo-500 cursor-pointer" />
                  </div>
                </div>
              </div>
              {/* box2 */}
              <div className=" box p-3 space-y-2 ">
                <h1 className="boxheading">
                  User should receive a daily digest email
                </h1>
                <p className="text-sm">
                  Dedicated form for a category of users that will perform
                  actions.
                </p>
                <div className="flex justify-between items-center pt-3">
                  <Plus className="blueicon  p-1 border rounded-full hover:border-indigo-200 cursor-pointer" />

                  <div className="flex items-center space-x-3">
                    <p className="iconflex text-orange-400 ">
                      <Calendar className="h-4 w-4 cursor-pointer" />
                      Mar 27
                    </p>
                    <p className="iconflex">
                      <MessageCircle className="icon hover:text-indigo-500 cursor-pointer" />
                      6
                    </p>
                    <Link className="icon hover:text-indigo-500 cursor-pointer" />
                  </div>
                </div>
              </div>
              {/*box3  */}
              <div className=" box p-3 space-y-2 ">
                <h1 className="boxheading">
                  Change license and remove references to products
                </h1>

                <div className="flex justify-between items-center pt-3">
                  <div className="flex items-center">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="profilebox"
                    />
                    <img
                      src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
                      className="h-9 w-9 rounded-full -ml-4  border-white border-2 "
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="iconflex">
                      <MessageCircle className="icon hover:text-indigo-500 cursor-pointer" />
                      4
                    </p>
                    <Link className="icon hover:text-indigo-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            {/* second grid */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h1 className="boxheading">In Progress ✌️</h1>
                <Plus className="iconhover blueicon" />
              </div>
              {/* box1 */}
              <div className="box p-4 space-y-3">
                <h1 className="boxheading">Managing Teams(book)</h1>
                <div className="flex justify-between items-center">
                  <img
                    src="https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg"
                    className="profilebox"
                  />
                  <div className="flex gap-x-2 items-center">
                    <p className="iconflex">
                      <Activity className="icon iconhover" />
                      1/3
                    </p>
                    <Link className="icon iconhover" />
                  </div>
                </div>
                <div className="border w-full border-gray-200" />
                <p className="iconflex">
                  <Check className="text-green-500 h-4" />
                  <span className="line-through ">Implement new designs</span>
                </p>
                <div className="border w-full border-gray-200" />
                <p className="iconflex">
                  <Check className="icon" /> Usability testing
                </p>
                <div className="border w-full border-gray-200" />
                <p className="iconflex">
                  <Check className="icon" /> Usability testing
                </p>
              </div>
              {/* box2 */}
              <div className="box p-4 space-y-2">
                <h1 className="boxheading">Product Update - Q4 2021</h1>
                <p>
                  Dedicated form for a category of users that will perform
                  actions.
                </p>
                <img
                  src="https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6"
                  className="h-1/4 w-full rounded-sm object-cover"
                />
                <div className="flex justify-between items-center pt-3">
                  <div className="flex items-center">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="profilebox"
                    />
                    <img
                      src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
                      className="h-9 w-9 rounded-full -ml-4  border-white border-2 "
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="iconflex text-orange-400 ">
                      <Calendar className="h-4 w-4 cursor-pointer" />
                      Mar 27
                    </p>
                    <p className="iconflex">
                      <MessageCircle className="icon hover:text-indigo-500 cursor-pointer" />
                      6
                    </p>
                    <Link className="icon hover:text-indigo-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd grid  */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h1 className="boxheading">Completed 🎉</h1>
                <Plus className="iconhover blueicon" />
              </div>
              {/* box1 */}
              <div className=" box p-3 space-y-2 ">
                <h1 className="boxheading">Managing Teams(book)</h1>
                <p className="text-sm">
                  #7764 created by
                  <span className="text-black font-medium"> markus-james</span>
                </p>
                <div className="flex justify-between items-center pt-3">
                  <div className="flex items-center">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="profilebox"
                    />
                    <img
                      src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
                      className="h-9 w-9 rounded-full -ml-4  border-white border-2 "
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="iconflex">
                      <Heart className="icon hover:text-indigo-500 cursor-pointer" />
                      4
                    </p>
                    <p className="iconflex">
                      <MessageCircle className="icon hover:text-indigo-500 cursor-pointer" />
                      7
                    </p>
                    <Link className="icon hover:text-indigo-500 cursor-pointer" />
                  </div>
                </div>
              </div>
              {/* box2 */}
              <div className="box p-4 space-y-3">
                <h1 className="boxheading">Managing Teams(book)</h1>
                <div className="flex justify-between items-center">
                  <img
                    src="https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg"
                    className="profilebox"
                  />
                  <div className="flex gap-x-2 items-center">
                    <p className="iconflex">
                      <Activity className="icon iconhover" />
                      1/3
                    </p>
                    <Link className="icon iconhover" />
                  </div>
                </div>
                <div className="border w-full border-gray-200" />
                <p className="iconflex">
                  <Check className="text-green-500 h-4" />
                  <span className="line-through ">Implement new designs</span>
                </p>
                <div className="border w-full border-gray-200" />
                <p className="iconflex">
                  <Check className="icon" />{" "}
                  <span className="line-through">Usability testing</span>
                </p>
              </div>
            </div>

            {/* 4th grid */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h1 className="boxheading">Notes 📒</h1>
                <Plus className="iconhover blueicon" />
              </div>
              {/* box1 */}
              <div className="box p-4 space-y-3">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAhvc-YjdwsimlEYdOknxcvbgNOVSHWjkWQ&usqp=CAU "
                    className="h-6 w-6 rounded-full"
                  />
                  <div>
                    <h1 className="profileheading boxheading">
                      Adrian Przetocki
                    </h1>
                    <p className="text-gray-400 font-normal    text-xs">
                      11:51 AM Jan 12
                    </p>
                  </div>
                </div>
                <p>
                  Publishing industries for previewing layouts and visual
                  <span className="text-indigo-500 hover:text-indigo-600">
                    #family
                  </span>
                  🔥
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAhvc-YjdwsimlEYdOknxcvbgNOVSHWjkWQ&usqp=CAU "
                  className="h-1/4 w-full object-cover"
                />
                <div className="flex gap-x-2 justify-end">
                  <p className="iconflex">
                    <Heart className=" icon iconhover" />4
                  </p>
                  <p className="iconflex">
                    <MessageCircle className="icon iconhover" />
                    16
                  </p>
                </div>
              </div>
              {/* box2 */}
              <div className="box p-4 space-y-3">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAhvc-YjdwsimlEYdOknxcvbgNOVSHWjkWQ&usqp=CAU "
                    className="h-6 w-6 rounded-full"
                  />
                  <div>
                    <h1 className="profileheading boxheading">
                      Adrian Przetocki
                    </h1>
                    <p className="text-gray-400 font-normal    text-xs">
                      11:51 AM Jan 12
                    </p>
                  </div>
                </div>
                <p>
                  Dedicated form for a category of users that will perform
                  actions?
                  <span className="text-indigo-500 hover:text-indigo-600">
                    #viewall
                  </span>
                </p>
                <div className="flex gap-x-2 justify-end items-center">
                  <p className="iconflex">
                    <Heart className=" icon iconhover" />6
                  </p>
                  <p className="iconflex">
                    <MessageCircle className="icon iconhover" />7
                  </p>
                  <Link className="icon iconflex" />
                </div>
              </div>
            </div>
            {/* 4th gird end */}
          </div>
          {/* all contents end here */}
        </div>
      </div>
    </main>
  );
}

export default kanban;
