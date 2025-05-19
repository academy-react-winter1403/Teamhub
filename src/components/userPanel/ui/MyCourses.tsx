import UserSearch from "./UserSearch";
import { Eye, Trash } from "lucide-react";
import img from "../../../assets/images/CourseImg.svg";
// import { GetMyCourses } from "../../../core/services/api/user/GetMyCourses";

const favoriteCourses = [
  {
    id: 1,
    title: "دوره آموزش جامع JS",
    teacher: "دکتر محمدحسین بحرالعلومی",
    startDate: "۱۴۰۳/۰۳/۱۸",
    price: "۲,۵۰۰,۰۰۰",
    status: "در انتظار تایید",
    avatar: "./CourseImg", // مسیر تصویر فرضی

    // avatar: "/images/js-course.png", // مسیر تصویر فرضی
  },
  {
    id: 2,
    title: "دوره آموزش جامع JS",
    teacher: "دکتر محمدحسین بحرالعلومی",
    startDate: "۱۴۰۳/۰۳/۱۸",
    price: "۲,۵۰۰,۰۰۰",
    status: "تایید شده",
    avatar: "./CourseImg", // مسیر تصویر فرضی

    // avatar: "/images/js-course.png",
  },
];

const MyCourses = () => {
  return (
    <>
      <div className="divider divider-neutral  text-xl ">دوره های من</div>
      <div className="flex flex-col">
        <div className="py-2.5">
          <UserSearch />
        </div>
        <div className="w-full rounded-xl bg-white">
          {/* هد */}
          <div className="bg-[#3f40ea] h-12 rounded-lg text-white font-bold text-sm grid grid-cols-7 items-center px-5">
            <span className="text-center">تصویر</span>
            <span className="text-center">نام دوره</span>
            <span className="text-center">مدرس دوره</span>
            <span className="text-center">تاریخ شروع</span>
            <span className="text-center">قیمت (تومان)</span>
            <span className="text-center">وضعیت</span>
            <span className="text-center">مدیریت</span>
          </div>

          {/* آیتم‌ها */}
          <div className="flex flex-col py-3">
            {favoriteCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#E8E7FF] grid grid-cols-7 items-center px-5 py-3 text-sm rounded-xl mb-4 transition-transform duration-200 hover:scale-[1.01]"
              >
                {/* عنوان + آواتار */}
                <div className="flex items-center gap-2 justify-center">
                  <img src={img} alt="" className="rounded-lg h-8 w-16" />
                </div>
                <span>{course.title}</span>

                <span className="text-center">{course.teacher}</span>
                <span className="text-center">{course.startDate}</span>
                <span className="text-center">{course.price}</span>

                {/* وضعیت با رنگ */}
                <span
                  className={`text-center font-medium ${
                    course.status === "تایید شده"
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  {course.status}
                </span>

                {/* آیکن‌ها */}
                <span className="flex justify-center gap-3">
                  <Eye className="text-indigo-700 cursor-pointer hover:scale-110 transition" />
                  <Trash className="text-red-500 cursor-pointer hover:scale-110 transition" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
