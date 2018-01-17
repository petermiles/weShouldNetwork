import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const GET_LINKS_FROM_NAV = 'GET_LINKS_FROM_NAV';
export const GET_LINKS_FROM_LOCAL = 'GET_LINKS_FROM_LOCAL';
export const SELECT_PROVIDER = 'SELECT_PROVIDER';
export const SAVE_LINK = 'SAVE_LINK';
export const UPDATE_LINK = 'UPDATE_LINK';
export const DELETE_LINK = 'DELETE_LINK';

export function getLinksFromNav(uid) {
	return {
		type: GET_LINKS_FROM_NAV,
		payload: axios
			.get(`http://172.31.99.35:3001/api/user/getConnectLinks/${uid}`)
			.then(res => res),
	};
}
export function getLinksFromLocal(uid) {
	return {
		type: GET_LINKS_FROM_LOCAL,
		payload: AsyncStorage.getItem('USER_LINKS'),
	};
}

export function selectProvider(provider) {
	return {
		type: SELECT_PROVIDER,
		payload: '',
	};
}

export function saveLink(link, provider, uid) {
	return {
		type: SAVE_LINK,
		payload: axios
			.post('http://172.31.99.35:3001/api/user/connectLink/add', {
				link,
				provider,
				uid,
			})
			.then(res => res.data),
	};
}

export function updateLink(state) {
	return {
		type: UPDATE_LINK,
		payload: '',
	};
}

export function deleteLink(state) {
	return {
		type: DELETE_LINK,
		payload: '',
	};
}
