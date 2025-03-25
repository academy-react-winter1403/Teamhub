import { NavLink } from "react-router-dom"
import { HeaderMockData } from "../../core/constants/common/HeaderMockData"

interface MenuItem {
    title: string;
    path: string;
}

const NavBar = () => {
  return (
    <div className="top-menu flex gap-12 text-sm">
        {HeaderMockData.map((item: MenuItem,index: number)=>(
                <NavLink to={item.path} key={index} className="">
                     {item.title}
                </NavLink>
        ))}
    </div>
  )
}

export {NavBar}