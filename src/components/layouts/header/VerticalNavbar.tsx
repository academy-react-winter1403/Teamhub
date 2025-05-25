import { NavLink } from "react-router-dom";
import { HeaderMockData } from "../../../core/constants/mock/HeaderMockData";
interface MenuItem {
  title: string;
  path: string;
}

const VerticalNavbar = () => {
  return (
    <div className="top-menu flex flex-col justify-right text-sm ">
      {HeaderMockData.map((item: MenuItem, index: number) => (
        <NavLink to={item.path} key={index} 
          className={({isActive})=> isActive 
          ? "text-lg px-3 py-2 border-b-3 border-blue-400" 
          : "text-lg px-3 py-2 rounded-3xl hover:bg-blue-50"
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>  
  )
}

export default VerticalNavbar