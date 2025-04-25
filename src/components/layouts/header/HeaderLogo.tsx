import { Link } from "react-router-dom";
import LightLogo from "../../../assets/icons/TeamHub-light.svg";

const HeaderLogo = () => {
  return (
    <Link to="/" className="logo flex  font-semibold items-center">
      <img className="ml-2 w-50" src={LightLogo} alt="Teamhub" />
    </Link>
  );
};

export default HeaderLogo;
