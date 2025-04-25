import http from "../../interceptor";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getTopCourseList = async () => {
  try {
    const result = await http.get(URL + "/Home/GetCoursesTop?Count=7");
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};
