import { getFunc } from "./../Get";

import { ApiResponse, SecurityInfo } from "./../../types/panel";

export const getSecurityInfo = async (): Promise<SecurityInfo> => {
  try {
    const response = await getFunc<ApiResponse<SecurityInfo>>(
      "/SharePanel/GetSecurityInfo"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching security info:", error);
    throw error;
  }
};
