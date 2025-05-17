import { Link } from "react-router-dom";
import DarkLogo from "../../../assets/Team-hub.svg";

const HeaderLogo = () => {
  return (
    <Link to="/" className="logo flex  font-semibold items-center">
      <img className="ml-2 w-50" src={DarkLogo} alt="" />
    </Link>
  );
};

export default HeaderLogo;
