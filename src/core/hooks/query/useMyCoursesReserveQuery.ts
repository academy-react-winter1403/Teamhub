import { useQuery } from "@tanstack/react-query";
import { getMyCoursesReserve } from "../../services/api/user/getMyCoursesReserve";
import { Course, PaginatedResponse } from "../../services/types/panel";

export const useMyCoursesReserveQuery = () => {
  return useQuery<PaginatedResponse<Course>>({
    queryKey: ["myCoursesReserve"],
    queryFn: getMyCoursesReserve,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
