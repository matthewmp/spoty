import * as actions from '../actions';

export const initialState = {
	test: true
}

export const reducer = (state=initialState, action) => {
	if(action.type === actions.SET_TOKENS){
		return Object.assign({}, state, {
			access_token: action.tokens.access_token,
			refresh_token: action.tokens.refresh_token
		})
	}
	else if(action.type === actions.GET_PROFILE){
		return Object.assign({}, state, {
			name: action.payload.name,
			followers: action.payload.followers,
			id: action.payload.id,
			img_url: action.payload.img_url
		})
	}
	else if(action.type === actions.GET_PLAYLISTS){
		return Object.assign({}, state, {
			playlists: action.playlists
		})
	}
	else if(action.type === actions.GET_FEATURED_PLAYLISTS){
		return Object.assign({}, state, {
			featuredPlaylists: action.payload
		})
	}
	else if(action.type === actions.SEARCH_TRACK){
		return Object.assign({}, state, {
			searchTrack: action.payload
		})
	}
	else if(action.type === actions.SEARCH_ARTIST){
		return Object.assign({}, state, {
			searchArtist: action.payload
		})
	}
	else {
		return state;
	}
}