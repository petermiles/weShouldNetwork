import { AsyncStorage } from "react-native";

import firebase from "react-native-firebase";

export const checkAuth = () => {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem("USER_KEY")
			.then(res => {
				if (res !== null) {
					resolve(true);
				} else {
					resolve(false);
				}
			})
			.catch(err => reject(err));
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
