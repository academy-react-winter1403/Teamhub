import { useEffect, useState } from "react";
import { CardViewOne } from "../cards/courseCards/CardViewOne";
import SeeAllBtn from "../common/buttons/SeeAllBtn";
import { getTopCourses } from "../../core/services/api/course/TopCourses";
import type { TopCourse } from "../../core/services/types/TopCourse";

const TopCourse = () => {
  const [courseTop, setCourseTop] = useState<TopCourse[]>([]);

  const getTopCourseData = async () => {
    const response = await getTopCourses();
    const dataArray = Object.values(response);
    setCourseTop(dataArray as TopCourse[]);
  };

  useEffect(() => {
    getTopCourseData();
  }, []);

  return (
    <div className=" h-147 items-center flex flex-col justify-around mb-20">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 relative">
          <span className="relative z-10">دوره های آموزشی</span>
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-100 via-blue-400 to-gray-100 transform -translate-y-2 -mb-4"></span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-around  w-full">
        {courseTop.map((course, index) => (
          <CardViewOne
            key={index}
            title={course.title}
            teacherName={course.teacherName}
            cost={course.cost}
          />
        ))}
      </div>

      <SeeAllBtn />
    </div>
  );
};

export default TopCourse;
