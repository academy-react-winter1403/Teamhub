import { Fragment } from "react/jsx-runtime"

const Header = () => {
  return (
    <Fragment>
      <div className="Header flex gap-70 z-100">
        <div className="logo flex">
          <img className="ml-2" src="./Group 33.png" alt="" />
          هگزا اسکواد
        </div>
        <ul className="top-menu flex gap-12 font-light">
          <li>دوره ها</li>
          <li>اساتید</li>
          <li>ارتباط با ما</li>
          <li>اخبار مقالات</li>
        </ul>
      </div>

    </Fragment>
  )
}

export {Header}