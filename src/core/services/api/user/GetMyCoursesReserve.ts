import { getFunc } from "../Get";

interface MyCoursesReserveData {
  listOfMyCourses: [];
  totalCount: number;
}

export const GetMyCourses = async (): Promise<MyCoursesReserveData | null> => {
  try {
    const response = await getFunc("/SharePanel/GetMyCoursesReserve");
    if (!response) {
      throw new Error("No data recived from api");
    }
    return response as MyCoursesReserveData;
  } catch (error) {
    console.error("Error fetching MyCoursesReserveData info:", error);
    return null;
  }
};
