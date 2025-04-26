import HeaderLogo from "../../layouts/header/HeaderLogo";

const SideFooter = () => {
  return (
    <div className="w-full h-1/8 flex items-center justify-evenly">
      <div className="w-8/10 h-2/3 flex items-center justify-between">
        <div className="skeleton">
          <HeaderLogo />
        </div>
        <button className="btn btn-error"></button>
      </div>
    </div>
  );
};

export default SideFooter;
