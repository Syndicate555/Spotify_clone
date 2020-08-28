// Login button link in the Login.js file which authorize user login login
export const authEndpoint = "https://accounts.spotify.com/authorize";

// The user gets redirected to the following link
const redirectUri = "http://localhost:3000";

// Spotify clinet ID - hidden from the client side due to security reasons
const CLIENT_ID = process.env.REACT_APP_ID;
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
