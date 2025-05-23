// import { Fragment } from "react";
import Drawer from "../components/layouts/userPanel/Drawer";
import { Outlet } from "react-router-dom";
import PanelNavbar from "../components/userPanel/ui/PanelNavbar";
// import UserPanel from "../userPanel/UserPanel";

const UserRoot = () => {
  return (
    <div className="w-full h-screen flex ">
      <Drawer />
      <div className="w-9/12 h-full flex items-center justify-evenly">
        <div className="w-9/10 h-11/12 flex flex-col ">
          {/* header */}
          <PanelNavbar />
          {/* divider */}
          <div className="divider"></div>
          {/* content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserRoot;
