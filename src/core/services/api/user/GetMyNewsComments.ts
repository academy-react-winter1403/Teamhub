import { getFunc } from "./../Get";
import { PaginatedResponse, Comment } from "./../../types/panel";

export const getMyNewsComments = async (): Promise<
  PaginatedResponse<Comment>
> => {
  try {
    const response = await getFunc<PaginatedResponse<Comment>>(
      "/SharePanel/GetMyNewsComments"
    );
    return response;
  } catch (error) {
    console.error("Error fetching news comments:", error);
    throw error;
  }
};
