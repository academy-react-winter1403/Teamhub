import { getFunc } from "../Get";

export const getTeachers = async () => {
  try {
    const response = await getFunc("/Home/GetTeachers");
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
