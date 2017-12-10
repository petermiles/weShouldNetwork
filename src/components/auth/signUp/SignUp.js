import React, { Component } from "react";

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
} from "native-base";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

import { withNavigation } from "react-navigation";

import firebase from "react-native-firebase";

export default class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			uid: "",
			authed: false
		};

		this.createAccount = this.createAccount.bind(this);
	}

	createAccount(state) {
		if (this.state.username && this.state.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(
					this.state.username,
					this.state.password
				)
				.then(result => {
					AsyncStorage.setItem("USER_KEY", result._user.uid);
					this.setState({ uid: result._user.uid, authed: true });
				})
				.catch(error => {
					// Error Handlers Needed.
					console.log(error);
				});
		}
	}

	render() {
		return (
			<Form style={{ width: "75%" }}>
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
				<Button
					style={{ marginTop: 15 }}
					block
					success
					onPress={this.createAccount}
				>
					<Text> Sign Up Component </Text>
				</Button>
			</Form>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	textInput: {
		height: 50,
		width: 250
	}
});
