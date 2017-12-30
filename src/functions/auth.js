import { AsyncStorage } from "react-native";

import firebase from "react-native-firebase";

import axios from "axios";

export const checkAuth = () => {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem("USER_DATA")
			.then(res => {
				if (res !== "false") {
					resolve(true);
				} else {
					resolve(false);
				}
			})
			.catch(err => reject(err));
	});
};

export const ScanOpen = () => {
	return true;
};

export const Signout = () => {
	firebase.signout().then(() => {
		AsyncStorage.setItem("USER_KEY", false);
	});
};

export const createLinkedInAccount = (token, navigate) => {
	axios.get("http://192.168.1.15:3001/api/user/createWithLinkedIn/" + token.access_token).then(result => {
		AsyncStorage.setItem("USER_DATA", JSON.stringify(result.data.userData), () => {
			AsyncStorage.setItem("USER_LINKS", JSON.stringify(result.data.userLinks), () => {
				navigate("SignedIn");
			});
		});
	});
};

export const createAccount = (state, navigate) => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(state.email, state.password)
		.then(result => {
			console.log(Object.assign({}, state, { uid: result._user.uid }));
			axios.post("http://172.31.99.35:3001/api/user/create", Object.assign({}, state, { uid: result._user.uid })).then(result => {
				AsyncStorage.setItem("USER_DATA", JSON.stringify(result.data), () => {
					navigate("SignedIn");
				});
			});
		});
};

// export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

// export const isSignedIn = () => {
// 	return new Promise((resolve, reject) => {
// 		AsyncStorage.getItem(USER_KEY)
// 			.then(res => {
// 				if (res !== null) {
// 					resolve(true);
// 				} else {
// 					resolve(false);
// 				}
// 			})
// 			.catch(err => reject(err));
// 	});
// };
