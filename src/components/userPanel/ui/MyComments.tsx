import UserSearch from "./UserSearch";
import { Eye, Trash } from "lucide-react";

const comments = [
  {
    id: 366,
    title: "دوره ری‌اکت",
    category: "دوره آموزشی",
    status: "در انتظار تایید",
    time: "۱۴۰۴/۲/۲۵ , ۱۲:۲۰",
  },
  {
    id: 412,
    title: "جاوااسکریپت پیشرفته",
    category: "وب",
    status: "تایید شده",
    time: "۱۴۰۴/۳/۵ , ۱۰:۰۰",
  },
];

const MyComments = () => {
  return (
    <>
      <div className="divider divider-neutral  text-xl ">دیدگاه های من</div>
      <div className="flex flex-col">
        <div className="py-2.5">
          <UserSearch />
        </div>
        <div className="w-full rounded-xl bg-white">
          {/* هدر جدول */}
          <div className="bg-[#3F40EA] font-bold text-sm h-12 rounded-lg text-white grid grid-cols-6 items-center px-5">
            <span className="col-span-1 text-center">دیدگاه در</span>
            <span className="col-span-1 text-center">دسته‌بندی</span>
            <span className="col-span-1 text-center">وضعیت</span>
            <span className="col-span-2 text-center">زمان</span>
            <span className="col-span-1 text-center">مدیریت</span>
          </div>

          {/* ردیف‌ها با map */}
          <div className="flex flex-col gap-[17px] py-3">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-[#E8E7FF] h-12 grid grid-cols-6 items-center px-5 text-sm rounded-lg transition-transform duration-200 hover:scale-[1.01]"
              >
                <span className="col-span-1 text-center">{comment.title}</span>
                <span className="col-span-1 text-center">
                  {comment.category}
                </span>
                <span
                  className={`col-span-1 text-center font-medium ${
                    comment.status === "تایید شده"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {comment.status}
                </span>
                <span className="col-span-2 text-center text-gray-600">
                  {comment.time}
                </span>
                <span className="col-span-1 flex justify-center gap-3 text-indigo-700">
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

export default MyComments;
