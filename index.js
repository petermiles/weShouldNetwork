import React from "react";

import { AppRegistry, AsyncStorage } from "react-native";
import { createRootNavigator } from "./router";

import { checkAuth } from "./src/functions/auth";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			signedIn: false,
			checkedSignIn: false,
			loading: true,
		};
	}

	componentDidMount() {
		AsyncStorage.getItem("USER_DATA").then(result => {
			console.log(result);
			this.setState({ signedIn: result, checkedSignIn: true });
			console.log(this.state.signedIn);
		});
	}

	render() {
		const { checkedSignIn, signedIn } = this.state;
		if (!checkedSignIn) {
			return null;
		}
		const Layout = createRootNavigator(signedIn);
		return <Layout props={checkAuth} />;
	}
}

AppRegistry.registerComponent("android", () => App);
