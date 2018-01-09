import { AsyncStorage } from "react-native";

import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_PICTURE, GET_USER_INFO } from "./actions";

let initialState = {
	uid: "",
	loading: false,
	error: false,
	name: "",
	company: "",
	position: "",
	profilePicURL: "",
	profileUid: "",
	ownProfile: true,
};

AsyncStorage.getItem("USER_DATA").then(result => {
	initialState.uid = JSON.parse(result).uid;
});

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER_INFO + "_PENDING":
			return Object.assign({}, state, { loading: true });
		case GET_USER_INFO + "_FULFILLED":
			const { name, position, company, profilepic, uid } = action.payload.data;
			return Object.assign({}, state, {
				name,
				position,
				company,
				profilePicURL: profilepic,
				loading: false,
				profileUid: uid,
				ownProfile: initialState.uid === uid,
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
		default:
			return state;
	}
}
