import { useMutation } from "react-query";
import { AuthService } from "@services";

interface IUserInfo {
  email: string;
  password: string;
}

const useAuth = () => {
  const { mutate: getAuthTokens } = useMutation(
    ({ email, password }: IUserInfo) => AuthService.login(email, password)
  );

  return getAuthTokens;
};

export default useAuth;
