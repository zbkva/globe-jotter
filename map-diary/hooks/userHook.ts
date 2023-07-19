import useSWR, { Fetcher } from "swr";
import { User } from "../models/user";

const fetcher: Fetcher<{ isAuthenticated: boolean; user: User }, string> = (
  apiURL: string
) => fetch(apiURL).then((res) => res.json());

function useUser() {
  const { data, error, isLoading } = useSWR<
    { isAuthenticated: boolean; user: User },
    Error
  >(`http://localhost:3001/api/auth/user`, fetcher);

  return {
    userResponse: data,
    isLoading,
    isError: error,
  };
}

export default useUser;
