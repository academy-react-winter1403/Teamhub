import http from "../../interceptor";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getLandingReport = async () => {
  try {
    const result = await http.get(URL + "/Home/LandingReport");
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
