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

import axios from "axios";

export default class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			uid: "",
			name: "",
			authed: false
		};

		this.createAccount = this.createAccount.bind(this);
	}

	// move this over to auth functions
	createAccount(state) {
		if (this.state.username && this.state.password * this.state.name) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(result => {
					axios
						.post("/api/user/create", {
							email: this.state.email,
							uid: result._user.uid,
							name: this.state.name
						})
						.then(() => {
							AsyncStorage.setItem("USER_KEY", result._user.uid);
							this.setState({ uid: result._user.uid, authed: true });
						})
						.catch(console.log);
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
							this.setState({ username: text });
						}}
					/>
				</Item>
				<Item floatingLabel last>
					<Label> Password </Label>
					<Input
						secureTextEntry={true}
						onChangeText={text => {
							this.setState({ Email: text });
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
