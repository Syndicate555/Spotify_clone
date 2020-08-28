// Login button link in the Login.js file which authorize user login login
export const authEndpoint = "https://accounts.spotify.com/authorize";

// The user gets redirected to the following link
const reditectUri = "http://localhost:3000";

// Spotify clinet ID
const clientId = "3afc8087f81240e8958a196f30264420";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
