import { useNavigate } from "react-router-dom";

export const useScrollToHash = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    navigate(`#${id}`);
  };

  return scrollTo;
};
