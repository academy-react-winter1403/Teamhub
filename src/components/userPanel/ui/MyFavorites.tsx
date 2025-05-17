import { Eye, Trash } from "lucide-react";
import UserSearch from "./UserSearch";

const favorites = [
  {
    id: 1,
    title: "دوره جامع ری‌اکت",
    category: "فرانت‌اند",
    teacher: "استاد جعفری",
    date: "۱۴۰۴/۰۳/۰۱",
    price: "۲,۴۰۰,۰۰۰ تومان",
  },
  {
    id: 2,
    title: "جاوااسکریپت پیشرفته",
    category: "وب",
    teacher: "علی صادقی",
    date: "۱۴۰۴/۰۴/۱۵",
    price: "۳,۱۰۰,۰۰۰ تومان",
  },
];

const MyFavorites = () => {
  return (
    <>
      <div className="divider divider-neutral  text-xl ">علاقه مندی</div>
      <div className="flex flex-col">
        <div className="py-2.5">
          <UserSearch />
        </div>
        <div className="w-full rounded-xl bg-white">
          {/* هدر */}
          <div className="bg-[#3F40EA] h-12 rounded-lg font-bold text-white text-sm grid grid-cols-6 items-center px-5">
            <span className="text-center">نام دوره</span>
            <span className="text-center">دسته‌بندی</span>
            <span className="text-center">مدرس</span>
            <span className="text-center">تاریخ شروع</span>
            <span className="text-center">قیمت</span>
            <span className="text-center">مدیریت</span>
          </div>

          {/* ردیف‌ها */}
          <div className="flex flex-col py-3">
            {favorites.map((course) => (
              <div
                key={course.id}
                className="bg-[#E8E7FF] grid grid-cols-6 items-center px-5 py-3 text-sm transition-transform duration-200 hover:scale-[1.01] mb-[17px] rounded-lg"
              >
                <span className="text-center">{course.title}</span>
                <span className="text-center">{course.category}</span>
                <span className="text-center">{course.teacher}</span>
                <span className="text-center text-gray-600">{course.date}</span>
                <span className="text-center text-indigo-800 font-semibold">
                  {course.price}
                </span>
                <span className="flex justify-center gap-3 text-indigo-700">
                  <Eye className="cursor-pointer hover:scale-110 transition" />
                  <Trash className="cursor-pointer hover:scale-110 transition text-red-500" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFavorites;
