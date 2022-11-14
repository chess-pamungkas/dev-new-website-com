import axios from "axios";

// const KEY = process.env.YOUTUBE_API_KEY;
const KEY = "AIzaSyDzxRDZ0dk7lDXjXxvkF-HyuYYjmPICJH0";

export const getPlaylistItemsFromYoutube = async (playlistId) => {
  // const API_URL = process.env.YOUTUBE_PLAYLIST_ITEMS_API_URL;
  const API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
  const MAX_COUNT_OF_ITEMS = 50;

  const response = await axios.get(
      `${API_URL}?part=snippet&fields=items(id,snippet(title,description,resourceId))&playlistId=${playlistId}&key=${KEY}&maxResults=${MAX_COUNT_OF_ITEMS}`
  );

  return response.data?.items;
};

export const getPlaylistTitleFromYoutube = async (playlistId) => {
  // const API_URL = process.env.YOUTUBE_PLAYLIST_API_URL;
  const API_URL = "https://youtube.googleapis.com/youtube/v3/playlists";

  const response = await axios.get(
      `${API_URL}?part=snippet&fields=items(id,snippet(title))&id=${playlistId}&key=${KEY}`
  );
  return response.data?.items;
};

export const getVideoById = async (videoId) => {
  // const API_URL = process.env.YOUTUBE_VIDEOS_API_URL;
  const API_URL = "https://www.googleapis.com/youtube/v3/videos";

  const response = await axios.get(
      `${API_URL}?part=snippet&fields=items(id,snippet(title,description))&id=${videoId}&key=${KEY}`
  );
  return response.data?.items;
};