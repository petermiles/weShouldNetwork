import axios from 'axios';

import { AsyncStorage } from 'react-native';

export const SAVE_FAVORITE = 'SAVE_FAVORITE';
export const GET_FAVORITES_FROM_DB = 'GET_FAVORITES_FROM_DB';
export const GET_FAVORITES = 'GET_FAVORITES';
export const CHECK_FAVORITES_FOR_SAVED = 'CHECK_FAVORITES_FOR_SAVED';

let favorites = AsyncStorage.getItem('USER_FAVORITES');

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

export function getFavorites(uid) {
	console.log(uid);
	return {
		type: GET_FAVORITES,
		payload: axios
			.get(`http://172.31.99.35:3001/api/user/favorites/get/${uid}`)
			.then(res => res.data),

		// ? favorites.then(res => JSON.parse(res))
		// : axios
		// 		.get(`http://172.31.99.35:3001/api/user/favorites/get/${uid}`)
		// 		.then(res => res.data),
	};
}

export function checkFavoritesForSaved(profileUid, userid) {
	return {
		type: CHECK_FAVORITES_FOR_SAVED,
		payload: favorites
			? favorites.then(result => {
					return JSON.parse(result).reduce((acc, val) => {
						val.userid === userid && val.uid === profileUid
							? acc.push(val)
							: null;
						return acc;
					}, []);
				})
			: axios
					.post('http://172.31.99.35:3001/api/user/favorites/checkSaved', {
						profileUid,
						userid,
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
