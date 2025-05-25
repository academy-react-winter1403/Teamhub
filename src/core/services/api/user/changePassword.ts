import { postFunc } from "./../Post";
import { OperationResponse } from "./../../types/panel";

export const changePassword = async (data: {
  currentPassword: string;
  newPassword: string;
}): Promise<OperationResponse> => {
  try {
    const response = await postFunc<OperationResponse>(
      "/SharePanel/ChangePassword",
      data
    );
    return response;
  } catch (error) {
    console.error("Error changing password:", error);
    throw error;
  }
};
