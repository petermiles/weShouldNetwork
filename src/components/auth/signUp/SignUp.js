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

import axios from 'axios';

@withNavigation
export default class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			uid: '',
			name: '',
			authed: false
		};

		this.createAccount = this.createAccount.bind(this);
	}

	// move this over to auth functions
	createAccount(state) {
		if (this.state.email && this.state.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(result => {
					axios
						.post('http://172.31.99.35:3001/api/user/create', {
							email: this.state.email,
							uid: result._user.uid,
							name: this.state.name
						})
						.then(result => {
							AsyncStorage.setItem('USER_KEY', result.data.id);
							this.props.navigation.navigate('SignedIn', {
								user: result.data.id
							});
						})
						.catch(console.log);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}

	render() {
		return (
			<Form style={{ width: '75%' }}>
				<Item floatingLabel>
					<Label>Name</Label>
					<Input
						floatingLabel={true}
						onChangeText={text => {
							this.setState({ name: text });
						}}
					/>
				</Item>
				<Item floatingLabel>
					<Label>Email</Label>
					<Input
						floatingLabel={true}
						onChangeText={text => {
							this.setState({ email: text });
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
				<Button
					style={{ marginTop: 15 }}
					block
					success
					onPress={this.createAccount}>
					<Text> Sign Up Component </Text>
				</Button>
			</Form>
		);
	}
}
