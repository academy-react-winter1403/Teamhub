import { create } from "zustand";
import { GetMyCourses } from "../services/api/user/GetMyCourses";

interface MyCourseData {
  listOfMyCourses: [];
  totalCount: number;
}

interface ProfileStore {
  profile: { data: MyCourseData } | null;
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
      const data = await GetMyCourses();
      // console.log("Response from GetMyCourses:", data);
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
