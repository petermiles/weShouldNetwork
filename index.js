import React from 'react';

import { AppRegistry, AsyncStorage } from 'react-native';
import { createRootNavigator } from './router';

import { checkAuth } from './src/functions/auth';

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
		AsyncStorage.getItem('USER_KEY').then(result => {
			console.log(result);
			this.setState({ signedIn: result, checkedSignIn: true });
		});
	}

	render() {
		const { checkedSignIn, signedIn } = this.state;
		if (!checkedSignIn) {
			return null;
		}
		const Layout = createRootNavigator(this.state.signedIn);
		return <Layout props={checkAuth} />;
	}
}

AppRegistry.registerComponent('android', () => App);
