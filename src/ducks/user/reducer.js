import { AsyncStorage } from 'react-native';

import {
	CHANGE_EMAIL,
	CHANGE_NAME,
	CHANGE_PICTURE,
	GET_USER_INFO,
	SCAN_PROFILE,
	PULL_USER_FROM_LOCAL,
} from './actions';

let initialState = {
	uid: '',
	loading: false,
	error: false,
	name: '',
	company: '',
	position: '',
	profilePicURL: '',
	profileUid: '',
	ownProfile: true,
};

AsyncStorage.getItem('USER_DATA').then(result => {
	initialState.uid = JSON.parse(result).uid;
});

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER_INFO + '_PENDING':
			return Object.assign({}, state, { loading: true });
		case GET_USER_INFO + '_FULFILLED':
			console.log(action.payload);
			const { name, position, company, profilepic, uid } = action.payload;
			return Object.assign({}, state, {
				name,
				position,
				company,
				profilePicURL: profilepic,
				loading: false,
				profileUid: uid,
				ownProfile: initialState.uid === initialState.profileUid,
			});
		case `${GET_USER_INFO}_REJECTED`:
			return Object.assign({}, state, { loading: true, error: true });
		case `${CHANGE_EMAIL}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${CHANGE_EMAIL}_FULFILLED`:
			return Object.assign({}, state, { loading: false });
		case `${CHANGE_EMAIL}_REJECTED`:
			return Object.assign({}, state, { loading: true, error: true });
		case `${CHANGE_NAME}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${CHANGE_NAME}_FULFILLED`:
			return Object.assign({}, state, { loading: false });
		case `${CHANGE_NAME}_REJECTED`:
			return Object.assign({}, state, { loading: true, error: true });
		case `${CHANGE_PICTURE}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${CHANGE_PICTURE}_FULFILLED`:
			return Object.assign({}, state, { loading: false });
		case `${CHANGE_PICTURE}_REJECTED`:
			return Object.assign({}, state, { loading: true, error: true });
		case `${PULL_USER_FROM_LOCAL}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${PULL_USER_FROM_LOCAL}_FULFILLED`:
			return Object.assign({}, state, {
				loading: false,
				name: action.payload.name,
				position: action.payload.position,
				company: action.payload.company,
				profilePicURL: action.payload.profilepic,
				uid: action.payload.uid,
				ownProfile: state.uid === action.payload.uid,
			});
		case `${PULL_USER_FROM_LOCAL}_REJECTED`:
			return Object.assign({}, state, { loading: true, error: true });
		default:
			return state;
	}
}
