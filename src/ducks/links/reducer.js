import {
	GET_LINKS_FROM_NAV,
	GET_LINKS_FROM_LOCAL,
	ADD_LINK,
	UPDATE_LINK,
	DELETE_LINK,
} from './actions';

import { AsyncStorage } from 'react-native';

let initialState = {
	links: [],
	loading: false,
	error: false,
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
				links: action.payload,
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
				providers: initialState.providers.filter(x =>
					action.payload.find(
						curr => x.toLowerCase() === curr.servicename.toLowerCase()
					)
				),
			});
		case GET_LINKS_FROM_LOCAL + '_REJECTED':
			return Object.assign({}, state, { loading: true, error: false });
		case ADD_LINK + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case ADD_LINK + '_FULFILLED':
			return Object.assign({}, state, { loading: false });
		case ADD_LINK + '_REJECTED':
			return Object.assign({}, state, { loading: true, error: false });
		case UPDATE_LINK + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case UPDATE_LINK + '_FULFILLED':
			return Object.assign({}, state, { loading: false });
		case UPDATE_LINK + '_REJECTED':
			return Object.assign({}, state, { loading: true, error: false });
		case DELETE_LINK + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case DELETE_LINK + '_FULFILLED':
			return Object.assign({}, state, { loading: false });
		case DELETE_LINK + '_REJECTED':
			return Object.assign({}, state, { loading: true, error: false });
		default:
			return state;
	}
}
