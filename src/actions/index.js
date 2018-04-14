
// Add token and refresh token to state
export const SET_TOKENS = 'SET_TOKENS';
export const set_tokens = (tokens) => ({
	type: SET_TOKENS,
	tokens
});

export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';
export const clear_playlist = () => ({
	type: CLEAR_PLAYLIST
})

// Get All User Playlists & Add to State
export const GET_PLAYLISTS = 'GET_PLAYLISTS';
export const get_playlists = (token, user_id) => dispatch => {
	const url = `https://api.spotify.com/v1/me/playlists?limit=50`
	const xml = new XMLHttpRequest();

	xml.open('GET', url);
	xml.responseType = 'json';
	xml.setRequestHeader('Authorization', `Bearer ${token}`);

	xml.onload = function(){
		if(xml.status === 200){
			const resp = xml.response;
			dispatch({type: GET_PLAYLISTS, playlists: resp});
			console.log('User playlists: ', resp);
		} 
	}
	xml.onerror = function(e){console.log('ERROR Getting Playlists From Action: ', e)}
	xml.send();
}

// Get All Tracks from a PlayList
export const GET_PLAYLIST_TRACKS = 'GET_PLAYLIST_TRACKS';
export const get_playlist_tracks = (token, playlist_id, owner_id) => (dispatch) => {
	let xml = new XMLHttpRequest();
	xml.responseType = 'json';
	xml.open('GET', `https://api.spotify.com/v1/users/${owner_id}/playlists/${playlist_id}/tracks`);
	xml.setRequestHeader('Authorization', 'Bearer ' + token);
	
	xml.onload = function(){
		console.log(playlist_id, owner_id	)
		console.log('PL TRACKS: ', xml.response);
		if(xml.status === 200){
			dispatch({type: GET_PLAYLIST_TRACKS, payload: xml.response.items})	
		}
		
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
	xml.onload = function(){
		if(xml.status === 200){
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

export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const clear_search = () => ({
	type: CLEAR_SEARCH
});

// Search Spotify with 'term' for tracks then call searchArtist
export const SEARCH_TRACK = 'SEARCH_TRACK';
export const searchTrack = (token, term) => dispatch => {
	let url = `https://api.spotify.com/v1/search?q=${encodeURI(term)}&type=track%2Calbum%2Cplaylist&limit=50`;
	console.warn('!!!!!!!!', url);
	var xml = new XMLHttpRequest();
	xml.open('GET', url);
	xml.responseType = 'json';
	xml.setRequestHeader('Authorization', 'Bearer ' + token);
	xml.onreadystatechange = function(){
		if(xml.response){
			console.log("XML!!!: ", xml.response)
			dispatch({type: SEARCH_TRACK, payload: xml.response});
		}
	}
	xml.send();
}