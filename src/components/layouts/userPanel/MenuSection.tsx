import { Link } from "react-router-dom";

const MenuSection = () => {
  return (
    <>
      <ul className="menu text-white w-full flex flex-col gap-2">
        <li className="bg-violet-700 rounded-lg">
          <Link to="/userPanel">داشبورد</Link>
        </li>
        <li>
          <Link to="ProfileEdit">اطلاعات کاربری</Link>
        </li>

        <li>
          <Link to="myCourses">دوره های من</Link>
        </li>
        <li>
          <Link to="reserveCourses">دوره های رزرو شده</Link>
        </li>
        <li>
          <Link to="myComments">دیدگاه های من</Link>
        </li>
        <li>
          <Link to="favorite">علاقه مندی ها</Link>
        </li>
        <li>
          <Link to="security">امنیت</Link>
        </li>
        <li>
          <a>خروج از حساب</a>
        </li>
      </ul>
    </>
  );
};

export default MenuSection;
