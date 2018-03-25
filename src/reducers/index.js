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
	else {
		return state;
	}
}