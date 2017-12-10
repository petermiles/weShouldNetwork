import React, { Component } from "react";

import { Container, Content, Button, Text } from "native-base";

import { StyleSheet } from "react-native";

import { NavigationActions } from "react-navigation";

import SignIn from "./../../auth/signIn/SignIn";

export default ({ navigation }) => (
	<Container>
		<Content contentContainerStyle={styles.container}>
			<SignIn />
			<Button
				danger
				block
				style={{
					width: "75%",
					marginTop: 20,
					marginLeft: "14%",
					marginRight: "16%"
				}}
				onPress={() => {
					navigation.navigate("SignUp");
				}}
			>
				<Text> Sign Up </Text>
			</Button>
		</Content>
	</Container>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});
