import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetail } from "../../../core/services/api/course/CourseDetail";
import http from "../../../core/services/interceptor";

const useCourseDetails = () => {
  const [details, setDetails] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [teacher, setTeacher] = useState<any>([]);
  const { id } = useParams();

  const getCourseData = async (courseId: string) => {
    try {
      setLoading(true);
      const response = await getCourseDetail(courseId);
      setDetails(response);
      console.log(response);

      if (response?.teacherId && Number.isInteger(response.teacherId)) {
        await getTeacherData(response.teacherId);
      } else {
        console.warn("No valid teacherId found in course details");
      }
    } catch (err) {
      setError("خطا در دریافت اطلاعات دوره");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      getCourseData(id);
    }
  }, [id]);

  const getTeacherData = async (teacherId: number) => {
    try {
      const teachRes = await http.get(
        `/Home/GetTeacherDetails?TeacherId=${teacherId}`
      );
      setTeacher(teachRes);
      // console.log("teacher id is: "+teacherId);
    } catch (err) {
      console.error(err);
    }
  };

  // favorite
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavorite= async() => {
    try {
      await http.post(
        "/Course/AddCourseFavorite",
        { courseId: id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setIsFavorite(true); // تغییر استایل بدون reload
    } catch (err) {
      console.error("خطا در افزودن به علاقه‌مندی‌ها", err);
    }
  }
  useEffect(() => {
    if (details?.isUserFavorite !== undefined) {
      setIsFavorite(details.isUserFavorite);
    }
  }, [details?.isUserFavorite]);


  return { details, loading, error, teacher, isFavorite, onFavorite};
};
export { useCourseDetails };
