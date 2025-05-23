import http from "../interceptor";

export const putFunc = async (
  endPoint: string,
  putObjects: unknown
): Promise<unknown> => {
  try {
    console.log("PUT data:", putObjects);
    const response = await http.put(endPoint, putObjects);
    console.log("PUT response:", response);
    return response;
  } catch (error) {
    console.error("Put request failed:", error);
    throw error;
  }
};
