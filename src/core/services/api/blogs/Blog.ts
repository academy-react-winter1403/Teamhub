import http from "../../interceptor";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getBlogCards = async (pageNumber: number) => {
  try {
    const result = await http.get(
      URL +
        `/News?PageNumber=${pageNumber}&RowsOfPage=12&SortingCol=InsertDate&SortType=DESC`
    );
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
