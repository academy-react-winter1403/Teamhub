import { NavLink } from "react-router-dom";
import { HeaderMockData } from "../../../core/constants/mock/HeaderMockData";

interface MenuItem {
  title: string;
  path: string;
}

const NavBar = () => {
  return (
    <div className="top-menu flex gap-12 text-sm">
      {HeaderMockData.map((item: MenuItem, index: number) => (
        <NavLink to={item.path} key={index} className="text-lg px-3 py-2 rounded-3xl hover:bg-blue-50 ">
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export { NavBar };
