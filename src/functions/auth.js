import { AsyncStorage } from 'react-native';

import firebase from 'react-native-firebase';

import axios from 'axios';

export const checkAuth = () => {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('USER_KEY')
			.then(res => {
				if (res !== 'false') {
					console.log('test');
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
		AsyncStorage.setItem('USER_KEY', false);
	});
};

export const createLinkedInAccount = (token, navigate) => {
	console.log(token, navigate);
	axios
		.get(
			'http://172.31.99.35:3001/api/user/createWithLinkedIn/' +
				token.access_token
		)
		.then(result => {
			console.log(result);
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
