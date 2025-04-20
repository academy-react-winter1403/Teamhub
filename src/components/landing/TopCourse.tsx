import { useEffect, useState } from "react";
import { CardViewOne } from "../cards/courseCards/CardViewOne";
import SeeAllBtn from "../common/buttons/SeeAllBtn";
import { getTopCourses } from "../../core/services/api/TopCourses";
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
    <div className="w-9/10 h-147 items-center flex flex-col justify-around mb-20">
      <div className="flex flex-col justify-around">
        <h4 className="font-black text-4xl">دوره های آموزشی</h4>
        <span className="w-full h-1 bg-[#2196F3] bg-linear-to-l from-white to-[#2196F3]" />
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
