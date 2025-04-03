import { Fragment } from "react/jsx-runtime";
import { LoginModalBtn } from "../../loginModal/LoginModalBtn";
import { DarkModeBtn } from "../../common/DarkModeBtn";
import { CartBtn } from "../../common/cart/CartBtn";
import { NavBar } from "./NavBar";

const Header = () => {
  return (
    <Fragment>
      <div className="Header h-25 w-full flex items-center justify-around z-100">
        <div className="logo flex  font-semibold items-center">
          <img className="ml-2 w-10" src="./logo.svg" alt="" />
          هگزا اسکواد
        </div>

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
