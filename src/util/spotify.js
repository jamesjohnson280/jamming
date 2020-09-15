let accessToken = undefined;
const redirectURL = 'http://localhost:3000/';
const clientID = 'bf460d4fa8b34901b82fcc312dbe1059';

const Spotify = {
  getAccessToken() {
    if (accessToken) { return accessToken; }
    const url = window.location.href;
    let token = url.match('/access_token=([^&]*)/');
    const expires = url.match('/expires_in=([^&]*)/');
    if (token && expires) {
      accessToken = token;
      window.setTimeout(() => accessToken = '', expires * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
      window.location.href = url;
    }
  }
};

export default Spotify;