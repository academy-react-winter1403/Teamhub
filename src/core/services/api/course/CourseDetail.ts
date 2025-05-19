import http from "../../interceptor";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getCourseDetail = async (id: string) => {
  try {
    const result = await http.get(
      URL + "/Home/GetCourseDetails?CourseId=" + id
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
