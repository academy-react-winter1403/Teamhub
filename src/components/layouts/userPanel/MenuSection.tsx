import { Link } from "react-router-dom";

const MenuSection = () => {
  return (
    <>
      <ul className="menu text-white w-full flex flex-col gap-2">
        <li className="rounded-lg hover:bg-violet-600 focus-within:bg-violet-600 transition-colors">
          <Link
            to="/userPanel"
            className="block w-full px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            داشبورد
          </Link>
        </li>
        <li className="rounded-lg hover:bg-violet-600 focus-within:bg-violet-600 transition-colors">
          <Link
            to="ProfileEdit"
            className="block w-full px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            اطلاعات کاربری
          </Link>
        </li>
        <li className="rounded-lg hover:bg-violet-600 focus-within:bg-violet-600 transition-colors">
          <Link
            to="myCourses"
            className="block w-full px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            دوره‌های من
          </Link>
        </li>
        <li className="rounded-lg hover:bg-violet-600 focus-within:bg-violet-600 transition-colors">
          <Link
            to="reserveCourses"
            className="block w-full px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            دوره‌های رزرو شده
          </Link>
        </li>
        <li className="rounded-lg hover:bg-violet-600 focus-within:bg-violet-600 transition-colors">
          <Link
            to="myComments"
            className="block w-full px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            دیدگاه‌های من
          </Link>
        </li>
        <li className="rounded-lg hover:bg-violet-600 focus-within:bg-violet-600 transition-colors">
          <Link
            to="favorite"
            className="block w-full px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            علاقه‌مندی‌ها
          </Link>
        </li>
        <li className="rounded-lg hover:bg-violet-600 focus-within:bg-violet-600 transition-colors">
          <Link
            to="security"
            className="block w-full px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            امنیت
          </Link>
        </li>
        <li className="rounded-lg hover:bg-red-600 focus-within:bg-red-600 transition-colors">
          <button className="block w-full text-right px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
            خروج از حساب
          </button>
        </li>
      </ul>
    </>
  );
};

export default MenuSection;
