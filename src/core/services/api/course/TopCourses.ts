import http from "../../interceptor";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getTopCourses = async () => {
  try {
    const result = await http.get(URL + "/Home/GetCoursesTop?Count=4");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
