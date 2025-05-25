import { putFunc } from "./../Put";
import { OperationResponse, SecurityInfo } from "./../../types/panel";

export const editSecurity = async (
  data: Partial<SecurityInfo>
): Promise<OperationResponse> => {
  try {
    const response = await putFunc<OperationResponse>(
      "/SharePanel/EditSecurity",
      data
    );
    return response;
  } catch (error) {
    console.error("Error editing security:", error);
    throw error;
  }
};
