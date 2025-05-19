import { getFunc } from "../Get";
import { ProfileData } from "../../types/panel";

interface ApiResponse {
  data: ProfileData | { data: ProfileData };
}

export const getProfileInfo = async (): Promise<ProfileData | null> => {
  try {
    const response = (await getFunc(
      "/SharePanel/GetProfileInfo"
    )) as ApiResponse;
    console.log("Raw API response:", response);
    if (!response || !response.data) {
      throw new Error("No data received from API");
    }
    const profileData =
      "data" in response.data ? response.data.data : response.data;
    console.log("Extracted profile data:", profileData);
    return profileData;
  } catch (error) {
    console.error("Error fetching profile info:", error);
    throw error; // React Query خطاها رو مدیریت می‌کنه
  }
};
