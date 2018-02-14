import axios from 'axios';

import { AsyncStorage } from 'react-native';

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const GET_USER_INFO = 'GET_USER_INFO';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_PICTURE = 'CHANGE_PICTURE';
export const VALIDATE_QR = 'VALIDATE_QR';
export const PULL_USER_FROM_LOCAL = 'PULL_USER_FROM_LOCAL';

export function createAccount(token, navigate) {
	return {
		type: CREATE_ACCOUNT,
		navigate: navigate,
		payload: axios
			.post(
				'http://172.31.99.35:3001/api/user/authWithLinkedIn/' +
					token.access_token
			)
			.then(result => {
				return result.data;
			}),
	};
}

export function getUserInfo(uid, auth) {
	return {
		type: GET_USER_INFO,
		ownProfile: auth,
		payload: axios
			.get(`http://172.31.99.35:3001/api/user/getInfo/${uid}`)
			.then(res => res.data),
	};
}

export function changeName() {
	return {
		type: CHANGE_NAME,
		payload: axios.post('/api/user/settings/changeName').then(res => res.data),
	};
}

export function changeEmail() {
	return {
		type: CHANGE_EMAIL,
		payload: axios.post('/api/user/settings/changeEmail').then(res => res.data),
	};
}

export function changePicture() {
	return {
		type: CHANGE_PICTURE,
		payload: axios
			.post('/api/user/settings/changePicture')
			.then(res => res.data),
	};
}

export function validateQr(uid) {
	return {
		type: VALIDATE_QR,
		payload: console.log(uid),
	};
}

export function pullUserFromLocal() {
	return {
		type: PULL_USER_FROM_LOCAL,
		payload: AsyncStorage.getItem('USER_DATA').then(res => {
			return JSON.parse(res);
		}),
	};
}
