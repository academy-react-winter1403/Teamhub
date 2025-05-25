import { getFunc } from "../Get";
import { ProfileData } from "../../types/panel";

export const getProfileInfo = async (): Promise<ProfileData | null> => {
  try {
    const response = await getFunc<ProfileData | { data: ProfileData }>(
      "/SharePanel/GetProfileInfo"
    );
    // console.log("Raw API response:", response);
    if (!response) {
      throw new Error("No data received from API");
    }
    const profileData = "data" in response ? response.data : response;
    // console.log("Extracted profile data:", profileData);
    return profileData;
  } catch (error) {
    console.error("Error fetching profile info:", error);
    throw error;
  }
};
