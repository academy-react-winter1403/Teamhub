import { getFunc } from "../Get";

interface MyCourseData {
  listOfMyCourses: any[];
  totalCount: number;
}

interface ApiResponse {
  data: MyCourseData | { data: MyCourseData };
}

export const GetMyCourses = async (): Promise<MyCourseData | null> => {
  try {
    const response = (await getFunc(
      "/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query="
    )) as ApiResponse;
    console.log("Raw Api Response: ", response);
    if (!response || !response.data) {
      throw new Error("No data recived from api");
    }
    const MyCourseData =
      "data" in response.data ? response.data.data : response.data;
    console.log("Extracted profile data:", MyCourseData);
    return MyCourseData as MyCourseData;
  } catch (error) {
    console.error("Error fetching allMyCourses info:", error);
    return null;
  }
};
