import { getFunc } from "../Get";

interface MyFavoriteNewsData {
  myFavoriteNews: [];
  totalCount: number;
}

export const GetFavoriteNews = async (): Promise<MyFavoriteNewsData | null> => {
  try {
    const response = await getFunc("/SharePanel/GetMyFavoriteNews");
    if (!response) {
      throw new Error("No data recived from api");
    }
    return response as MyFavoriteNewsData;
  } catch (error) {
    console.error("Error fetching myFavoriteNews info:", error);
    return null;
  }
};
