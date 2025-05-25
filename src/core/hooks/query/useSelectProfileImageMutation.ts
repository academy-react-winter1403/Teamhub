import { useMutation } from "@tanstack/react-query";
import { selectProfileImage } from "../../services/api/user/selectProfileImage";

export const useSelectProfileImageMutation = () => {
  return useMutation({
    mutationFn: (imageId: string) => selectProfileImage(imageId),
    onSuccess: () => {
      // می‌تونی invalidate برای پروفایل اضافه کنی
    },
  });
};
