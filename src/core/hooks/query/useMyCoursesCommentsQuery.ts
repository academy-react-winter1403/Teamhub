import { useQuery } from "@tanstack/react-query";
import { getMyCoursesComments } from "../../services/api/user/getMyCoursesComments";
import { Comment, PaginatedResponse } from "../../services/types/panel";

export const useMyCoursesCommentsQuery = () => {
  return useQuery<PaginatedResponse<Comment>>({
    queryKey: ["myCoursesComments"],
    queryFn: getMyCoursesComments,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
