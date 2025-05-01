import { Fragment } from "react/jsx-runtime";
import { DarkModeBtn } from "../../common/buttons/DarkModeBtn";
import { CartBtn } from "../../common/buttons/CartBtn";
import { NavBar } from "./NavBar";
import Login from "../../common/buttons/Login";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <Fragment>
      <div className="w-full absolute Header h-25 flex items-center justify-around z-100 ">
        <HeaderLogo />
        <NavBar />
        <div className="flex gap-5 items-center">
          <DarkModeBtn />
          <CartBtn />
          <Login />
        </div>
      </div>
    </Fragment>
  );
};

export { Header };
