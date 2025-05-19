import { getFunc } from "../Get";

interface MyFavoriteCourseData {
  favoriteCourseDto: [];
  totalCount: number;
}

export const GetMyCourses = async (): Promise<MyFavoriteCourseData | null> => {
  try {
    const response = await getFunc("/SharePanel/GetMyFavoriteCourses");
    if (!response) {
      throw new Error("No data recived from api");
    }
    return response as MyFavoriteCourseData;
  } catch (error) {
    console.error("Error fetching MyFavoriteCourses info:", error);
    return null;
  }
};
