import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="logo flex  font-semibold items-center">
      <img className="ml-2 w-10" src="./logo.svg" alt="" />
      هگزا اسکواد
    </Link>
  );
};

export default HeaderLogo;
