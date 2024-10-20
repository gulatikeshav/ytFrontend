export const API_KEY = import.meta.env.VITE_API_KEY;

export const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

export const GOOGLE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" +
  API_KEY;

export const DUMMY_THUMBNAIL_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6t1Lq5DDZz5-EbP7wzd1RSKq0L4m280xGHQ&s";

// export const SEARCH_API_URL = "/api/search&q=";
// export const SEARCH_API_URL = "http://localhost:3000/api/search?q=";
export const SEARCH_API_URL =
  "https://ytbackend-1vut.onrender.com/api/search?q=";

export const DUMMY_LIVE_CHAT_DATA =
  "https://pokeapi.co/api/v2/pokemon?limit=1&offset=";

export const USER_ICON =
  "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";

export const SEARCH_QUERY_RESULTS_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;
