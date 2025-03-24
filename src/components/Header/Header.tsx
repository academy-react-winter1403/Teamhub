import { NavLink } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { LoginModalBtn } from "../common/login/LoginModalBtn"
import { DarkModeBtn } from "../common/dark-mode/DarkModeBtn"

const Header = () => {
  return (

    <Fragment>
      <div className="Header h-25 flex items-center justify-center gap-60 z-100">
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

          <div className="indicator ">
            <span className="indicator-item h-6 w-6 bg-blue-400 rounded-2xl border-3 border-green-100 absolute top-2 right-2 text-sm text-white">2</span>
            <button className="btn bg-white h-12 w-12 rounded-3xl flex">
            <img src="./shopping-bag.svg" className="border-2 w-10 m-auto " alt="" />
            </button>
          </div>  

          <LoginModalBtn/>
        </div>

      </div>

    </Fragment>
  )
}

export {Header}