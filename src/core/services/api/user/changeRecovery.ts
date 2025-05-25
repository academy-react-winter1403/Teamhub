import { getFunc } from "./../Get";
import { OperationResponse } from "./../../types/panel";

export const changeRecovery = async (
  sendValue: string
): Promise<OperationResponse> => {
  try {
    const response = await getFunc<OperationResponse>(
      `/SharePanel/ChangeRecovery/${sendValue}`
    );
    return response;
  } catch (error) {
    console.error("Error changing recovery:", error);
    throw error;
  }
};
