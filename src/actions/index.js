
// Add token and refresh token to state
export const SET_TOKENS = 'SET_TOKENS';
export const set_tokens = (tokens) => ({
	type: SET_TOKENS,
	tokens
});

// Get All User Playlists & Add to State
export const GET_PLAYLISTS = 'GET_PLAYLISTS';
export const get_playlists = (token) => (dispatch) => {
	const url = 'https://api.spotify.com/v1/me/playlists?limit=50';
	const xml = new XMLHttpRequest();

	xml.open('GET', url);
	xml.responseType = 'json';
	xml.setRequestHeader('Authorization', `Bearer ${token}`);

	xml.onreadystatechange = function(){
		const resp = xml.response;
		dispatch({type: GET_PLAYLISTS, playlists: resp})
	}
	xml.onerror = function(e){console.log('ERROR: ', e)}
	xml.send({limit: 5});
}

// Get All Tracks from a PlayList
export const GET_PLAYLIST_TRACKS = 'GET_PLAYLIST_TRACKS';
export const get_playlist_tracks = (token, playlist_id, user_id) => (dispatch) => {
	let xml = new XMLHttpRequest();
	xml.responseType = 'json';
	xml.open('GET', `https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`);
	xml.setRequestHeader('Authorization', 'Bearer ' + token);
	
	xml.onreadystatechange = function(){
		console.log(xml.response);
	}
	xml.send();

}

// Get User's Profile Info & Add to State
export const GET_PROFILE = 'GET_PROFILE';
export const get_profile = (token) => dispatch =>{
	const url = 'https://api.spotify.com/v1/me';
	let xml = new XMLHttpRequest();
	xml.open('GET', url);
	xml.responseType = 'json';
	xml.setRequestHeader('Authorization', 'Bearer ' + token);
	xml.onreadystatechange = function(){
		if(xml.response){
			const data = {
				name: xml.response.display_name,
				followers: xml.response.followers.total,
				id: xml.response.id,
				img_url: xml.response.images[0].url
			}
			dispatch({type: GET_PROFILE, payload: data});
		}
	}
	xml.send();
}

