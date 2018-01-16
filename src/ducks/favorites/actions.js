import axios from 'axios';

import { AsyncStorage } from 'react-native';

const SAVE_FAVORITE = 'SAVE_FAVORITE';
const GET_FAVORITES_FROM_DB = 'GET_FAVORITES_FROM_DB';
const GET_FAVORITES_FROM_LOCAL = 'GET_FAVORITES_FROM_LOCAL';

export function saveFavorite(data) {
	return {
		type: SAVE_FAVORITE,
		payload: axios.post('/api/favorite/save', data).then(res => res.data),
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

export function getFavoritesFromDb() {
	return {
		type: GET_FAVORITES_FROM_DB,
		payload: AsyncStorage.getItem('USER_FAVORITES').then(res =>
			JSON.parse(res)
		),
	};
}
