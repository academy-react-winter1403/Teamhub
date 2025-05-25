import { postFunc } from "./../Post";
import { OperationResponse } from "./../../types/panel";

export const addProfileImage = async (
  image: FormData
): Promise<OperationResponse> => {
  try {
    const response = await postFunc<OperationResponse>(
      "/SharePanel/AddProfileImage",
      image
    );
    return response;
  } catch (error) {
    console.error("Error adding profile image:", error);
    throw error;
  }
};
