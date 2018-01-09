import axios from "axios";

export const GET_USER_INFO = "GET_USER_INFO";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_PICTURE = "CHANGE_PICTURE";

export function getUserInfo(uid) {
	return {
		type: GET_USER_INFO,
		payload: axios.get(`http://172.31.99.35:3001/api/user/getInfo/${uid}`),
	};
}

export function changeName() {
	return {
		type: CHANGE_NAME,
		payload: axios
			.post("/api/user/settings/changeName")
			.then(res => res.data)
			.catch(console.log),
	};
}

export function changeEmail() {
	return {
		type: CHANGE_EMAIL,
		payload: axios
			.post("/api/user/settings/changeEmail")
			.then(res => res.data)
			.catch(console.log),
	};
}

export function changePicture() {
	return {
		type: CHANGE_PICTURE,
		payload: axios
			.post("/api/user/settings/changePicture")
			.then(res => res.data)
			.catch(console.log),
	};
}
