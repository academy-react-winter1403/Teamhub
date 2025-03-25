import { NavLink } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

const NavBar = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export {NavBar}