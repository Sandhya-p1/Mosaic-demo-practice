import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  Activity,
  Album,
  ArrowRight,
  Cat,
  Check,
  Film,
  GitCompare,
  Heart,
  Home,
  List,
  MessageCircle,
  MoreHorizontal,
  Play,
  RefreshCcw,
  Search,
  UserRound,
  Waves,
} from "lucide-react";
function feed() {
  const [bgChange, setBgChange] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setBgChange(!bgChange);
  };

  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        {/* feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 py-6 md:px-7 text-gray-700">
          {/* left side part */}
          <div className="space-y-6 ">
            <h1 className="text-black  text-2xl font-bold md:text-3xl">
              Feed ✨
            </h1>
            <div className="inputbox flex items-center gap-x-1 lg:hidden">
              <Search className="h-4 w-5 text-slate-400 hover:text-slate-600 cursor-pointer" />
              <input
                type="search"
                placeholder="Search..."
                className="border-none outline-none bg-white w-full "
              />
            </div>
            <div className="flex  md:inline-block md:space-y-3 overflow-x-scroll no-scrollbar scroll-smooth gap-x-4 ">
              <div>
                <h1 className="uppercase text-xs text-slate-400 font-bold">
                  Menu
                </h1>
                <div className="cursor-pointer flex gap-x-3 md:gap-y-2 items-center py-2 md:inline-block">
                  <h1 className="flex t items-center gap-x-2  font-medium p-2 text-indigo-500 rounded-md bg-white w-full ">
                    <Home className="h-4 w-4 text-indigo-500" />
                    Home
                  </h1>

                  <h1 className="menulist">
                    <RefreshCcw className="icon" />
                    Explore
                  </h1>
                  <h1 className="menulist">
                    <List className="icon" />
                    Notifications
                  </h1>
                  <h1 className="menulist">
                    <Album className="icon" />
                    Bookmarks
                  </h1>
                  <h1 className="menulist">
                    <UserRound className="icon" />
                    Profile
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="uppercase text-xs text-slate-400 font-bold">
                  Groups
                </h1>
                <div className="cursor-pointer flex gap-x-3 items-center py-2 md:gap-y-2 md:inline-block  ">
                  <h1 className="menulist">
                    <Waves className="icon" />
                    Productivity
                  </h1>
                  <h1 className="menulist flex-shrink-0">
                    <Waves className="icon" />
                    Self Development
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* MIDDLE PART */}
          <div className="col-span-2 overflow-y-scroll no-scrollbar space-y-5">
            {/* box1 */}
            <div className="box py-3 px-4 ">
              <div className="flex items-center gap-x-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4rNyuXflmlpWKByP0vCw6wMJ3KWYb8uZ-zoagocKTg&s"
                  className="profile object-cover"
                />
                <input
                  type="text"
                  placeholder="What's happening, Mark?"
                  className="bg-gray-100 p-2 rounded-md w-full outline-none hover:bg-white hover:border-gray-100 hover:border"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-4 py-5 cursor-pointer">
                  <h1 className="flex gap-x-1 items-center text-base">
                    <Film className="text-indigo-500 h-5 w-4" />
                    Media
                  </h1>
                  <h1 className="flex gap-x-1 items-center text-base">
                    <Activity className="text-indigo-500 h-5 w-4" />
                    GIF
                  </h1>
                  <h1 className="flex gap-x-1 items-center text-base">
                    <Cat className="text-indigo-500 h-5 w-4" />
                    Emoji
                  </h1>
                </div>
                <button className="bg-indigo-600 flex items-center hover:bg-indigo-700 text-white gap-x-1 font-medium text-sm p-2 rounded-md">
                  Send
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* box2 */}
            <div className="box py-6 px-4 space-y-3">
              <div className="flex items-center gap-x-3">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                  className="profile object-cover"
                />
                <div className="space-y-1">
                  <h1 className="text-slate-800 font-medium">
                    Dominik Lamakani
                  </h1>
                  <p className="text-slate-400 text-sm">
                    Yesterday at 10:48 AM
                  </p>
                </div>
              </div>
              <h2>👋</h2>
              <p className="text-base">
                It's more likely that people reading your blog will opt in with
                their email addresses if you give them something highly relevant
                in return. Ditch that too-general lead magnet and create
                "content upgrades" for your highest-traffic articles.
              </p>
              <h1 className="text-base">Thread 👇</h1>
              <div className="flex items-center space-x-4 text-lg pt-2 text-slate-500 cursor-pointer ">
                <h1 className="flex items-center gap-x-1">
                  <Heart
                    className="h-5 w-5 hover:text-blue-600
                  "
                  />
                  4
                </h1>
                <h1 className="flex items-center gap-x-1">
                  <GitCompare className="h-5 w-5 hover:text-blue-600" />
                  44
                </h1>
                <h1 className="flex items-center gap-x-1">
                  <MessageCircle className="h-5 w-5 hover:text-blue-600" />7
                </h1>
              </div>
            </div>
            {/* box3 */}
            <div className="box py-6 px-4 space-y-3 ">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                    className="profile object-cover"
                  />
                  <div className="space-y-1">
                    <h1 className="text-slate-800 font-medium">
                      Mark Karimani
                    </h1>
                    <p className="text-slate-400 text-sm">Sponsored</p>
                  </div>
                </div>
                <MoreHorizontal className="text-gray-500 w-6 h-7" />
              </div>
              <h1 className="text-base">
                Designing an Earth-positive future, together 🌿
              </h1>
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfR_U_E16lIBi7TU6Ik_5jFXqDf7MPz3HbJQ&usqp=CAU"
                  className="object-cover w-full"
                />
                <div className=" absolute p-4 backdrop-blur-md  bottom-0 w-full flex justify-between items-center">
                  <h1 className="text-white text-sm  ">togethernature.com</h1>
                  <p className="text-indigo-500 gap-x-1 cursor-pointer hover:text-indigo-300 font-medium text-sm flex items-center ">
                    Learn More
                    <ArrowRight className="h-4 w-3" />
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-lg pt-2 text-slate-500 cursor-pointer ">
                <h1 className="flex items-center gap-x-1">
                  <Heart
                    className="h-5 w-5 hover:text-blue-600
                  "
                  />
                  4
                </h1>
                <h1 className="flex items-center gap-x-1">
                  <GitCompare className="h-5 w-5 hover:text-blue-600" />
                  44
                </h1>
                <h1 className="flex items-center gap-x-1">
                  <MessageCircle className="h-5 w-5 hover:text-blue-600" />7
                </h1>
              </div>
            </div>
            {/* box4 */}
            <div className="box py-6 px-4 space-y-3 text-slate-600">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                    className="profile object-cover"
                  />
                  <div className="space-y-1">
                    <h1 className="text-slate-800 font-medium">
                      Erica Spriggs
                    </h1>
                    <p className="text-slate-400 text-sm">
                      Yesterday at 2:34 PM
                    </p>
                  </div>
                </div>
                <MoreHorizontal className="text-gray-500 w-6 h-7" />
              </div>
              <h1 className="text-base">
                Any book recommendations for a first-time entrepreneur? 📚
              </h1>
              <div className="flex items-center space-x-4 text-lg pt-2 text-slate-500 cursor-pointer ">
                <h1 className="flex items-center gap-x-1">
                  <Heart
                    className="h-5 w-5 hover:text-blue-600
                  "
                  />
                  4
                </h1>
                <h1 className="flex items-center gap-x-1">
                  <GitCompare className="h-5 w-5 hover:text-blue-600" />
                  44
                </h1>
                <h1 className="flex items-center gap-x-1">
                  <MessageCircle className="h-5 w-5 hover:text-blue-600" />7
                </h1>
              </div>
              <div className="border w-full border-gray-200" />
              <div className="bg-slate-100 p-3 rounded-sm">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                    className="profile object-cover"
                  />
                  <div>
                    <h1
                      className="text-slate-800  text-xs
                    font-medium"
                    >
                      Sophie Wenner -
                      <span className="text-gray-400">44min</span>
                    </h1>
                    <p className="text-slate-400 text-sm">
                      <span className="text-blue-500 cursor-pointer">
                        @EricaSpriggs
                      </span>
                      Reading through and really enjoying "Zero to Sold" by
                      Arvid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 p-3 rounded-sm">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                    className="profile object-cover"
                  />
                  <div>
                    <h1 className="text-slate-800  text-xs  font-medium">
                      Kyla Scanlon -<span className="text-gray-400">1h</span>
                    </h1>
                    <p className="text-slate-400 text-sm">
                      <span className="text-blue-500 cursor-pointer">
                        @EricaSpriggs
                      </span>
                      Reading through and really enjoying "Zero to Sold" by
                      Arvid.
                    </p>
                  </div>
                </div>
              </div>
              {/* footer part */}
              <div className="flex justify-between items-center">
                <h1>
                  <span className="text-slate-600 font-medium">2</span> of
                  <span className="text-slate-600 font-medium"> 67 </span>
                  comments
                </h1>
                <p className="font-medium text-indigo-700 cursor-pointer">
                  View More Comments
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                  className="profile object-cover"
                />
                <input
                  type="text"
                  placeholder="Write a comment..."
                  style={{
                    backgroundColor: bgChange ? "white" : "#E6E6E6",
                  }}
                  className="
                  rounded-md p-2 w-full outline-none border-none hover:border"
                  onClick={handleClick}
                />
              </div>
              {/* footer part close */}
            </div>
            {/* box5 */}
            <div className="box py-6 px-4 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
                    className="profile object-cover"
                  />
                  <div>
                    <h1 className="text-slate-800 font-medium">
                      Margaret Sullivan
                    </h1>
                    <p className="text-slate-400 text-sm">
                      Yesterday at 4:56 PM
                    </p>
                  </div>
                </div>
                <MoreHorizontal className="text-gray-500 w-6 h-7" />
              </div>
              <h1 className="text-base">
                Kyla Network - Make new connections, join communities, and
                access exclusive experiences. 🧑‍🤝‍🧑
              </h1>
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfR_U_E16lIBi7TU6Ik_5jFXqDf7MPz3HbJQ&usqp=CAU"
                  className="object-cover w-full"
                />
                <div className="absolute left-1/2 top-1/2 p-5  bg-opacity-80 hover:bg-opacity-100 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2">
                  <Play className=" text-indigo-600 fill-indigo-600 h-5 w-6 text-center " />
                </div>
                <div className="absolute bottom-3 left-4 flex items-center gap-x-1 ">
                  <button className="text-xs text-gray-100 bg-zinc-800 bg-opacity-40 cursor-text rounded-sm py-1 px-2">
                    0:48
                  </button>
                  <button className="text-xs text-gray-100 bg-zinc-800 bg-opacity-40 cursor-text rounded-sm py-1 px-2">
                    1M Views
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-lg pt-2 text-slate-500 cursor-pointer ">
                <h1 className="flex items-center text-blue-600 gap-x-1">
                  <Heart
                    className="h-5 w-5 text-blue-600
                  "
                  />
                  4
                </h1>
                <h1 className="flex items-center gap-x-1">
                  <GitCompare className="h-5 w-5 hover:text-blue-600" />
                  44
                </h1>
                <h1 className="flex items-center gap-x-1">
                  <MessageCircle className="h-5 w-5 hover:text-blue-600" />7
                </h1>
              </div>
            </div>
            {/* middle part close here */}
          </div>
          {/* Right side part */}
          <div className="pl-6 text-gray-800 space-y-4 text-sm">
            <div className="inputbox flex items-center gap-x-1  ">
              <Search className="text-slate-400 h-5 w-5" />
              <input
                type="search"
                placeholder="Search..."
                className="border-none  outline-none w-full bg-white"
              />
            </div>
            {/* box1 */}
            <div className="box px-3 py-5 space-y-3">
              <h1 className="uppercase text-xs  text-gray-400 font-bold">
                top communities
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UXUxqvx9x2A_OikX_-oTb05DlE-nl46S2Q&usqp=CAU"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <h1 className="font-medium">Introductions</h1>
                </div>
                <button className="bg-indigo-100 px-3 py-1 text-center rounded-2xl text-indigo-600 ">
                  Join
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UXUxqvx9x2A_OikX_-oTb05DlE-nl46S2Q&usqp=CAU"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <h1 className="font-medium">HackerNews</h1>
                </div>
                <button className="bg-indigo-100 px-3 py-1 text-center rounded-2xl text-indigo-600 ">
                  Join
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UXUxqvx9x2A_OikX_-oTb05DlE-nl46S2Q&usqp=CAU"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <h1 className="font-medium">ReactJs</h1>
                </div>
                <Check className="bg-green-100 h-6 w-10 px-3 py-1 text-center rounded-2xl text-green-500 " />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UXUxqvx9x2A_OikX_-oTb05DlE-nl46S2Q&usqp=CAU"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <h1 className="font-medium">JustChatting</h1>
                </div>
                <button className="bg-indigo-100 px-3 py-1 text-center rounded-2xl text-indigo-600 ">
                  Join
                </button>
              </div>
              <button className="text-indigo-600 bg-white text-center py-1 border rounded-sm hover:border-gray-300 w-full">
                View All
              </button>
            </div>
            {/* box2 */}
            <div className="box py-5 px-3 space-y-3">
              <h1 className="uppercase text-xs  text-gray-400 font-bold">
                who to follow
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UXUxqvx9x2A_OikX_-oTb05DlE-nl46S2Q&usqp=CAU"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <h1 className="font-medium">Elly Boutin</h1>
                </div>
                <button className="bg-indigo-100 px-3 py-1 text-center rounded-2xl text-indigo-600 ">
                  Follow
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UXUxqvx9x2A_OikX_-oTb05DlE-nl46S2Q&usqp=CAU"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <h1 className="font-medium">Rich Harris</h1>
                </div>
                <button className="bg-indigo-100 px-3 py-1 text-center rounded-2xl text-indigo-600 ">
                  Follow
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UXUxqvx9x2A_OikX_-oTb05DlE-nl46S2Q&usqp=CAU"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <h1 className="font-medium">Mary Porzio</h1>
                </div>
                <button className="bg-indigo-100 px-3 py-1 text-center rounded-2xl text-indigo-600 ">
                  Follow
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UXUxqvx9x2A_OikX_-oTb05DlE-nl46S2Q&usqp=CAU"
                    className="rounded-full h-8 w-8 object-cover"
                  />
                  <h1 className="font-medium">Brian Lovin</h1>
                </div>
                <button className="bg-indigo-100 px-3 py-1 text-center rounded-2xl text-indigo-600 ">
                  Follow
                </button>
              </div>
              <button className="text-indigo-600 bg-white text-center py-1 border rounded-sm hover:border-gray-300 w-full">
                View All
              </button>
            </div>
            {/* box3 */}
            <div className="box py-5 px-4 space-y-4">
              <h1 className="uppercase text-xs  text-gray-400 font-bold">
                trends for you
              </h1>
              <h2 className="inline-block font-medium">
                Tracking your website traffic on launch day 📈
                <br />
                <span className="text-xs text-gray-400 ">248 comments</span>
              </h2>
              <h2 className="inline-block font-medium">
                Freemium model questions <br />
                <span className="text-xs text-gray-400 ">47 comments</span>
              </h2>
              <h2 className="inline-block font-medium">
                Slack and Community <br />
                <span className="text-xs text-gray-400 ">24 comments</span>
              </h2>
              <h2 className="inline-block font-medium">
                Who owns user onboarding in your company? <br />
                <span className="text-xs text-gray-400 ">17 comments</span>
              </h2>
              <h2 className="inline-block font-medium">
                Questions from a very confused Web3 startup founder 🤔
                <br />
                <span className="text-xs text-gray-400 ">9 comments</span>
              </h2>
              <button className="text-indigo-600 bg-white text-center py-1 border rounded-sm hover:border-gray-300 w-full">
                View All
              </button>
            </div>
          </div>
          {/* feed part close here  */}
        </div>
        {/* main and nav close */}
      </div>
    </main>
  );
}

export default feed;
