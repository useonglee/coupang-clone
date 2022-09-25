import { UserService } from "@services";
import { useQuery } from "react-query";

const useUser = () => {
  const { data: userInfo } = useQuery(["user"], () => UserService.me());

  return userInfo;
};

export default useUser;
