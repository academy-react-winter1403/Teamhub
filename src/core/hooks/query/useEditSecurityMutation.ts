import { useMutation } from "@tanstack/react-query";
import { editSecurity } from "../../services/api/user/editSecurity";
import { SecurityInfo } from "../../services/types/panel";

export const useEditSecurityMutation = () => {
  return useMutation({
    mutationFn: (data: Partial<SecurityInfo>) => editSecurity(data),
    onSuccess: () => {
      // می‌تونی invalidate برای securityInfo اضافه کنی
    },
  });
};
