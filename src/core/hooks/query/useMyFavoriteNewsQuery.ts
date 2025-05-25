import { useQuery } from "@tanstack/react-query";
import { getMyFavoriteNews } from "../../services/api/user/getMyFavoriteNews";
import { News, PaginatedResponse } from "../../services/types/panel";

export const useMyFavoriteNewsQuery = () => {
  return useQuery<PaginatedResponse<News>>({
    queryKey: ["myFavoriteNews"],
    queryFn: getMyFavoriteNews,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
