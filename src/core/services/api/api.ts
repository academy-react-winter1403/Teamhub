import http from "../interceptor";

// get
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

// post

export const postFunc = async (
  endPoint: string,
  postObjects: unknown
): Promise<unknown> => {
  try {
    console.log(postObjects);
    const response = await http.post(endPoint, postObjects);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Post request failed:", error);
    throw error;
  }
};

// put

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

// delete

export const deleteFunc = async (
  endPoint: string,
  params?: unknown
): Promise<unknown> => {
  try {
    console.log("DELETE params:", params);
    const response = await http.delete(endPoint, { params });
    console.log("DELETE response:", response);
    return response;
  } catch (error) {
    console.error("Delete request failed:", error);
    throw error;
  }
};

// get on submit

export const getByItem = async (endPoint: string): Promise<unknown> => {
  try {
    const response = await http.get(endPoint);
    return response;
  } catch (error) {
    console.error("Get request (no params) failed:", error);
    throw error;
  }
};
