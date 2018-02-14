import { AsyncStorage } from 'react-native';

import {
	CREATE_ACCOUNT,
	CHANGE_EMAIL,
	CHANGE_NAME,
	CHANGE_PICTURE,
	GET_USER_INFO,
	PULL_USER_FROM_LOCAL,
} from './actions';

let initialState = {
	baseuid: '',
	uid: '',
	loading: false,
	error: false,
	name: '',
	company: '',
	position: '',
	profilePicURL: '',
	profileUid: '',
	ownProfile: true,
	transitioning: false,
};

export default function profileReducer(state = initialState, action) {
	AsyncStorage.getItem('USER_DATA').then(result => {
		if (result) {
			initialState.uid = JSON.parse(result).uid;
			initialState.baseuid = JSON.parse(result).uid;
		}
	});
	switch (action.type) {
		case `${CREATE_ACCOUNT}_PENDING`:
			return Object.assign({}, state, { loading: true, transitioning: true });
		case `${CREATE_ACCOUNT}_FULFILLED`:
			console.log(action.payload);
			return Object.assign({}, state, {
				loading: false,
				userInfo: { ...action.payload },
			});
		case `${CREATE_ACCOUNT}_REJECTED`:
			return Object.assign({}, state, { loading: false, error: true });
		case GET_USER_INFO + '_PENDING':
			return Object.assign({}, state, { loading: true, transitioning: true });
		case GET_USER_INFO + '_FULFILLED':
			return Object.assign({}, state, {
				name: action.payload.name,
				position: action.payload.position,
				company: action.payload.company,
				profilePicURL: action.payload.profilepic,
				loading: false,
				transitioning: false,
				profileUid: action.payload.uid,
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
				profileUid: action.payload.uid,
				ownProfile: state.uid === action.payload.uid,
			});
		case `${PULL_USER_FROM_LOCAL}_REJECTED`:
			return Object.assign({}, state, { loading: true, error: true });
		default:
			return state;
	}
}
