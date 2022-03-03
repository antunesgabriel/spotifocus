import { getUserPlaylists } from "@app/services/playlist.service";
import { useQuery } from "react-query";

export default function useUserPlaylists() {
  return useQuery("@userPlaylists", getUserPlaylists);
}
