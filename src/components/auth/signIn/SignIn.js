import React, { Component } from 'react';

import {
	Container,
	Header,
	Content,
	Form,
	Item,
	Input,
	Button,
	connectStyle,
	Label
} from 'native-base';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { withNavigation } from 'react-navigation';

import firebase from 'react-native-firebase';

@withNavigation
export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			uid: '',
			authed: false,
			error: ''
		};

		this.signIn = this.signIn.bind(this);
	}

	signIn(state) {
		AsyncStorage.setItem('USER_KEY', 'Xf4eoJbIMNenOdFu78rstexnNOG2').then(() =>
			this.props.navigation.navigate('SignedIn')
		);
		if (this.state.username && this.state.password) {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.state.username, this.state.password)
				.then(result => {
					console.log(result._user.uid);

					AsyncStorage.setItem('USER_KEY', 'Xf4eoJbIMNenOdFu78rstexnNOG2').then(
						() => this.props.navigation.navigate('SignedIn')
					);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}

	render() {
		console.log(this.props);
		return (
			<Form style={{ width: '100%' }}>
				<Item floatingLabel>
					<Label>Username</Label>
					<Input
						floatingLabel={true}
						onChangeText={text => {
							this.setState({ username: text });
						}}
					/>
				</Item>
				<Item floatingLabel last>
					<Label> Password </Label>
					<Input
						secureTextEntry={true}
						onChangeText={text => {
							this.setState({ password: text });
						}}
					/>
				</Item>
				<Button style={{ marginTop: 15 }} block success onPress={this.signIn}>
					<Text> Sign In Component </Text>
				</Button>
			</Form>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInput: {
		height: 50,
		width: 250
	}
});
