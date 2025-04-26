// components/SideMenu.tsx
import { Link, useNavigate } from "react-router-dom";
import { PanelMockData } from "../../../core/constants/mock/UserPanel";

// آرایه آیکون‌ها با آیکون تکراری برای آیتم جدید
const icons = [
  "./element-4.svg", // داشبورد
  "./book.svg", // دوره‌های من
  "./heart.svg", // ذخیره شده
  "./messages-2.svg", // نظرات ثبت شده
  "./user-edit.svg", // ویرایش پروفایل
  "./logout.svg", // خروج از حساب
  "./logout.svg", // عملیات جدید (آیکون تکراری)
];

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full  flex flex-col justify-evenly items-center"
      style={{ direction: "rtl" }}
    >
      <ul className="menu h-full w-9/10 flex justify-evenly">
        {PanelMockData.map((item, index) => (
          <li
            key={index}
            className="w-full h-14 cursor-pointer bg-no-repeat bg-right bg-auto flex justify-evenly items-start pr-7"
            style={{ backgroundImage: `url(${icons[index] || ""})` }}
          >
            {item.onClick ? (
              <button
                onClick={() => {
                  if (item.onClick) {
                    item.onClick(); // فقط اگر onClick وجود داشته باشد فراخوانی می‌شود
                  }
                  if (item.title === "خروج از حساب") {
                    navigate("/login");
                  }
                  if (item.title === "عملیات جدید") {
                    console.log("ریدایرکت یا عملیات خاص برای عملیات جدید");
                    // مثال: navigate("/some-page");
                  }
                }}
                className="w-full h-full flex items-center justify-end pr-7"
              >
                {item.title}
              </button>
            ) : (
              <Link
                to={item.path}
                className="w-full h-full flex items-center justify-end pr-7"
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
