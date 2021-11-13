import { useMutation } from "react-query";
import endpointRegister from "../../api/endpointRegister";
import fetchCreator from "../../api/fetchCreator";

interface Props{
  username:string,
  password:string
}

export const fetchSession = ({username,password}:Props) =>
 fetchCreator({
  path: endpointRegister.LOGINS,
  method: "POST",
 body:{
   "username-or-email":username,
   password
 } 
});

// eslint-disable-next-line import/prefer-default-export
export const useSessionMutation = () => {
  const { data, error, isLoading: loading, mutate } = useMutation
  (fetchSession);
  return { loading, data, error, mutate };
};
