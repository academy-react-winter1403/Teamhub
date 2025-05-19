import { getFunc } from "../Get";

interface MyCourseCommentData {
  myCommentsDtos: [];
  totalCount: number;
}

export const GetMyCoursesComment =
  async (): Promise<MyCourseCommentData | null> => {
    try {
      const response = await getFunc("/SharePanel/GetMyCoursesComments");
      if (!response) {
        throw new Error("No data recived from api");
      }
      return response as MyCourseCommentData;
    } catch (error) {
      console.error("Error fetching MyCourseCommentData info:", error);
      return null;
    }
  };
