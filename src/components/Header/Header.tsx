import { NavLink } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

const Header = () => {
  return (
<Fragment>
      <div className="Header flex items-center justify-center gap-60">
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

        <div className="flex gap-5">
          <div className="">

          </div>

          <div className="shopping-bag bg-emerald-200 h-12 w-12 rounded-3xl flex relative">
            <img src="./shopping-bag.svg" className="w-5 m-auto " alt="" />
            <div className="h-4 w-4 bg-red-400 rounded-2xl border-2 absolute top-0 right-0"></div>
          </div>

          <div className="btn bg-blue-400 w-34 h-12 rounded-3xl text-white">ورود به حساب</div>
        </div>

      </div>

    </Fragment>
  )
}

export {Header}