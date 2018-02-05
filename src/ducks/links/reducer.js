import {
	GET_LINKS_FROM_NAV,
	GET_LINKS_FROM_LOCAL,
	SAVE_LINK,
	UPDATE_LINK,
	DELETE_LINK,
} from './actions';

import { AsyncStorage } from 'react-native';

let initialState = {
	links: [],
	loading: false,
	error: false,
	saved: false,
	providers: ['LinkedIn', 'Twitter', 'Medium', 'Phone', 'Email'],
	editableName: '',
	editableLink: '',
	editableColor: '',
};

export default function linkReducer(state = initialState, action) {
	switch (action.type) {
		case GET_LINKS_FROM_NAV + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case GET_LINKS_FROM_NAV + '_FULFILLED':
			return Object.assign({}, state, {
				loading: false,
				links: action.payload.data,
			});
		case GET_LINKS_FROM_NAV + '_REJECTED':
			return Object.assign({}, state, { loading: true, error: false });
		case GET_LINKS_FROM_LOCAL + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case GET_LINKS_FROM_LOCAL + '_FULFILLED':
			console.log(action.payload);
			return Object.assign({}, state, {
				loading: false,
				links: action.payload,
			});
		case GET_LINKS_FROM_LOCAL + '_REJECTED':
			return Object.assign({}, state, { loading: true, error: false });
		case SAVE_LINK + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case SAVE_LINK + '_FULFILLED':
			console.log(action.payload, typeof action.payload);
			AsyncStorage.setItem('USER_LINKS', JSON.stringify(action.payload));
			return Object.assign({}, state, {
				loading: false,
				links: action.payload,
			});
		case SAVE_LINK + '_REJECTED':
			return Object.assign({}, state, {
				loading: true,
				links: action.payload,
				saved: true,
			});
		case UPDATE_LINK + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case UPDATE_LINK + '_FULFILLED':
			action.payload
				? AsyncStorage.setItem('USER_LINKS', JSON.stringify(action.payload))
				: null;
			return Object.assign({}, state, {
				loading: false,
				links: action.payload,
			});
		case UPDATE_LINK + '_REJECTED':
			return Object.assign({}, state, { loading: true, error: false });
		case DELETE_LINK + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case DELETE_LINK + '_FULFILLED':
			AsyncStorage.setItem('USER_LINKS', JSON.stringify(action.payload));
			console.log(action.payload);
			return Object.assign({}, state, {
				loading: false,
				links: action.payload,
			});
		case DELETE_LINK + '_REJECTED':
			return Object.assign({}, state, { loading: true, error: false });
		default:
			return state;
	}
}
