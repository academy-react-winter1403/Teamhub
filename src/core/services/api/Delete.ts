import http from "../interceptor";

export const deleteFunc = async <T>(
  endPoint: string,
  params?: Record<string, unknown>
): Promise<T> => {
  try {
    const response = await http.delete<T>(endPoint, { params });
    return response.data;
  } catch (error) {
    console.error("Delete request failed:", error);
    throw error;
  }
};
