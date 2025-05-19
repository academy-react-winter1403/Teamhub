import { useQuery } from "@tanstack/react-query";
import { getProfileInfo } from "../../services/api/user/getProfileInfo";
import { ProfileData } from "../../services/types/panel";

export const useProfileQuery = () => {
  return useQuery<ProfileData | null>({
    queryKey: ["profile"],
    queryFn: getProfileInfo,
    staleTime: 5 * 60 * 1000, // 5 دقیقه
    retry: 2,
  });
};
