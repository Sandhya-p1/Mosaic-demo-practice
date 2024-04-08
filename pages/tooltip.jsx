import React from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import { CircleAlert } from "lucide-react";
import { Tooltip } from "@material-tailwind/react";

function tooltip() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-6 py-8 flex flex-col gap-y-6">
          <h1 className="text-3xl font-bold"> ToolTip ✨ </h1>
          <hr />
          <h1 className="text-2xl font-bold"> ToolTip Types </h1>

          <div className="flex flex-wrap gap-6 items-center text-slate-400 font-medium">
            <div className="iconflex">
              <Tooltip
                placement="top"
                content="Just a Tip"
                className="tooltipmsg"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Label White</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="top"
                content="Just a Tip"
                className="bg-slate-700 text-slate-200 rounded-md text-xs p-2"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Label Dark</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="top"
                content="Excepteur sint occaecat cupidata non proident, sunt in.
                "
                className="tooltipmsg w-48"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Basic White</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="top"
                content="Excepteur sint occaecat cupidata non proident, sunt in."
                className="bg-slate-700 text-slate-200 rounded-md text-xs w-48 p-2"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Basic Dark</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="top"
                content="Excepteur sint occaecat cupidata non proident, sunt in.
                "
                className="border shadow-md text-base bg-white transition-all ease-out duration-75 text-slate-500 p-2 rounded-md w-60"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Large White</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="top"
                content="Excepteur sint occaecat cupidata non proident, sunt in."
                className="border shadow-md text-base bg-slate-700 text-slate-200 transition-all ease-out duration-75  p-2 rounded-md w-60"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Large White</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="top"
                content={
                  <div className="space-y-1  text-xs">
                    <h1 className="text-black font-medium">
                      Let's Talk Paragraph
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                }
                className="border shadow-md text-base bg-white transition-all ease-out duration-75 text-slate-500 p-2 rounded-md w-60"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Rich White</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="top"
                content={
                  <div className="space-y-1  text-xs">
                    <h1 className=" font-medium text-slate-200">
                      Let's Talk Paragraph
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                }
                className="border shadow-md text-base bg-slate-700 transition-all ease-out duration-75 text-slate-400 p-2 rounded-md w-60"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Rich Dark</h1>
            </div>
          </div>
          <h1 className="text-2xl font-bold "> ToolTip Position </h1>
          <div className="flex flex-wrap gap-6 items-center text-slate-400 font-medium">
            {/* Own code */}
            <div className="group relative iconflex">
              <CircleAlert className="text-white cursor-pointer fill-slate-400 h-5 w-5" />
              <span className="absolute -top-9 -left-4 scale-0 rounded text-nowrap bg-white border p-2 text-xs group-hover:scale-100  shadow-md">
                Just a tip
              </span>

              <h1>Top</h1>
            </div>
            {/* From material tailwind package */}
            <div className="iconflex">
              <Tooltip
                placement="bottom"
                content="Just a Tip"
                className="tooltipmsg"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Bottom</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="left"
                content="Just a Tip"
                className="tooltipmsg"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Left</h1>
            </div>
            <div className="iconflex">
              <Tooltip
                placement="right"
                content="Just a Tip"
                className="tooltipmsg"
              >
                <CircleAlert className="tooltipicon" />
              </Tooltip>
              <h1>Right</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default tooltip;
