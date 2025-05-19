import { getProfileInfo } from "../services/api/user/getProfileInfo";
import { create } from "zustand";

interface ProfileData {
  birthDay: string;
  currentPictureAddress: string;
  email: string;
  fName: string | null;
  gender: boolean;
  homeAdderess: string | null;
  lName: string | null;
  latitude: number | null;
  linkdinProfile: string | null;
  longitude: number | null;
  nationalCode: string | null;
  phoneNumber: string;
  profileCompletionPercentage: number;
  receiveMessageEvent: boolean;
  telegramLink: string | null;
  userAbout: string | null;
  userImage: any[];
}

interface ProfileStore {
  profile: { data: ProfileData } | null;
  isLoading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  reset: () => void;
}

const ERROR_MESSAGES = {
  FETCH_PROFILE_FAILED: "خطا در دریافت اطلاعات پروفایل",
  NO_DATA: "داده‌های پروفایل دریافت نشد",
};

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  isLoading: false,
  error: null,

  fetchProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      // console.log(1);
      const data = await getProfileInfo();
      // console.log("Response from getProfileInfo:", data);
      if (!data) {
        throw new Error(ERROR_MESSAGES.NO_DATA);
      }
      // console.log(2);
      // console.log("Profile data:", data);
      set({
        profile: { data },
        isLoading: false,
      });
    } catch (error: any) {
      console.error("Error in fetchProfile:", error.message);
      set({
        error: error.message || ERROR_MESSAGES.FETCH_PROFILE_FAILED,
        isLoading: false,
      });
    }
  },

  reset: () => set({ profile: null, isLoading: false, error: null }),
}));
