import SideProfile from "./SideProfile";
import SideMenu from "./SideMenu";
import SideFooter from "./SideFooter";

const Drawer = () => {
  return (
    <>
      <div className="w-3/12 h-full flex flex-col justify-around bg-[#2196F3] text-white">
        <div className="w-full h-1/8 flex flex-col justify-evenly items-center">
          <div className="w-8/10 h-2/3 flex justify-evenly items-center ">
            <SideProfile />
            <button className="btn btn-error"></button>
          </div>
        </div>
        <div className="w-full h-5/8 flex flex-col items-center justify-start">
          <SideMenu />
        </div>
        <SideFooter />
      </div>
    </>
  );
};

export default Drawer;
