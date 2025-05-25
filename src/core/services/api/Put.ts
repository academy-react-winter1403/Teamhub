import http from "../interceptor";

export const putFunc = async <T>(
  endPoint: string,
  putObjects: Record<string, unknown>
): Promise<T> => {
  try {
    const response = await http.put<T>(endPoint, putObjects);
    return response.data;
  } catch (error) {
    console.error("Put request failed:", error);
    throw error;
  }
};
