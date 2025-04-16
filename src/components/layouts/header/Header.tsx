import { Fragment } from "react/jsx-runtime";
// import { LoginModalBtn } from "../../modals/login/LoginModalBtn";
import { DarkModeBtn } from "../../common/buttons/DarkModeBtn";
import { CartBtn } from "../../common/buttons/CartBtn";
import { NavBar } from "./NavBar";
import Login from "../../common/buttons/Login";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <Fragment>
      <div className="Header h-25 w-full flex items-center justify-around z-100">
        <HeaderLogo />

        <NavBar />

        <div className="flex gap-5 items-center">
          <DarkModeBtn />
          <CartBtn />
          {/* <LoginModalBtn /> */}
          <Login />
        </div>
      </div>
    </Fragment>
  );
};

export { Header };
