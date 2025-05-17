import { Link } from "react-router-dom";
// import LightLogo from "../../../assets/icons/TeamHub-light.svg";

const LogoSection = () => {
  return (
    <div className=" flex w-1/2 items-center justify-center py-2">
      <Link to="/" className="text-center flex ">
        <span className="bg-[#2196f3] rounded-sm px-1 font-semibold text-center">
          Hub
        </span>
        <span className="px-0.5 font-semibold text-center text-black">
          Team
        </span>
      </Link>
    </div>
  );
};

export default LogoSection;
