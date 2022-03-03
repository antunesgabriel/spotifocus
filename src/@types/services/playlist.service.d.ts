type PlaylistImage = {
  height: number;
  url: string;
  width: number;
};

type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: "https://open.spotify.com/playlist/3a9szxXXqp0kt4YdYZKav5";
  };
  id: string;
  images: PlaylistImage[];
  name: string;
  primary_color: null | string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

type PlaylistPayload = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null | string;
  total: number;
  items: Playlist[];
};
