import http from "../interceptor";
export const getFunc = async (
  endPoint: string,
  params?: unknown
): Promise<unknown> => {
  try {
    // console.log("GET params:", params);
    const response = await http.get(endPoint, { params });
    // console.log("GET response:", response);
    return response;
  } catch (error) {
    console.error("Get request failed:", error);
    throw error;
  }
};
