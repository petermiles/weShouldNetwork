import axios from 'axios';

import { AsyncStorage } from 'react-native';

export const SAVE_FAVORITE = 'SAVE_FAVORITE';
export const GET_FAVORITES_FROM_DB = 'GET_FAVORITES_FROM_DB';
export const GET_FAVORITES_FROM_LOCAL = 'GET_FAVORITES_FROM_LOCAL';
export const CHECK_FAVORITES_FOR_SAVED = 'CHECK_FAVORITES_FOR_SAVED';

export function saveFavorite(profileUid, userUid) {
	return {
		type: SAVE_FAVORITE,
		payload: axios
			.post('http://172.31.99.35:3001/api/user/favorites/save', {
				profileUid,
				userUid,
			})
			.then(res => res.data),
	};
}

export function getFavoritesFromLocal() {
	return {
		type: GET_FAVORITES_FROM_LOCAL,
		payload: AsyncStorage.getItem('USER_FAVORITES').then(res =>
			JSON.parse(res)
		),
	};
}

export function checkFavoritesForSaved(profileUid, userUid) {
	console.log(profileUid, userUid);
	return {
		type: CHECK_FAVORITES_FOR_SAVED,
		payload: axios
			.post('http://172.31.99.35:3001/api/user/favorites/checkSaved', {
				profileUid,
				userUid,
			})
			.then(res => res.data),
	};
}

export function getFavoritesFromDb(profileUid, userUid) {
	return {
		type: GET_FAVORITES_FROM_DB,
		payload: AsyncStorage.getItem('USER_FAVORITES').then(res =>
			JSON.parse(res)
		),
	};
}
