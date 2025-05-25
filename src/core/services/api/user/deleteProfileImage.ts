import { deleteFunc } from "./../Delete";
import { OperationResponse } from "./../../types/panel";

export const deleteProfileImage = async (
  imageId: string
): Promise<OperationResponse> => {
  try {
    const response = await deleteFunc<OperationResponse>(
      "/SharePanel/DeleteProfileImage",
      { imageId }
    );
    return response;
  } catch (error) {
    console.error("Error deleting profile image:", error);
    throw error;
  }
};
