import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../../services/api/user/changePassword";

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: (data: { currentPassword: string; newPassword: string }) =>
      changePassword(data),
  });
};
