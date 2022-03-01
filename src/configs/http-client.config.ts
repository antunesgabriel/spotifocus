import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.spotify.com",
});

// httpClient.interceptors.request.use((d, r) => {})

export default httpClient;
