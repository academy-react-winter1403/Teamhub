import { Fragment } from "react/jsx-runtime";
import { DarkModeBtn } from "../../common/buttons/DarkModeBtn";
import { CartBtn } from "../../common/buttons/CartBtn";
import { NavBar } from "./NavBar";
import Login from "../../common/buttons/Login";
import HeaderLogo from "./HeaderLogo";
import VerticalNavbar from "./VerticalNavbar";

const Header = () => {
  return (
    <Fragment>
      <div className="w-full absolute Header h-25 flex items-center justify-around z-100 ">
        <div className="hamburger-swap flex lg:hidden">
          <details className="dropdown">
            <summary className="btn rounded-2xl m-1">
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><VerticalNavbar/></li>
            </ul>
          </details>
        </div>
        
        <HeaderLogo />

        <div className="horizonal-nav hidden lg:block">
          <NavBar />
        </div>
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
