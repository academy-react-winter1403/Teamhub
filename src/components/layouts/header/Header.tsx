import { Fragment } from "react/jsx-runtime";
import { LoginModalBtn } from "../../modals/login/LoginModalBtn";
import { DarkModeBtn } from "../../common/buttons/DarkModeBtn";
import { CartBtn } from "../../common/buttons/CartBtn";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg"

const Header = () => {
  return (
    <Fragment>
      <div className="Header h-25 w-full flex items-center justify-around z-100">
        <Link to="/" className="logo flex  font-semibold items-center">
          <img className="ml-2 w-10" src={logo} alt="" />
          هگزا اسکواد
        </Link>

        <NavBar />

        <div className="flex gap-5 items-center">
          <DarkModeBtn />
          <CartBtn />
          <LoginModalBtn />
        </div>
      </div>
    </Fragment>
  );
};

export { Header };
