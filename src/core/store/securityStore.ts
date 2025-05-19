import { create } from "zustand";
import { getSecurityInfo } from "../services/api/user/GetSecurityInfo";

interface SecurityInfoData {
  nationalIMageAddress: string;
  verifyNationalImage: boolean;
  twoStepAuth: boolean;
  recoveryEmail: string;
  baseUrl: string | null;
}

interface SecurityStore {
  security: { data: SecurityInfoData } | null;
  isLoading: boolean;
  error: string | null;
  fetchSecurity: () => Promise<void>;
  reset: () => void;
}

const ERROR_MESSAGES = {
  FETCH_SECURITY_FAILED: "خطا در دریافت اطلاعات پروفایل",
  NO_DATA: "داده‌های پروفایل دریافت نشد",
};

export const useSecurityStore = create<SecurityStore>((set) => ({
  security: null,
  isLoading: false,
  error: null,

  fetchSecurity: async () => {
    set({ isLoading: true, error: null });
    try {
      console.log(1);
      const data = await getSecurityInfo();
      console.log("Response from getSecurityInfo:", data);
      if (!data) {
        throw new Error(ERROR_MESSAGES.NO_DATA);
      }
      console.log(2);
      console.log("Security data:", data);
      set({
        security: { data },
        isLoading: false,
      });
    } catch (error: any) {
      console.error("Error in fetchSecurity:", error.message);
      set({
        error: error.message || ERROR_MESSAGES.FETCH_SECURITY_FAILED,
        isLoading: false,
      });
    }
  },

  reset: () => set({ security: null, isLoading: false, error: null }),
}));
