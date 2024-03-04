import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  Home,
  List,
  Heart,
  LineChart,
  Circle,
  ChevronRightIcon,
  ChevronUp,
  LucideAlignRight,
  ArrowRight,
  MousePointer2,
  ArrowUp,
  Navigation2,
} from "lucide-react";
import { useRouter } from "next/router";
function forumpost() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/forum");
  };
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-y-auto ">
        <Nav />
        {/* hero page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 py-6  md:px-7 h-full text-gray-600">
          {/* left side part */}
          <div className="space-y-6 ">
            <div className=" flex justify-between items-center ">
              <h1 className="text-black  text-2xl font-bold md:text-3xl">
                Forum ✨
              </h1>
              <button className="bg-indigo-500 md:hidden hover:bg-indigo-600 font-medium rounded-md p-2 text-white text-base">
                Create Post
              </button>
            </div>
            <div className="flex  md:inline-block md:space-y-3 overflow-x-scroll no-scrollbar scroll-smooth gap-x-10 ">
              <div>
                <h1 className="uppercase text-xs text-slate-400 font-bold">
                  Menu
                </h1>
                <div className="cursor-pointer flex gap-x-3 md:gap-y-2 items-center py-2 md:inline-block">
                  <h1 className="flex t items-center gap-x-2  font-medium p-2 text-indigo-500 rounded-md bg-white w-full ">
                    <Home className="h-4 w-4 text-indigo-500" />
                    Home
                  </h1>

                  <h1 className="menulist flex-shrink-0">
                    <Heart className="icon" />
                    Reading List
                  </h1>
                  <h1 className="menulist">
                    <List className="icon" />
                    Listings
                  </h1>
                  <h1 className="menulist">
                    <LineChart className="icon" />
                    Podcasts
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="uppercase text-xs text-slate-400 font-bold">
                  Groups
                </h1>
                <div className="cursor-pointer flex gap-x-3 items-center py-2 md:gap-y-2 md:inline-block  ">
                  <h1 className="menulist">
                    <Circle className="h-4 w-4 text-green-600" />
                    Startups
                  </h1>
                  <h1 className="menulist flex-shrink-0">
                    <Circle className="h-4 w-4 text-red-600" />
                    Javascript
                  </h1>
                  <h1 className="menulist flex-shrink-0">
                    <Circle className="h-4 w-4 text-orange-600" />
                    Productivity
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE PART */}

          <div className="col-span-2 overflow-y-auto box no-scrollbar space-y-4  mt-3 md:mt-0 p-5">
            <div className="text-gray-600 flex items-center space-x-2 text-base cursor-pointer">
              <h1 className="hover:text-indigo-600" onClick={handleClick}>
                Home
              </h1>
              <ChevronRightIcon className="h-4 w-4 text-gray-400" />
              <h1 className="hover:text-indigo-600">Discussion</h1>
            </div>
            <div className="flex justify-between items-center ">
              <h1 className="text-2xl text-black font-bold">
                Besides Product Hunt, where else should I promote my new
                project? 🤔
              </h1>

              <div className="py-2 px-4 border  border-gray-200 rounded-sm cursor-pointer  ">
                <ChevronUp className="h-3 w-4 text-gray-400" />
                <p className="text-xs font-medium">44</p>
              </div>
            </div>

            <p className="text-gray-500 text-base ">
              <span className="text-blue-500 cursor-pointer">katemerlu</span> -
              2h - 17 Comments
            </p>
            <p>
              Looking for new ideas to get users, receive feedback, and increase
              exposure! Besides PH, where else do you showcase your product?
            </p>
            <h2>Please advise 🙌</h2>
            <div className="flex space-x-3 h-28 py-2">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                className="profile"
              />
              <div className="border border-gray-300 relative rounded-md p-2 h-full w-full hover:border-gray-400">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="outline-none bg-white text-sm h-full placeholder:text-sm placeholder:text-gray-400 border-none w-full"
                />
                <LucideAlignRight className="h-2 w-2 absolute right-0 bottom-0" />
              </div>
            </div>
            <button className="flex rounded-md  justify-end ml-auto  py-1 px-3 font-medium text-white bg-indigo-500 hover:bg-indigo-600 items-center gap-x-1">
              Reply
              <span>
                <ArrowRight className="h-4 w-4 " />
              </span>
            </button>
            <h2 className="font-medium">Comments</h2>
            {/* all the comments */}
            <div className="space-y-10 text-sm">
              {/* comment1 */}
              <div className="flex gap-x-3">
                <h1 className="font-medium text-sm">
                  <Navigation2 className="h-4 w-4 text-gray-400 fill-gray-400" />
                  44
                </h1>
                <div className=" space-y-3">
                  <p className="whitespace-wrap">
                    We've also had the same question to be honest. And for
                    Appy.com launch we decided to go with Twitter as a primary
                    medium and then Product Hunt as the other one. And I have to
                    say that it led to some great results as Twitter allows you
                    to be super active and engage in many conversations.
                  </p>
                  <p>
                    Also, users are there and everything is super active. So
                    that will be my advice - invest time in Twitter
                  </p>
                  <div className="flex gap-x-2 items-center">
                    <img
                      src=" https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <p className="text-xs font-medium">
                      <span className="text-indigo-500">ekuplu89</span> - Reply
                      - Share
                    </p>
                  </div>
                  {/* reply 1 */}
                  <div className="py-2 flex space-x-3 items-center ">
                    <h1 className="font-medium text-sm">
                      <Navigation2 className="h-4 w-3 text-gray-400 fill-gray-400" />
                      2
                    </h1>
                    <div className="space-y-3">
                      <p>
                        That's great advice,
                        <span className="text-indigo-500">@ekuplu89</span> 👏
                      </p>
                      <div className="flex gap-x-2 items-center">
                        <img
                          src=" https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <p className="text-xs font-medium">
                          <span className="text-indigo-500">ekuplu89</span> -
                          Reply - Share
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* comment2 */}
              <div className="flex gap-x-3">
                <h1 className="font-medium text-sm hover:text-blue-500">
                  <Navigation2 className="h-4 w-4 text-gray-400 fill-gray-400" />
                  27
                </h1>
                <div className=" space-y-3">
                  <p className="whitespace-wrap">
                    If you are a SaaS product and are looking for early
                    adopters, AppSumo seems to be a great place to list on. Most
                    of the users there seem to be early-adopters. Life-time
                    deals seem to be the norm there.
                  </p>

                  <div className="flex gap-x-2 items-center">
                    <img
                      src=" https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <p className="text-xs font-medium">
                      <span className="text-indigo-500">markcuttik</span> -
                      Reply - Share
                    </p>
                  </div>
                </div>
              </div>
              {/* comment3 */}
              <div className="flex gap-x-3">
                <h1 className="font-medium text-sm hover:text-blue-500">
                  <Navigation2 className="h-4 w-4 text-gray-400 fill-gray-400" />
                  24
                </h1>
                <div className=" space-y-3">
                  <p className="whitespace-wrap">
                    Thank you very much for all the people who are posting other
                    alternatives! I will launch my free product design course in
                    February and I will make a notion template with all this
                    information! :)
                  </p>

                  <div className="flex gap-x-2 items-center">
                    <img
                      src=" https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <p className="text-xs font-medium">
                      <span className="text-indigo-500">davidp1</span> - Reply -
                      Share
                    </p>
                  </div>
                  {/* reply 1 */}
                  <div className="py-2 flex space-x-3 items-center ">
                    <h1 className="font-medium text-sm">
                      <Navigation2 className="h-4 w-3 text-gray-400 fill-gray-400" />
                      2
                    </h1>
                    <div className="space-y-3">
                      <p>
                        That sounds like an excellent idea. I'd love to take a
                        look when you're ready!
                        <span className="text-indigo-500">@ellielong</span>
                      </p>
                      <div className="flex gap-x-2 items-center">
                        <img
                          src=" https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <p className="text-xs font-medium">
                          <span className="text-indigo-500">ellielong</span> -
                          Reply - Share
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* repy2 */}

                  <div className="py-2 px-4 flex space-x-3 items-center ">
                    <h1 className="font-medium text-sm">
                      <Navigation2 className="h-4 w-3 text-gray-400 fill-gray-400" />
                      2
                    </h1>
                    <div className="space-y-3">
                      <p>Expect it! 👊</p>
                      <div className="flex gap-x-2 items-center">
                        <img
                          src=" https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <p className="text-xs font-medium">
                          <span className="text-indigo-500">davidp1</span> -
                          Reply - Share
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* comment4 */}
              <div className="flex gap-x-3">
                <h1 className="font-medium text-sm hover:text-blue-500">
                  <Navigation2 className="h-4 w-4 text-gray-400 fill-gray-400" />
                  19
                </h1>
                <div className=" space-y-3">
                  <p className="whitespace-wrap">
                    Social Media (channels based on your target audience), and
                    Slack channels
                  </p>

                  <div className="flex gap-x-2 items-center">
                    <img
                      src=" https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <p className="text-xs font-medium">
                      <span className="text-indigo-500">patrick2</span> - Reply
                      - Share
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className=" text-base text-center cursor-pointer  text-indigo-500 font-medium">
              View More Comments
            </p>
          </div>
          {/* right part */}
          <div className="pl-6 hidden md:inline space-y-5 overflow-y-auto no-scrollbar">
            <button className="py-2 text-center w-full bg-indigo-500 hover:bg-indigo-600 text-white text-base font-medium rounded-md">
              Create Post
            </button>
            {/* box1 */}
            <div className="box p-4 space-y-5">
              <h1 className="uppercase text-slate-400 font-bold text-xs">
                about the author
              </h1>
              <div className="flex space-x-3 items-center">
                <img
                  src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h1 className="text-black font-medium text-lg">Kate Merlu</h1>
                  <p className="italic text-slate-400">Building SquareApp 🚀</p>
                </div>
              </div>
              <div className="space-y-2 text-slate-600">
                <p>🤟 1798 Karma</p>
                <p>🔥 39 Posts</p>
                <p>✍️ 299 Comments</p>
              </div>
              <button className="text-center w-full border border-gray-200 hover:border-gray-300 shadow-sm text-indigo-500 py-1 text-sm rounded-sm font-medium">
                Follow
              </button>
            </div>
            {/* box2 */}
            <div className="box p-4 space-y-4">
              <h1 className="uppercase text-slate-400 text-xs font-bold">
                Popular stories
              </h1>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <div>
                <p className="font-medium">
                  I built and sold 2 small SaaS products and quit my job in the
                  last two years — AMA
                </p>
                <h1 className="text-slate-400 text-xs">
                  <span className="text-blue-500 ">markusj</span>- 2d -312
                  comments
                </h1>
              </div>
              <button className="py-1 rounded-sm border text-blue-500 w-full hover:border-gray-300">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default forumpost;
