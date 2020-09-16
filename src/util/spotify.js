let accessToken = undefined;
const redirectURL = 'http://localhost:3000/';
const clientID = 'bf460d4fa8b34901b82fcc312dbe1059';

export const Spotify = {
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
  },
  search(term) {
    const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      if (response) {
        return response.json();
      } else {
        console.log(response);
      }
    })
    .then(data => {
      console.log('data', data);
      if (!data) { return [] }
      if (!Array.isArray(data)) {
        console.log(data);
      } else { data.map(track => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0],
          album: track.album.name,
          uri: track.uri
        }
      })}
    });
  }
};
