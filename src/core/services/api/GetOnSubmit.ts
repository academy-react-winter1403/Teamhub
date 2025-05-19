import http from "../interceptor";

export const getByItem = async (endPoint: string): Promise<unknown> => {
  try {
    const response = await http.get(endPoint);
    return response;
  } catch (error) {
    console.error("Get request (no params) failed:", error);
    throw error;
  }
};
