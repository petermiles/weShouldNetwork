import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const GET_LINKS_FROM_NAV = 'GET_LINKS_FROM_NAV';
export const GET_LINKS_FROM_LOCAL = 'GET_LINKS_FROM_LOCAL';
export const ADD_LINK = 'ADD_LINK';
export const UPDATE_LINK = 'UPDATE_LINK';
export const DELETE_LINK = 'DELETE_LINK';

export function getLinksFromNav(uid, baseuid) {
	return {
		type: GET_LINKS_FROM_NAV,
		payload: AsyncStorage.getItem('USER_LINKS').then(result => {
			if (result) {
				return JSON.parse(result);
			} else {
				axios
					.get('http://172.31.99.35:3001/api/user/getConnectLinks/${uid}')
					.then(result => {
						if (uid === baseuid) {
							AsyncStorage.setItem('USER_LINKS', JSON.stringify(result.data));
						}
						return result.data;
					});
			}
		}),
	};
}

export function getLinksFromLocal(uid) {
	return {
		type: GET_LINKS_FROM_LOCAL,
		payload: AsyncStorage.getItem('USER_LINKS'),
	};
}

export function addLink(state) {
	return {
		type: ADD_LINK,
		payload: '',
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
