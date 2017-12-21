import axios from "axios";
import { AsyncStorage } from "react-native";

export const getUserInfo = () => {
	AsyncStorage.getItem("USER_KEY").then(result => {
		this.props.navigation.setParams({ user: result });
		axios.get(`http://172.31.99.35:3001/api/user/getInfo/${result}`);
	});
};

export const getConnectLinks = uid => {
	axios.get(`http://172.31.99.35:3001/api/user/getConnectLinks/${uid}`);
};
