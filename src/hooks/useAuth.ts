import { useMutation, useQueryClient } from "react-query";
import { AuthService } from "@services";
import { useRouter } from "next/router";

interface IUserInfo {
  email: string;
  password: string;
}

const useAuth = () => {
  const router = useRouter();

  const { mutate: getAuthTokens } = useMutation(
    ({ email, password }: IUserInfo) => AuthService.login(email, password),
    {
      onSuccess: () => {
        router.reload();
      },
    }
  );

  return getAuthTokens;
};

export default useAuth;
