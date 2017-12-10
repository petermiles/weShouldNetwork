import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
import styled from "styled-components/native";

import Home from "./../home/Home";

const StyledText = styled.Text`
	color: palevioletred;
`;

export default class Profile extends Component {
	render() {
		return (
			<Container>
				<Content>
					<StyledText>Hey, welcome to your profile.</StyledText>
					<Button
						onPress={() => {
							this.props.navigate("Register");
						}}
					>
						<Text> Navigate To Auth Page </Text>
					</Button>
				</Content>
			</Container>
		);
	}
}
