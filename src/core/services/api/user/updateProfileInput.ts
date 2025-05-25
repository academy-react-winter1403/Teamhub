import { putFunc } from "./../Put";
import { ProfileData, OperationResponse } from "./../../types/panel";

export const updateProfileInfo = async (
  data: Partial<ProfileData>
): Promise<OperationResponse> => {
  try {
    const response = await putFunc<OperationResponse>(
      "/SharePanel/UpdateProfileInfo",
      data
    );
    return response;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};
