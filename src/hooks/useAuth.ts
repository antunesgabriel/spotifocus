import { getUserFullCredentials } from "@app/configs/localstorage.config";
import { useQuery } from "react-query";

const _request = async () => {
  const userCredentials = getUserFullCredentials();

  return Promise.resolve(Boolean(userCredentials));
};

export default function useAuth() {
  return useQuery("@isAuth", _request, { enabled: true });
}
