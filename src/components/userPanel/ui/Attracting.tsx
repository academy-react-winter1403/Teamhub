import { GraduationCap, ShoppingBasket } from "lucide-react";
import { useMyCoursesQuery } from "../../../core/hooks/query/useMyCoursesQuery";
import { useMyCoursesReserveQuery } from "../../../core/hooks/query/useMyCoursesReserveQuery";
import { useProfileQuery } from "../../../core/hooks/query/useProfileQuery";

const Attracting = () => {
  const { data: profile, isLoading: isProfileLoading } = useProfileQuery();
  const { data: courses, isLoading: isCoursesLoading } = useMyCoursesQuery({
    PageNumber: 1,
    RowsOfPage: 10,
    SortType: "LastUpdate",
    SortingCol: "DESC",
  });
  const { data: reservedCourses, isLoading: isReservedLoading } =
    useMyCoursesReserveQuery();

  return (
    <div className="w-full py-8 flex justify-between">
      {/* تعداد دوره‌ها */}
      <div className="w-1/2 flex justify-around">
        <div className="relative w-50 h-20 bg-gradient-to-l from-violet-300 to-violet-400 rounded-lg shadow-lg flex flex-col items-start justify-around px-2.5">
          <h4 className="">
            {isCoursesLoading
              ? "..."
              : courses?.totalCount === 0
              ? "شما هنوز در دوره‌ای شرکت نکرده‌اید"
              : `${courses?.totalCount} دوره`}
          </h4>
          <span className="">شرکت کرده‌اید</span>
          <GraduationCap
            className="absolute size-15 text-black -top-7 left-2.5 bg-gradient-to-t from-violet-300 to-violet-500 rounded-full p-2.5"
            strokeWidth={1}
          />
        </div>
        <div className="relative w-50 h-20 bg-gradient-to-l from-violet-300 to-violet-400 rounded-lg shadow-lg flex flex-col items-start justify-around px-2.5">
          <h4 className="">
            {isReservedLoading
              ? "..."
              : reservedCourses?.totalCount === 0
              ? "شما هنوز دوره‌ای رزرو نکرده‌اید"
              : `${reservedCourses?.totalCount} دوره`}
          </h4>
          <span className="">رزرو کرده‌اید</span>
          <ShoppingBasket
            className="absolute size-15 text-black -top-7 left-2.5 bg-gradient-to-t from-violet-300 to-violet-500 rounded-full p-2.5"
            strokeWidth={1}
          />
        </div>
      </div>
      {/* پیشرفت پروفایل */}
      <div className="w-1/2 flex justify-center gap-x-4 items-center">
        <span className="">
          {isProfileLoading
            ? "در حال بارگذاری..."
            : profile?.profileCompletionPercentage < 80
            ? "برای ثبت‌نام در دوره باید ۸۰ درصد پروفایل خود را تکمیل کنید"
            : "پروفایل شما آماده ثبت‌نام است"}
        </span>
        <div
          className="radial-progress bg-gradient-to-l from-violet-300 to-violet-500 text-primary-content"
          style={
            {
              "--value": profile?.profileCompletionPercentage || 0,
            } as React.CSSProperties
          }
          aria-valuenow={profile?.profileCompletionPercentage || 0}
          role="progressbar"
        >
          {profile?.profileCompletionPercentage || 0}%
        </div>
      </div>
    </div>
  );
};

export default Attracting;
