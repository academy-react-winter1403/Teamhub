import { useQuery } from "@tanstack/react-query";
import { getMyFavoriteCourses } from "../../services/api/user/getMyFavoriteCourses";
import { Course, PaginatedResponse } from "../../services/types/panel";

export const useMyFavoriteCoursesQuery = () => {
  return useQuery<PaginatedResponse<Course>>({
    queryKey: ["myFavoriteCourses"],
    queryFn: getMyFavoriteCourses,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
