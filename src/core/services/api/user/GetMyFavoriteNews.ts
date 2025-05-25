import { getFunc } from "./../Get";
import { PaginatedResponse, News } from "./../../types/panel";

export const getMyFavoriteNews = async (): Promise<PaginatedResponse<News>> => {
  try {
    const response = await getFunc<PaginatedResponse<News>>(
      "/SharePanel/GetMyFavoriteNews"
    );
    return response;
  } catch (error) {
    console.error("Error fetching favorite news:", error);
    throw error;
  }
};
