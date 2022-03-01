import axios from "axios";
import { getUserFullCredentials } from "./localstorage.config";

const httpClient = axios.create({
  baseURL: "https://api.spotify.com",
});

httpClient.interceptors.request.use(function (config) {
  const fullToken = getUserFullCredentials();

  if (!fullToken) {
    return Promise.reject("NO_AUTHENTICATED");
  }

  if (config.headers) {
    config.headers.Authorization = fullToken;
  }

  return config;
});

export default httpClient;
