import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Heart,
  MoreHorizontal,
  Video,
} from "lucide-react";
import { useRouter } from "next/router";
function meetupspost() {
  const router = useRouter();
  const handleClick = () => {
    router.push("./meetups");
  };
  return (
    <main className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="w-full overflow-auto ">
        <Nav />
        <div className="md:flex gap-x-10   text-slate-600 px-3 py-5 md:px-24 md:py-10">
          {/* left side */}
          <div className="space-y-4 md:w-[70%] overflow-y-scroll scroll-smooth no-scrollbar">
            <button
              className="bg-white py-1 mb-2 px-2  flex items-center shadow-sm border rounded-md text-sm font-medium hover:border-gray-300"
              onClick={handleClick}
            >
              <ChevronLeft className="h-4 w-4 text-black" />
              Back To Meetups
            </button>
            <p className="uppercase flex items-center gap-x-1 text-indigo-600 text-sm font-medium">
              mon 27 dec,2021 - 9:00 pm
              <ArrowRight className="h-5 w-4" /> 10:00 pm
            </p>
            <h1 className="text-2xl font-bold text-black">
              The World of AI and Machine Learning — Open Chat
            </h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </p>
            <div className="flex items-center space-x-2">
              <img
                src="https://www.verywellmind.com/thmb/pwEmuUJ6KO9OF8jeiQCDyKnaVQI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1187609003-73c8baf32a6a46a6b84fe931e0c51e7e.jpg"
                className="profile"
              />
              <p className="text-sm">
                Hosted by
                <span className="font-medium text-black">Monica Fishkin</span>
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="flex items-center gap-x-1 font-medium  text-xs bg-white rounded-2xl px-2 py-1 ">
                <Video className="icon " />
                Online Event
              </p>
              <p className="text-green-600 rounded-2xl font-medium bg-green-200 text-xs px-2 py-1">
                FREE
              </p>
            </div>
            <img
              src="https://media.istockphoto.com/id/1306303548/photo/happy-young-man-using-virtual-reality-glasses.jpg?s=612x612&w=0&k=20&c=glTnEes_bCUfMFNE5VxLphNpr5zrO6BclZJFsXDsQVk="
              className=" w-full object-cover  rounded-sm py-2"
            />
            <h1 className="text-black font-bold text-2xl">Meetup Details</h1>
            <p className="pb-2">
              In the world of AI, behavioural predictions are leading the charge
              to better machine learning.
              <br />
              <br />
              There is so much happening in the AI space. Advances in the
              economic sectors have seen automated business practices rapidly
              increasing economic value. While the realm of the human sciences
              has used the power afforded by computational capabilities to solve
              many human based dilemmas. Even the art scene has adopted
              carefully selected ML applications to usher in the technological
              movement.
              <br />
              <br />
              Join us every second Wednesday as we host an open discussion about
              the amazing things happening in the world of AI and machine
              learning. Feel free to share your experiences, ask questions,
              ponder the possibilities, or just listen as we explore new topics
              and revisit old ones.
            </p>
            <div className="border border-gray-200 w-full" />
            <h1 className="font-bold text-2xl text-black py-2">Photos(3)</h1>

            {/* adjustment needed */}
            <div className="flex items-center gap-x-3 h-32">
              <img
                src="https://m-cdnphonearena.com/images/article/147883-wide-two_1200/Meet-Apple-Vision-Pro-the-human-virtual-reality-headset.jpg."
                className="h-full w-auto "
              />
              <img
                src="https://media.istockphoto.com/id/1488644028/photo/vr-glasses-and-engineering-man-on-tablet-for-futuristic-research-electronics-management-or.jpg?s=612x612&w=0&k=20&c=fpnnzlmvG8HY1YQhNDAs4d4vrpOlAz7-Lpj0hqgp-KQ="
                className="h-full w-auto "
              />
              <img
                src="https://thumbs.dreamstime.com/b/modern-technologies-entertainment-happy-african-american-man-wearing-vr-glasses-experiencing-virtual-reality-standing-220180947.jpg"
                className="h-full w-auto "
              />
            </div>
            <div className="border border-gray-200 w-full" />
            {/* COMMENTS PART */}
            <h2 className="font-bold text-2xl text-black py-2">Comments(3)</h2>
            <div className="flex  space-x-2 ">
              <img
                src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                className="profile"
              />
              <div className="space-y-2 text-base">
                <h2 className="font-semibold text-black">Taylor Nieman</h2>
                <p className="itallic">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.”
                </p>
              </div>
            </div>
            <div className="flex  space-x-2 ">
              <img
                src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                className="profile"
              />
              <div className="space-y-2 text-base">
                <h2 className="font-semibold text-black">Meagan Loyst</h2>
                <p className="itallic">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.”
                </p>
              </div>
            </div>
            <div className="flex  space-x-2 ">
              <img
                src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                className="profile"
              />
              <div className="space-y-2 text-base">
                <h2 className="font-semibold text-black">Frank Malik</h2>
                <p className="itallic">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.”
                </p>
              </div>
            </div>
            {/* comments part end here */}
            <div className="border border-gray-200 w-full" />
            <h1 className="font-semibold text-2xl text-black py-2">
              Similar Meetups
            </h1>
            <box1 className="rounded-sm shadow-md flex border space-x-4 ">
              <div className="relative md:w-2/5 w-1/3 ">
                <img
                  src="https://cdn.vox-cdn.com/thumbor/XCHI9BrROCPLJyRBbmtM8PO5xCs=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915588/akrales_200421_3975_0080.jpg"
                  className="object-cover h-full md:w-full  w-full "
                />
                <Heart className="absolute text-white bg-opacity-55  h-6 w-7 top-3 right-2  bg-black p-1 rounded-full" />
              </div>
              <div className="py-4 space-y-3 px-3">
                <h1 className="uppercase text-indigo-500 font-semibold text-sm">
                  mon 27 dec, 2021
                </h1>
                <h2 className="text-black text-xl font-semibold">
                  Silicon Valley Bootstrapper Breakfast Online for 2021
                </h2>
                <p className="text-base">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts.
                </p>
                <div className="flex justify-between items-center">
                  <h1 className="bg-slate-200 text-sm rounded-2xl p-2 gap-x-1 flex items-center">
                    <Video className="icon" />
                    Online Event
                  </h1>
                  <div className="flex items-center ">
                    <img
                      src="https://i.pinimg.com/564x/87/7b/01/877b01f7092146efb33a6848e786d892.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                    <img
                      src="https://www.ellwoodcityledger.com/gcdn/presto/2022/05/04/NECL/31766c5e-852f-49d9-aab0-38f7a7d18b39-ezgif-4-7526b52a77.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"
                      className="h-9 w-9  border-white border-2 rounded-full -ml-5"
                    />

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9TYkK4u3hjbKeXCKxXUzDcbP8x290wuO7NftDJfDO_oTHlR-6N6d2bD_ReklWG-jc4A&usqp=CAU"
                      className="h-9 w-9 border-white border-2 rounded-full -ml-5"
                    />
                    <p className="text-gray-400 text-xs font-medium pl-1 italic">
                      +132
                    </p>
                  </div>
                </div>
              </div>
            </box1>
          </div>

          {/* right side */}
          <div className="space-y-4 py-7 md:py-0 w-[30%]">
            <div className=" p-3 border shadow-lg rounded-md space-y-2 bg-white">
              <button className="flex w-full items-center gap-x-1 justify-center py-2 text-base text-white bg-indigo-500 hover:bg-indigo-600 rounded-sm">
                <Check className="h-5 w-4" />
                Attending
              </button>
              <button className="py-2 w-full gap-x-1 rounded-sm border flex items-center justify-center hover:border-gray-300">
                <Heart className="h-5 w-4 text-red-600" />
                Favorite
              </button>
            </div>
            {/* box1 */}
            <div className="box py-4 px-3 text-base">
              <div className="flex items-center justify-between">
                <h1 className="text-black font-medium ">Attendances (127)</h1>
                <p className="text-indigo-500">View All</p>
              </div>
              <div className="space-y-2 py-3">
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-x-2 text-black font-medium">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                      className="profile"
                    />
                    Carolyn McNeail
                  </h1>
                  <MoreHorizontal className="icon  cursor-pointer" />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-x-2 text-black font-medium">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                      className="profile"
                    />
                    Dominik Lamakani
                  </h1>
                  <MoreHorizontal className="icon cursor-pointer" />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-x-2 text-black font-medium">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                      className="profile"
                    />
                    Ivan Mesaros
                  </h1>
                  <MoreHorizontal className="icon cursor-pointer" />
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-x-2 text-black font-medium">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                      className="profile"
                    />
                    Maria Martinez
                  </h1>
                  <MoreHorizontal className="icon cursor-pointer" />
                </div>
              </div>
              {/* attendances end here */}
            </div>
            {/* box2 */}
            <div className="box py-4 px-3 text-base">
              <div className="flex items-center justify-between">
                <h1 className="text-black font-medium ">Invite Friends</h1>
                <p className="text-indigo-500">View All</p>
              </div>
              <div className="space-y-2 py-3">
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-x-2 text-black font-medium">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                      className="profile"
                    />
                    Haruki Masuno
                  </h1>
                  <button className="text-indigo-500 bg-indigo-100 rounded-2xl py-1 px-2 font-medium text-sm">
                    Invite
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-x-2 text-black font-medium">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                      className="profile"
                    />
                    Joe Huang
                  </h1>
                  <button className="text-indigo-500 bg-indigo-100 rounded-2xl py-1 px-2 font-medium text-sm">
                    Invite
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-x-2 text-black font-medium">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                      className="profile"
                    />
                    Carolyn McNeail
                  </h1>
                  <button className="text-indigo-500 bg-indigo-100 rounded-2xl py-1 px-2 font-medium text-sm">
                    Invite
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex items-center gap-x-2 text-black font-medium">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/037/809/non_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
                      className="profile"
                    />
                    Lisa Sitwala
                  </h1>
                  <button className="text-indigo-500 bg-indigo-100 rounded-2xl py-1 px-2 font-medium text-sm">
                    Invite
                  </button>
                </div>
              </div>
              {/* attendances end here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default meetupspost;
