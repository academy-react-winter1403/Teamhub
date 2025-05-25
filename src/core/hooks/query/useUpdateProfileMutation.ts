import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfileInfo } from "../../services/api/user/updateProfileInput";
import { ProfileData } from "../../services/types/panel";

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<ProfileData>) => updateProfileInfo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
