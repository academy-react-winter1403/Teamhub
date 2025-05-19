import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/layouts/userPanel/Drawer";
import Skelet from "../components/layouts/userPanel/Skelet";

// console.log(Date());

const UserRoot = () => {
  return (
    <div className="w-full h-screen flex bg-[#e9e8ff] items-center justify-evenly ">
      <div className="w-100 h-21/22 flex">
        {/* Sidebar */}
        <Drawer />
      </div>
      <div className="w-300 h-21/22 flex flex-col ">
        <div className="w-full h-1/12 rounded-3xl flex">
          {/* Top Navigation */}
          <Skelet />
        </div>
        <div className="w-full h-11/12 rounded-2xl bg-[#fbfbff] p-4 overflow-scroll">
          {/* Main Content */}
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity text-success w-30 "></span>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default UserRoot;
