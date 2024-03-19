import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import {
  Activity,
  Calendar,
  Heart,
  Link,
  Menu,
  MessageCircle,
  Plus,
} from "lucide-react";
function list() {
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        <div className="px-3 py-5 md:py-10 space-y-4 md:w-2/3 md:mx-auto text-black ">
          <div className="md:flex md:items-center md:justify-between space-y-3">
            <h1 className="text-3xl font-bold ">Acme Inc.Tasks ✨</h1>
            <div className="flex items-center space-x-4">
              <div className="flex">
                <img
                  src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                  className="profilebox "
                />
                <img
                  src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                  className="profilebox -ml-4 bg-white  border "
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbFwrD8kVwlRxyo4qn5YPRpGoZEtSiZdJYBjGTQ_9T7Q3hAD0I99a7OY6MZn9NrvJuNU&usqp=CAU"
                  className="profilebox bg-white border -ml-4"
                />
                <Plus className="h-8 w-8 -ml-4 hover:border-gray-300 cursor-pointer bg-white border border-slate-200 shadow-md rounded-full p-2 text-indigo-500" />
              </div>
              <button className="iconflex bg-indigo-500  hover:bg-indigo-600 text-white font-medium px-3 py-2 rounded-md">
                <Plus className="h-6 w-6 text-indigo-300" /> Add Task
              </button>
            </div>
          </div>
          {/* TODOS */}
          <h1 className="pt-2 font-medium">To Do's 🖋️</h1>

          <div className="space-y-2">
            {/* box1 */}
            <div className="box p-4 md:flex md:justify-between space-y-4  md:items-center ">
              <div className="flex space-x-2 items-center">
                <Menu className="icon" />
                <input type="checkbox" />
                <p>Senior Software Engineer Backend</p>
              </div>
              <div className="flex items-center space-x-2 justify-end md:justify-center ">
                <div className="flex items-center">
                  <img
                    src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                    className="h-6 w-6 rounded-full object-cover "
                  />
                  <img
                    src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                    className="h-7 w-7 -ml-3 rounded-full object-cover bg-white  border "
                  />
                </div>
                <p className="iconflex">
                  <Heart className="icon iconhover" />4
                </p>
                <p className="iconflex">
                  <MessageCircle className="icon iconhover" />7
                </p>
                <p className="iconflex">
                  <Link className="icon iconhover" />
                </p>
              </div>
            </div>
            {/* box2  */}
            <div className="box p-4 md:flex md:justify-between space-y-4  md:items-center ">
              <div className="flex space-x-2 items-center">
                <Menu className="icon" />
                <input type="checkbox" />
                <p>User should receive a daily digest email</p>
              </div>
              <div className="flex items-center space-x-2 justify-end md:justify-center ">
                <p className="iconflex text-orange-500">
                  <Calendar className="h-4 w-4" />
                  Mar 27
                </p>

                <p className="iconflex">
                  <MessageCircle className="icon iconhover" />6
                </p>
                <p className="iconflex">
                  <Link className="icon iconhover" />
                </p>
              </div>
            </div>
            {/* box3 */}
            <div className="box p-4 md:flex md:justify-between space-y-4  md:items-center ">
              <div className="flex space-x-2 items-center">
                <Menu className="icon" />
                <input type="checkbox" />
                <p>Change license and remove products</p>
              </div>
              <div className="flex items-center space-x-2 justify-end md:justify-center ">
                <div className="flex items-center">
                  <img
                    src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                    className="h-6 w-6 rounded-full object-cover "
                  />
                  <img
                    src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                    className="h-7 w-7 -ml-3 rounded-full object-cover bg-white  border "
                  />
                </div>

                <p className="iconflex">
                  <MessageCircle className="icon iconhover" />4
                </p>
                <p className="iconflex">
                  <Link className="icon iconhover" />
                </p>
              </div>
            </div>
          </div>
          {/* IN PROGRESS */}
          <h1 className="pt-2 font-medium">In Progress ✌️</h1>

          <div className="space-y-2">
            {/* box1 */}
            <div className="box p-4 md:flex md:justify-between space-y-4  md:items-center ">
              <div className="flex gap-x-2 items-center">
                <Menu className="icon" />
                <input type="checkbox" />
                <div>
                  <p>Managing teams (book)</p>
                  <div>
                    <p className="iconflex">
                      <input type="checkbox" />
                      <span className="line-through">
                        Finish the presentation
                      </span>
                    </p>
                    <p className="iconflex">
                      <input type="checkbox" />
                      <span>Finish the design</span>
                    </p>
                    <p className="iconflex">
                      <input type="checkbox" />
                      <span>Publish the content</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 justify-end md:justify-center ">
                <img
                  src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                  className="h-6 w-6 rounded-full object-cover "
                />

                <p className="iconflex">
                  <Activity className="icon iconhover" />
                  1/3
                </p>
                <p className="iconflex">
                  <Link className="icon iconhover" />
                </p>
              </div>
            </div>
            {/* box2  */}
            <div className="box p-4 md:flex md:justify-between space-y-4  md:items-center ">
              <div className="flex space-x-2 items-center">
                <Menu className="icon" />
                <input type="checkbox" />
                <p>Product Update -Q4 2021</p>
              </div>
              <div className="flex items-center space-x-2 justify-end md:justify-center ">
                <img
                  src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                  className="h-6 w-6 rounded-full object-cover "
                />
                <p className="iconflex text-orange-500">
                  <Calendar className="h-4 w-4" />
                  Mar 27
                </p>

                <p className="iconflex">
                  <Link className="icon iconhover" />
                </p>
              </div>
            </div>
            {/* box3 */}
            <div className="box p-4 md:flex md:justify-between space-y-4  md:items-center ">
              <div className="flex space-x-2 items-center">
                <Menu className="icon" />
                <input type="checkbox" />
                <p>Design Marketing assests</p>
              </div>
              <div className="flex items-center space-x-2 justify-end md:justify-center ">
                <img
                  src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                  className="h-6 w-6 rounded-full object-cover "
                />

                <p className="iconflex text-orange-500">
                  <Calendar className="h-4 w-4" />
                  Mar 27
                </p>
                <p className="iconflex">
                  <Link className="icon iconhover" />
                </p>
              </div>
            </div>
          </div>
          {/* completed */}
          <h1 className="pt-2 font-medium">Completed 🎉</h1>

          <div className="space-y-2">
            {/* box1 */}
            <div className="box p-4 md:flex md:justify-between space-y-4  md:items-center ">
              <div className="flex space-x-2 items-center">
                <Menu className="h-4 w-4 text-gray-300" />
                <input type="checkbox" />
                <p className="text-gray-400 line-through">
                  Design new diagrams
                </p>
              </div>
              <div className="flex items-center space-x-2 justify-end md:justify-center ">
                <img
                  src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                  className="h-6 w-6 rounded-full object-cover "
                />
                <p className="iconflex text-gray-300">
                  <Activity className="h-4 w-4" />
                  Mar 27
                </p>

                <p className="iconflex">
                  <Link className="h-4 w-4 text-gray-300 hover:text-blue-400" />
                </p>
              </div>
            </div>
            {/* box3 */}
            <div className="box p-4 md:flex md:justify-between space-y-4  md:items-center ">
              <div className="flex space-x-2 items-center">
                <Menu className="h-4 w-4 text-gray-300" />
                <input type="checkbox" />
                <p className="text-gray-400 line-through">
                  Update the contact page
                </p>
              </div>
              <div className="flex items-center space-x-2 justify-end md:justify-center ">
                <img
                  src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                  className="h-6 w-6 rounded-full object-cover "
                />

                <p className="iconflex text-gray-300">
                  <Activity className="h-4 w-4" />
                  Mar 27
                </p>
                <p className="iconflex">
                  <Link className="icon hover:text-blue-400" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default list;
