import {
	SAVE_FAVORITE,
	GET_FAVORITES_FROM_DB,
	GET_FAVORITES_FROM_LOCAL,
	CHECK_FAVORITES_FOR_SAVED,
} from './actions';

import { AsyncStorage } from 'react-native';

const initialState = {
	favorites: '',
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

		case `${GET_FAVORITES_FROM_LOCAL}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${GET_FAVORITES_FROM_LOCAL}_FULFILLED`:
			return Object.assign({}, state, {
				favorites: action.payload,
				loading: false,
				saved: true,
			});
		case `${GET_FAVORITES_FROM_LOCAL}_REJECTED`:
			return Object.assign({}, state, { loading: true });

		case `${GET_FAVORITES_FROM_DB}_PENDING`:
			return Object.assign({}, state, { loading: true });
		case `${GET_FAVORITES_FROM_DB}_FULFILLED`:
			console.log(action.payload);
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
			console.log(action.payload);
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
