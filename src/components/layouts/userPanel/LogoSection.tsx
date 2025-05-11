import LightLogo from "../../../assets/icons/TeamHub-light.svg";

const LogoSection = () => {
  return (
    <div className=" flex w-1/2 items-center justify-center py-2">
      <img src={LightLogo} alt="teamhub" className="w-1/2" />
      <span> پنل کاربری</span>
    </div>
  );
};

export default LogoSection;
