import { useEffect, useState } from "react";
import axios from "axios";
import ReportCard from "../func/ReportCard";

const LandingReport = () => {
  const [data, setData] = useState<{
    teacherCount: number;
    studentCount: number;
    courseCount: number;
    newsCount: number;
  } | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/Home/LandingReport`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div className="flex justify-evenly">
      {data && (
        <>
          <ReportCard
            title="مدرس مجرب"
            count={data.teacherCount}
            image="./teachersIcon.svg"
          />
          <ReportCard
            title="نفر دانشجو"
            count={data.studentCount}
            image="./studentIcon.svg"
          />
          <ReportCard
            title="ساعت اموزش"
            count={data.courseCount}
            image="./watchIcon.svg"
          />
          <ReportCard
            title="اخبار"
            count={data.newsCount}
            image="./teachersIcon.svg"
          />
        </>
      )}
    </div>
  );
};

export default LandingReport;
