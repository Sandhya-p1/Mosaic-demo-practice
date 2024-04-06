import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { CheckCircleIcon, File, GitMerge, List, User } from "lucide-react";
function tabs() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="w-full overflow-auto  ">
        <Nav />
        <div className="px-4 py-7 flex flex-col gap-y-7">
          <h1 className="text-3xl font-bold">Tabs ✨ </h1>
          <hr />
          {/* Simple */}
          <h1 className="text-2xl font-bold">Simple</h1>
          <div className="space-y-3">
            <div className="flex items-center cursor-pointer gap-x-5 text-slate-500 font-medium">
              <h1 className="text-indigo-500">Account</h1>
              <h1>Notifications</h1>

              <h1>Integrations</h1>
              <h1>Plans</h1>
              <h1>Billing</h1>
            </div>
            <hr />
          </div>
          {/* Simple */}
          <h1 className="text-2xl font-bold">With Underline</h1>
          <div className="space-y-3">
            <div className="flex items-center cursor-pointer gap-x-5 text-slate-500 font-medium">
              <h1 className="text-indigo-500">Account</h1>
              <h1>Notifications</h1>

              <h1>Integrations</h1>
              <h1>Plans</h1>
              <h1>Billing</h1>
            </div>
            <div className="flex items-center">
              <div className="w-20 border-indigo-600 border" />
              <div className="w-full border" />
            </div>
          </div>
          {/* with icons */}
          <h1 className="text-2xl font-bold">With Icons</h1>
          <div className="space-y-3">
            <div className="flex items-center cursor-pointer gap-x-5 text-slate-500 font-medium">
              <h1 className="text-indigo-500 iconflex">
                <User className="h-4 w-4" /> Account
              </h1>
              <h1 className="iconflex">
                <CheckCircleIcon className="h-4 w-4" /> Notifications
              </h1>

              <h1 className="iconflex">
                <GitMerge className="h-4 w-4" /> Integrations
              </h1>
              <h1 className="iconflex">
                <List className="h-4 w-4" /> Plans
              </h1>
              <h1 className="iconflex">
                <File className="h-4 w-4" /> Billing
              </h1>
            </div>
            <hr />
          </div>
          {/* With container */}
          <h1 className="text-2xl font-bold">With Container</h1>
          <div className="flex items-center cursor-pointer gap-x-5 text-slate-500 font-medium">
            <h1 className="text-white rounded-full px-3 py-1 bg-indigo-500 ">
              Account
            </h1>
            <h1 className="optionmenu">Notifications</h1>

            <h1 className="optionmenu">Integrations</h1>
            <h1 className="optionmenu">Plans</h1>
            <h1 className="optionmenu">Billing</h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default tabs;
