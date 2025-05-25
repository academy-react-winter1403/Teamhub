import { getFunc } from "./../Get";
import { PaginatedResponse, Comment } from "./../../types/panel";

export const getMyCoursesComments = async (): Promise<
  PaginatedResponse<Comment>
> => {
  try {
    const response = await getFunc<PaginatedResponse<Comment>>(
      "/SharePanel/GetMyCoursesComments"
    );
    return response;
  } catch (error) {
    console.error("Error fetching course comments:", error);
    throw error;
  }
};
