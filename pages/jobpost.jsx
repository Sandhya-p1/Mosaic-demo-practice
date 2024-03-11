import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import {
  ArrowRight,
  ChevronLeft,
  Facebook,
  LinkedinIcon,
  Bookmark,
  Twitter,
} from "lucide-react";
import JobPostBox from "./components/JobPostBox";
import { useRouter } from "next/router";
function jobpost() {
  const router = useRouter();
  const handleRouter = () => {
    router.push("./jobpost");
  };
  const handleBack = () => {
    router.push("./listing");
  };
  return (
    <main className="flex h-screen bg-slate-100 ">
      <Sidebar />
      <div className="w-full  overflow-auto ">
        <Nav />
        <div className="px-4 py-8 text-gray-500 md:flex  md:px-14 space-x-8 space-y-4">
          {/* left side */}
          <div className="space-y-4 md:w-[65%]  ">
            <button
              onClick={handleBack}
              className="px-2 py-1 text-sm font-medium bg-white border hover:border-gray-300 rounded-md shadow-md flex items-center gap-x-1 text-black"
            >
              <ChevronLeft className="h-5 w-5 text-gray-500" />
              Back To Jobs
            </button>
            <p className="italic text-base pt-2">Posted Jan 6, 2022</p>
            <h1 className="font-bold text-black text-3xl">
              Senior Client Engineer (React & React Native)
            </h1>
            <div className="md:hidden">
              <JobPostBox />
            </div>
            <div className="flex items-center space-x-3 py-2">
              <button className="bg-indigo-100 rounded-full shadow-sm text-indigo-400 text-sm font-medium px-2 py-1">
                Full-time
              </button>
              <button className="bg-indigo-100 rounded-full shadow-sm text-indigo-400 text-sm font-medium px-2 py-1">
                Senior Engineer
              </button>
              <button className="bg-indigo-100 rounded-full shadow-sm text-indigo-400 text-sm font-medium px-2 py-1">
                Remote
              </button>
            </div>
            <div className="border border-gray-200 w-full" />
            <div className="space-y-2 py-3">
              <h1 className="font-bold text-black text-xl">The Role</h1>
              <p className="text-base leading-7">
                In the world of AI, behavioural predictions are leading the
                charge to better machine learning.
                <br />
                <br />
                There is so much happening in the AI space. Advances in the
                economic sectors have seen automated business practices rapidly
                increasing economic value. While the realm of the human sciences
                has used the power afforded by computational capabilities to
                solve many human based dilemmas. Even the art scene has adopted
                carefully selected ML applications to usher in the technological
                movement.
                <br />
                <br />
                Join us every second Wednesday as we host an open discussion
                about the amazing things happening in the world of AI and
                machine learning. Feel free to share your experiences, ask
                questions, ponder the possibilities, or just listen as we
                explore new topics and revisit old ones.
                <br />
                <br />
              </p>
            </div>
            <div className="border border-gray-200 w-full" />

            <div className="space-y-2 py-3">
              <h1 className="font-bold text-black text-xl">About You</h1>
              <p>
                You love building great software. Your work could be supporting
                new feature development, migrating existing features, and
                creating other mobile and web solutions for customers. You'll
                have a primary focus on frontend development using Javascript.
                Our client's tech stack is JavaScript, primarily using React. A
                strong understanding of JS core (ES2019+) is required, with some
                exposure in Java as back-end technology. We use modern tools,
                which means you'll have the opportunity to work with Webpack,
                Redux, Apollo, Styled Components, and much more.
                <br />
                <br />
                You love learning. Engineering is an ever-evolving world. You
                enjoy playing with new tech and exploring areas that you might
                not have experience with yet. You are self-driven, self-learner
                willing to share knowledge and participate actively in your
                community.
                <br />
                <br />
                Having overlap with your team is critical when working in a
                global remote team. Modus requires all team members to overlap
                with EST morning hours daily. In addition, reliable high speed
                internet is a must.
              </p>
            </div>
            <div className="border border-gray-200 w-full" />
            <div className="space-y-2 py-3">
              <h1 className="font-bold text-black text-xl">
                Things You Might Do
              </h1>

              <p>
                We are a fast-growing, and remote-first company, so you'll
                likely get experience on many different projects across the
                organization. That said, here are some things you'll probably
                do:
              </p>
              <br />
              <li>Give back to the community via open source and blog posts</li>
              <li>
                Travel and meet great people- as part of our remote-first
                lifestyle, it's important that we come together as needed to
                work together, meet each other in person and have fun together.
                Please keep that in mind when you apply.
              </li>
              <li>
                Teach and be taught: Modus creates active teams that work in
                internal and external projects together, giving opportunities to
                stay relevant with the latest technologies and learning from
                experts worldwide
              </li>
              <li>
                Interact directly with internal and external clients to
                represent Modus and its values
              </li>
            </div>

            <p className="italic font-medium">Do you have what it takes?</p>
            <div className="flex justify-between items-center">
              <button className="bg-indigo-500 hover:bg-indigo-600 rounded-md text-white text-sm flex gap-x-1 p-2 items-center font-medium">
                Apply Today <ArrowRight className="h-4 w-4" />
              </button>
              <p className="italic text-sm flex items-center gap-x-3">
                Share:
                <Twitter className="icon fill-slate-400 iconhover" />
                <Facebook className="icon fill-slate-400 iconhover " />
                <LinkedinIcon className="icon fill-slate-400 iconhover" />
              </p>
            </div>
            <div className="border border-gray-200 w-full" />
            <h1 className="text-black font-semibold text-lg py-2">
              Related Jobs
            </h1>
            {/* box part */}
            {/* box1 */}
            <div className=" border cursor-pointer rounded-sm  shadow-md px-4 py-3 md:flex md:justify-between md:items-center space-y-4">
              <div className="flex items-center gap-x-3 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcKtQGH9nj__y8iYu0zosMR-08BYx-qQtaccd7uW4gv7Z323A9P7dEADBi9RcTNo4hY&usqp=CAU"
                  className="profile"
                />
                <h1
                  className="text-black   font-medium text-lg "
                  onClick={handleRouter}
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
                  onClick={handleRouter}
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
                  onClick={handleRouter}
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
          {/* right side */}
          <div className="hidden md:inline md:w-[30%]">
            <JobPostBox />
          </div>
        </div>
      </div>
    </main>
  );
}

export default jobpost;
