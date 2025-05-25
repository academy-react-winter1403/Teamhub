import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const uploadProfileImage = async (formData: FormData) => {
  const response = await axios.post("/api/profile/image", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const useUploadProfileImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadProfileImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};