import { getFunc } from "./../Get";
import { PaginatedResponse, Course } from "./../../types/panel";

export const getMyFavoriteCourses = async (): Promise<
  PaginatedResponse<Course>
> => {
  try {
    const response = await getFunc<PaginatedResponse<Course>>(
      "/SharePanel/GetMyFavoriteCourses"
    );
    return response;
  } catch (error) {
    console.error("Error fetching favorite courses:", error);
    throw error;
  }
};
