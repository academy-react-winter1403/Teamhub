import { NavLink } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { LoginModalBtn } from "../common/login/LoginModalBtn"
import { DarkModeBtn } from "../common/dark-mode/DarkModeBtn"
import { CartBtn } from "../common/cart/CartBtn"

const Header = () => {
  return (

    <Fragment>
      <div className="Header h-25 flex items-center justify-around z-100">
        
        <div className="logo flex  font-semibold items-center">
          <img className="ml-2 w-10" src="./logo.svg" alt="" />
          هگزا اسکواد
        </div>

        <div className="top-menu flex gap-12 text-sm">
          <NavLink to="" className="">
            دوره ها
          </NavLink>
          <NavLink to="" >
            اساتید
          </NavLink>
          <NavLink to="" >
            ارتباط با ما
          </NavLink>
          <NavLink to="" >
            اخبار مقالات
          </NavLink>
        </div>

        <div className="flex gap-5 items-center">
          <DarkModeBtn/>

          <CartBtn/>

          <LoginModalBtn/>
        </div>

      </div>

    </Fragment>
  )
}

export {Header}