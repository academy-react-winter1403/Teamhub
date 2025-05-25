import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProfileImage } from "../../services/api/user/addProfileImage";

export const useAddProfileImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (image: FormData) => addProfileImage(image),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};
