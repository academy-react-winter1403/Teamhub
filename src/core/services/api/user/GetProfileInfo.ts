import { getFunc } from "../Get";

export const fetchUserProfile = async () => {
  try {
    const response = await getFunc("/SharePanel/GetProfileInfo");
    console.log("User profile response:", response);
    return response.data;
  } catch (error) {
    console.error("Fetch user profile failed:", error);
    throw error;
  }
};
