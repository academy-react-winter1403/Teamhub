import { useQuery } from "@tanstack/react-query";
import { changeRecovery } from "../../services/api/user/changeRecovery";

export const useChangeRecoveryQuery = (sendValue: string) => {
  return useQuery({
    queryKey: ["changeRecovery", sendValue],
    queryFn: () => changeRecovery(sendValue),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
