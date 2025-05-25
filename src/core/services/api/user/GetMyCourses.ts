import { getFunc } from "./../Get";
import { PaginatedResponse, Course } from "./../../types/panel";

export const getMyCourses = async (params: {
  PageNumber: number;
  RowsOfPage: number;
  SortingCol?: string;
  SortType?: string;
  Query?: string;
}): Promise<PaginatedResponse<Course>> => {
  try {
    const response = await getFunc<PaginatedResponse<Course>>(
      "/SharePanel/GetMyCourses",
      params
    );
    return response;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};
