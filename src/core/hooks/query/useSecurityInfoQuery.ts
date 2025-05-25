import { useQuery } from "@tanstack/react-query";
import { getSecurityInfo } from "../../services/api/user/GetSecurityInfo";
import { SecurityInfo } from "../../services/types/panel";

export const useSecurityInfoQuery = () => {
  return useQuery<SecurityInfo>({
    queryKey: ["securityInfo"],
    queryFn: getSecurityInfo,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
