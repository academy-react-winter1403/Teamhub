import http from "../interceptor";

export const getFunc = async <T>(
  endPoint: string,
  params?: Record<string, unknown>
): Promise<T> => {
  try {
    const response = await http.get<T>(endPoint, { params });
    return response.data; // فرض می‌کنیم interceptor پاسخ رو تو response.data می‌پیچه
  } catch (error) {
    console.error("Get request failed:", error);
    throw error;
  }
};
