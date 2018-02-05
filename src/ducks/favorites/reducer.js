import {
	SAVE_FAVORITE,
	GET_FAVORITES_FROM_DB,
	GET_FAVORITES,
	CHECK_FAVORITES_FOR_SAVED,
} from './actions';

import { AsyncStorage } from 'react-native';

const initialState = {
	favorites: [],
	loading: true,
	saved: false,
};

export default function favoritesReducer(state = initialState, action) {
	switch (action.type) {
		case `${SAVE_FAVORITE}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${SAVE_FAVORITE}_FULFILLED`:
			return Object.assign({}, state, {
				favorites: action.payload,
				loading: false,
				saved: true,
			});
		case `${SAVE_FAVORITE}_REJECTED`:
			return Object.assign({}, state, { loading: true });
		case `${GET_FAVORITES}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${GET_FAVORITES}_FULFILLED`:
			AsyncStorage.setItem('USER_FAVORITES', JSON.stringify(action.payload));
			return Object.assign({}, state, {
				favorites: action.payload,
				loading: false,
				saved: true,
			});
		case `${GET_FAVORITES}_REJECTED`:
			console.log('rejected');
			return Object.assign({}, state, { loading: true });

		case `${GET_FAVORITES_FROM_DB}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${GET_FAVORITES_FROM_DB}_FULFILLED`:
			return Object.assign({}, state, {
				favorites: action.payload,
				loading: false,
				saved: true,
			});
		case `${GET_FAVORITES_FROM_DB}_REJECTED`:
			return Object.assign({}, state, { loading: true });

		case `${CHECK_FAVORITES_FOR_SAVED}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${CHECK_FAVORITES_FOR_SAVED}_FULFILLED`:
			return Object.assign({}, state, {
				loading: false,
				saved: action.payload,
			});
		case `${CHECK_FAVORITES_FOR_SAVED}_REJECTED`:
			return Object.assign({}, state, { loading: true });

		default:
			return state;
	}
}
