import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="logo flex  font-semibold items-center">
      <img className="ml-2 w-50" src="./TeamHub-light.svg" alt="" />
    </Link>
  );
};

export default HeaderLogo;
