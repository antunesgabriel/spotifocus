import httpClient from "@app/configs/http-client.config";

export const getUserPlaylists = async () => {
  const { data } = await httpClient.get<PlaylistPayload>(
    "/v1/me/playlists?limit=10&offset=0"
  );

  return data;
};
