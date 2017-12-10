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
			loading: true
		};
	}

	componentDidMount() {
		checkAuth()
			.then(result => {
				this.setState({ signedIn: result, checkedSignIn: true });
			})
			.catch(error => alert("An error occured 😔😔"));
	}

	render() {
		const { checkedSignIn, signedIn } = this.state;

		// If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
		if (!checkedSignIn) {
			return null;
		}

		const Layout = createRootNavigator(signedIn);
		return <Layout />;
	}
}

AppRegistry.registerComponent("android", () => App);
