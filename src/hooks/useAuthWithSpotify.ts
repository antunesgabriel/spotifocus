const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SCOPES = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "streaming",
  "user-library-read",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-state",
];
const SCOPES_PARAMS = SCOPES.join("%20");

const _request = async () => {
  const REDIRECT_URI = `${window.location.href}authenticating`;
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPES_PARAMS}&redirect_uri=${REDIRECT_URI}&show_dialog=true`;

  window.location.href = url;
};

export default function useAuthWithSpotify() {
  return {
    mutate() {
      _request();
    },
  };
}
