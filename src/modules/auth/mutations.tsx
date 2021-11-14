import { useMutation } from "react-query";
import endpointRegister from "../api/endpointRegister";
import fetchCreator from "../api/fetchCreator";
import { useGoToLogin } from "../../utils/hooks";

interface Props {
  username: string;
  password: string;
}

export const fetchSession = ({ username, password }: Props) =>
  fetchCreator({
    path: endpointRegister.LOGINS,
    method: "POST",
    body: {
      "username-or-email": username,
      password,
    },
  });

export const useSessionMutation = () => {
  const { data, error, isLoading: loading, mutate } = useMutation(fetchSession);
  useGoToLogin({ status: data?.status, error });
  return { loading, data: data?.jsonRes, error, mutate };
};
