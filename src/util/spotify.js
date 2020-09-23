let accessToken = undefined;
const redirectURL = 'http://localhost:3000/';
const clientID = 'bf460d4fa8b34901b82fcc312dbe1059';

export const Spotify = {
  getAccessToken() {
    if (accessToken) { return accessToken; }
    const url = window.location.href;
    let token = url.match(/access_token=([^&]*)/);
    const expires = url.match(/expires_in=([^&]*)/);
    if (token && expires) {
      accessToken = token[1];
      window.setTimeout(() => accessToken = '', expires[1] * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
      window.location = url;
    }
  },
 search(term) {
    const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    const token = this.getAccessToken();
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response) {
        return response.json();
      } else {
        console.log("Error: No search response");
      }
    })
    .then(data => {
      if (!data.tracks) { return [] }
      if (!Array.isArray(data.tracks.items)) {
        console.log('Error:', data.error.message);
      } else { 
        return data.tracks.items.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }
      })}
    });
  },
  async savePlaylist(name, tracks) {
    if (!name || !tracks) { return; }
    const headers = { 
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application-json'
    };
    let userID = '';
    let playlistID = '';
    const url = 'https://api.spotify.com/v1/me';
    await fetch(url, { headers: headers })
      .then(response => {
        if (response) {
          return response.json();
        } else {
          console.log(response);
        }
      })
      .then(data => {
        userID = data.id;
      });
    const plURL = `	/v1/users/${userID}/playlists`;
    await fetch(plURL, {
      headers: headers,
      body: JSON.stringify({ name: name })
    })
    .then(request => {
      return request.json();
    })
    .then(data => { playlistID = data.id; });
  }
};
