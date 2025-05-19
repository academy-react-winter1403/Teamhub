import { getFunc } from "../Get";

interface MyNewsCommentsData {
  myNewsCommetDtos: [];
  totalCount: number;
}

export const GetMyNewsComments =
  async (): Promise<MyNewsCommentsData | null> => {
    try {
      const response = await getFunc("/SharePanel/GetMyNewsComments");
      if (!response) {
        throw new Error("No data recived from api");
      }
      return response as MyNewsCommentsData;
    } catch (error) {
      console.error("Error fetching MyNewsCommentsData info:", error);
      return null;
    }
  };
