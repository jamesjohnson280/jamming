let accessToken = undefined;

const Spotify = {
  getAccessToken() {
    if (accessToken) { return accessToken; }
    const url = window.location.href;
    const token = url.match('/access_token=([^&]*)/');
    const expires = url.match('/expires_in=([^&]*)/');
  }
};

export default Spotify;