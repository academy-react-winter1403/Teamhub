import { getFunc } from "../Get";

interface SecurityInfoData {
  nationalIMageAddress: string;
  verifyNationalImage: boolean;
  twoStepAuth: boolean;
  recoveryEmail: string;
  baseUrl: string | null;
}

export const getSecurityInfo = async (): Promise<SecurityInfoData | null> => {
  try {
    const response = await getFunc("/SharePanel/GetSecurityInfo");
    if (!response) {
      throw new Error("No data received from API");
    }
    return response as SecurityInfoData;
  } catch (error) {
    console.error("Error fetching SecurityData info:", error);
    return null;
  }
};
