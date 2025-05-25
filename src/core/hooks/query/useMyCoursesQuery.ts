import { useQuery } from "@tanstack/react-query";
import { getMyCourses } from "../../services/api/user/getMyCourses";
import { Course, PaginatedResponse } from "../../services/types/panel";

export const useMyCoursesQuery = (params: {
  PageNumber: number;
  RowsOfPage: number;
  SortingCol?: string;
  SortType?: string;
  Query?: string;
}) => {
  return useQuery<PaginatedResponse<Course>>({
    queryKey: ["myCourses", params],
    queryFn: () => getMyCourses(params),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
