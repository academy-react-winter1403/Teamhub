import http from "../interceptor";

export const getByItem = async <T>(endPoint: string): Promise<T> => {
  try {
    const response = await http.get<T>(endPoint);
    return response.data;
  } catch (error) {
    console.error("Get request (no params) failed:", error);
    throw error;
  }
};
