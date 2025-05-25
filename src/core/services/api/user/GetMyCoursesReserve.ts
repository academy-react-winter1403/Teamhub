import { getFunc } from "./../Get";
import { PaginatedResponse, Course } from "./../../types/panel";

export const getMyCoursesReserve = async (): Promise<
  PaginatedResponse<Course>
> => {
  try {
    const response = await getFunc<PaginatedResponse<Course>>(
      "/SharePanel/GetMyCoursesReserve"
    );
    return response;
  } catch (error) {
    console.error("Error fetching reserved courses:", error);
    throw error;
  }
};
