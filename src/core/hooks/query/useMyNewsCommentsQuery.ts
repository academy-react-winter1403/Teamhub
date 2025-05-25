import { useQuery } from "@tanstack/react-query";
import { getMyNewsComments } from "../../services/api/user/getMyNewsComments";
import { Comment } from "../../services/types/panel";
import { PaginatedResponse } from "../../services/types/panel";

export const useMyNewsCommentsQuery = () => {
  return useQuery<PaginatedResponse<Comment>>({
    queryKey: ["myNewsComments"],
    queryFn: getMyNewsComments,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
