import React, { Component } from "react";

import { Container, Content, Button, Text } from "native-base";

import { NavigationActions } from "react-navigation";

import { StyleSheet } from "react-native";

import SignUp from "./../../auth/signUp/SignUp";

export default ({ navigation }) => (
	<Container>
		<Content contentContainerStyle={styles.container}>
			<SignUp />
			<Button
				primary
				block
				style={{ marginTop: 20 }}
				onPress={() => {
					navigation.navigate("SignIn");
				}}
			>
				<Text> Sign In Nav </Text>
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
