import { postFunc } from "./../Post";
import { OperationResponse } from "./../../types/panel";

export const selectProfileImage = async (
  imageId: string
): Promise<OperationResponse> => {
  try {
    const response = await postFunc<OperationResponse>(
      "/SharePanel/SelectProfileImage",
      { imageId }
    );
    return response;
  } catch (error) {
    console.error("Error selecting profile image:", error);
    throw error;
  }
};
