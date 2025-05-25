import { useMutation } from "@tanstack/react-query";
import { deleteProfileImage } from "../../services/api/user/deleteProfileImage";

export const useDeleteProfileImageMutation = () => {
  return useMutation({
    mutationFn: (imageId: string) => deleteProfileImage(imageId),
    onSuccess: () => {
      // می‌تونی invalidate برای پروفایل اضافه کنی
    },
  });
};
