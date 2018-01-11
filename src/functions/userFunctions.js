import axios from "axios";
import { AsyncStorage } from "react-native";

export const getUserInfo = () => {
	AsyncStorage.getItem("USER_KEY").then(result => {
		this.props.navigation.setParams({ user: result });
		axios.get(`http://192.168.1.239/api/user/getInfo/${result}`);
	});
};

export const getConnectLinks = uid => {
	axios.get(`http://192.168.1.239:3001/api/user/getConnectLinks/${uid}`);
};
